import { useMemo, useState, type ChangeEvent, type FormEvent } from "react";
import { useTranslation } from "../contexts/TranslationContext";

type ContactFormData = {
  firstName: string;
  lastName: string;
  email: string;
  service: string;
  message: string;
};

const INITIAL_FORM: ContactFormData = {
  firstName: "",
  lastName: "",
  email: "",
  service: "",
  message: "",
};

type ValidationResult =
  | { ok: true }
  | { ok: false; message: string };

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validateContactForm(data: ContactFormData, formStartTime: number): ValidationResult {
  const elapsed = Date.now() - formStartTime;

  if (elapsed < 3000) {
    return { ok: false, message: "Please take a moment before submitting the form." };
  }

  if (!data.firstName || !data.lastName || !data.email || !data.message) {
    return { ok: false, message: "Please fill in all required fields." };
  }

  if (!emailRegex.test(data.email)) {
    return { ok: false, message: "Please enter a valid email address." };
  }

  if (data.message.length < 10) {
    return { ok: false, message: "Message must be at least 10 characters." };
  }

  if (data.message.length > 2000) {
    return { ok: false, message: "Message must not exceed 2000 characters." };
  }

  return { ok: true };
}

export function useContactForm() {
  const { t } = useTranslation();
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<{ type: "success" | "error"; message: string } | null>(null);
  const [formStartTime] = useState(Date.now());

  const disabled = useMemo(() => isSubmitting, [isSubmitting]);

  const text = (key: string, fallback: string) => {
    const value = t(key);

    return value === key ? fallback : value;
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (disabled) {
      return;
    }

    const validation = validateContactForm(formData, formStartTime);
    if (!validation.ok) {
      setFeedback({ type: "error", message: validation.message });
      return;
    }

    setIsSubmitting(true);
    setFeedback(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          formStartTime: String(formStartTime),
          website: "",
          url: "",
          phone_hidden: "",
        }),
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      setFormData(INITIAL_FORM);
      setFeedback({
        type: "success",
        message: text("contact.form.successMessage", "Your message was sent successfully."),
      });
    } catch {
      setFeedback({
        type: "error",
        message: text("contact.form.errorMessage", "An error occurred while sending your message."),
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
