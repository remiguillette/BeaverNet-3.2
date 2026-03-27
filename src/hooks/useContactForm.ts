import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "../contexts/TranslationContext";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
  website: string;
};

const INITIAL_FORM: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  service: "",
  message: "",
  website: "",
};

type ValidationResult =
  | { ok: true }
  | { ok: false; message: string };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_SUBMIT_DELAY_MS = 3000;
const SUBMIT_COOLDOWN_MS = 15000;
const DEBUG_LOG_PREFIX = "[ContactForm Debug]";

function validateContactForm(data: ContactFormData, formStartTime: number): ValidationResult {
  const elapsed = Date.now() - formStartTime;

  if (elapsed < MIN_SUBMIT_DELAY_MS) {
    return { ok: false, message: "Please take a moment before submitting the form." };
  }

  if (!data.firstName || !data.lastName || !data.email || !data.service || !data.message) {
    return { ok: false, message: "Please fill in all required fields." };
  }

  if (!emailRegex.test(data.email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (data.message.length < 10) {
    return { ok: false, message: "Message must be at least 10 characters." };
  }

  if (data.firstName.length > 100 || data.lastName.length > 100 || data.email.length > 200 || data.message.length > 2000) {
    return { ok: false, message: "Input is too long." };
  }

  return { ok: true };
}

const CONTACT_API_URL = import.meta.env.VITE_CONTACT_API_URL;
console.log("[ContactForm Debug] VITE_CONTACT_API_URL =", CONTACT_API_URL);

export function useContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [formStartTime, setFormStartTime] = useState(Date.now());

  const disabled = useMemo(() => isSubmitting, [isSubmitting]);

  const text = (key: string, fallback: string) => {
    const value = t(key);
    return value === key ? fallback : value;
  };

  const getValidationMessage = (validationMessage: string) => {
    if (validationMessage === "Please take a moment before submitting the form.") {
      return text("contact.form.validation.tooFast", validationMessage);
    }

    if (validationMessage === "Please fill in all required fields.") {
      return text("contact.form.validation.required", validationMessage);
    }

    if (validationMessage === "Please enter a valid email address.") {
      return text("contact.form.validation.invalidEmail", validationMessage);
    }

    if (validationMessage === "Message must be at least 10 characters.") {
      return text("contact.form.validation.messageMin", validationMessage);
    }

    if (validationMessage === "Input is too long.") {
      return text("contact.form.validation.messageMax", "Please shorten one or more fields.");
    }

    return validationMessage;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM);
    setFormStartTime(Date.now());
  };

  const hasCooldown = () => {
    const lastSubmission = Number(localStorage.getItem("contact_form_last_submit") ?? "0");
    return Date.now() - lastSubmission < SUBMIT_COOLDOWN_MS;
  };

  const setCooldown = () => {
    localStorage.setItem("contact_form_last_submit", String(Date.now()));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(`${DEBUG_LOG_PREFIX} handleSubmit triggered`, {
      timestamp: new Date().toISOString(),
      isSubmitting,
    });

    if (disabled) {
      console.log(`${DEBUG_LOG_PREFIX} submit blocked because form is currently disabled`);
      return;
    }

    if (hasCooldown()) {
      console.log(`${DEBUG_LOG_PREFIX} submit blocked by cooldown`);
      setFeedback({
        type: "error",
        message: text("contact.form.validation.cooldown", "Please wait a few seconds before sending another message."),
      });
      return;
    }

    const validation = validateContactForm(formData, formStartTime);
    if (!validation.ok) {
      console.log(`${DEBUG_LOG_PREFIX} validation failed`, { reason: validation.message });
      setFeedback({ type: "error", message: getValidationMessage(validation.message) });
      return;
    }

    if (!CONTACT_API_URL?.trim()) {
      console.log(`${DEBUG_LOG_PREFIX} submit blocked: missing VITE_CONTACT_API_URL`);
      setFeedback({
        type: "error",
        message: text(
          "contact.form.errorMessage",
          "Contact form is unavailable right now. Missing VITE_CONTACT_API_URL configuration.",
        ),
      });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      console.log("[ContactForm Debug] about to fetch", {
        CONTACT_API_URL,
        windowOrigin: window.location.origin,
        pathname: window.location.pathname,
      });
      console.log(`${DEBUG_LOG_PREFIX} sending request`, {
        endpoint: CONTACT_API_URL,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        service: formData.service,
        messageLength: formData.message.length,
      });
      const response = await fetch(CONTACT_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          message: formData.message,
          firstName: formData.firstName,
          lastName: formData.lastName,
          service: formData.service,
          website: formData.website,
        }),
      });

      const raw = await response.text();
      let json: any = {};
      try {
        json = raw ? JSON.parse(raw) : {};
      } catch {
        json = { raw };
      }

      if (!response.ok) {
        throw new Error(json?.error || `HTTP ${response.status}`);
      }

      console.log(`${DEBUG_LOG_PREFIX} request succeeded`, {
        status: response.status,
        statusText: response.statusText,
      });
      setCooldown();
      resetForm();
      setFeedback({
        type: "success",
        message: text("contact.form.successMessage", "Your message was sent successfully."),
      });
    } catch (err) {
      console.log(`${DEBUG_LOG_PREFIX} request failed`, {
        error: err instanceof Error ? err.message : err,
      });
      setFeedback({
        type: "error",
        message:
          err instanceof Error
            ? err.message
            : text("contact.form.errorMessage", "An error occurred while sending your message."),
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    disabled,
    isSubmitting,
    feedback,
    text,
    handleInputChange,
    handleSubmit,
  };
}
