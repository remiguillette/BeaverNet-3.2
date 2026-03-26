import { useEffect, useRef } from "react";
import { ShieldCheck, Sparkles } from "lucide-react";
import { useContactForm } from "../../hooks/useContactForm";

export function ContactForm() {
  const { formData, disabled, isSubmitting, feedback, text, handleInputChange, handleSubmit } = useContactForm();

  const submitButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!submitButtonRef.current) {
      return;
    }

    let angle = 0;
    let animationFrameId = 0;

    const rotateGradient = () => {
      angle = (angle + 1) % 360;
      submitButtonRef.current?.style.setProperty("--gradient-angle", `${angle}deg`);
      animationFrameId = requestAnimationFrame(rotateGradient);
    };

    rotateGradient();

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  return (
    <div className="contact-form-shell">
      <div className="contact-form-heading">
        <p className="contact-form-kicker">
          <Sparkles size={16} aria-hidden="true" />
          {text("contact.form.kicker", "Secure contact pipeline")}
        </p>
        <h2>{text("contact.form.title", "Send us a message")}</h2>
        <p>{text("contact.form.subtitle", "Your request is validated and processed securely by our backend.")}</p>
      </div>

      <form onSubmit={handleSubmit} className="contact-form-grid" noValidate>
        <div className="contact-form-two-col">
          <label htmlFor="firstName" className="contact-form-label">
            {text("contact.form.firstName", "First Name")}
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="contact-form-field"
              placeholder={text("contact.form.firstNamePlaceholder", "First name")}
              required
              maxLength={100}
            />
          </label>

          <label htmlFor="lastName" className="contact-form-label">
            {text("contact.form.lastName", "Last Name")}
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="contact-form-field"
              placeholder={text("contact.form.lastNamePlaceholder", "Last name")}
              required
              maxLength={100}
            />
          </label>
        </div>

        <label htmlFor="email" className="contact-form-label">
          {text("contact.form.email", "Email Address")}
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleInputChange}
            className="contact-form-field"
            placeholder={text("contact.form.emailPlaceholder", "you@email.com")}
            required
            maxLength={200}
          />
        </label>

        <label htmlFor="service" className="contact-form-label">
          {text("contact.form.service", "Service of Interest")}
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="contact-form-field"
            required
          >
            <option value="">{text("contact.form.selectService", "Select a service")}</option>
            <option value="public-safety">{text("contact.form.services.publicSafety", "Public Safety")}</option>
            <option value="francophone">{text("contact.form.services.francophone", "Francophone Services")}</option>
            <option value="health-safety">{text("contact.form.services.healthSafety", "Health & Safety")}</option>
            <option value="animal-aid">{text("contact.form.services.animalAid", "Animal First Aid")}</option>
          </select>
        </label>

        <label htmlFor="message" className="contact-form-label">
          {text("contact.form.message", "Message")}
          <textarea
            id="message"
            name="message"
            rows={6}
            value={formData.message}
            onChange={handleInputChange}
            className="contact-form-field contact-form-textarea"
            placeholder={text("contact.form.messagePlaceholder", "How can we help you?")}
            required
            maxLength={2000}
          />
        </label>

        <div className="contact-form-honeypot" aria-hidden="true">
          <label htmlFor="company">Company</label>
          <input
            id="company"
            type="text"
            name="company"
            tabIndex={-1}
            autoComplete="off"
            value={formData.company}
            onChange={handleInputChange}
          />
        </div>

        <div className="contact-form-security-note">
          <ShieldCheck size={17} aria-hidden="true" />
          <span>{text("contact.form.securityNote", "Protected by server-side validation, anti-spam checks, and secret management.")}</span>
        </div>

        {feedback && (
          <p className={feedback.type === "error" ? "contact-form-feedback is-error" : "contact-form-feedback is-success"}>
            {feedback.message}
          </p>
        )}

        <button
          ref={submitButtonRef}
          type="submit"
          disabled={disabled}
          className="border-gradient-button contact-submit-button"
        >
          {isSubmitting ? text("contact.form.submitting", "Sending...") : text("contact.form.submit", "Submit")}
        </button>
      </form>
    </div>
  );
}
