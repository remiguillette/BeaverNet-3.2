import { useEffect, useRef } from "react";
import { Shield } from "lucide-react";
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
    <div className="contact-form-card bg-black rounded-2xl p-8 border-2 border-primary">
      <h2 className="text-2xl font-bold mb-6 text-primary">{text("contact.form.title", "Send us a message")}</h2>

      <form onSubmit={handleSubmit} className="contact-form-grid">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium mb-2 text-primary">
              {text("contact.form.firstName", "First Name")}
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              autoComplete="given-name"
              value={formData.firstName}
              onChange={handleInputChange}
              className="contact-form-field w-full px-4 py-3 bg-black border-2 border-primary rounded-lg text-white"
              placeholder={text("contact.form.firstNamePlaceholder", "First name")}
              required
            />
          </div>

          <div>
            <label htmlFor="lastName" className="block text-sm font-medium mb-2 text-primary">
              {text("contact.form.lastName", "Last Name")}
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              autoComplete="family-name"
              value={formData.lastName}
              onChange={handleInputChange}
              className="contact-form-field w-full px-4 py-3 bg-black border-2 border-primary rounded-lg text-white"
              placeholder={text("contact.form.lastNamePlaceholder", "Last name")}
              required
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-primary">
            {text("contact.form.email", "Email Address")}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            value={formData.email}
            onChange={handleInputChange}
            className="contact-form-field w-full px-4 py-3 bg-black border-2 border-primary rounded-lg text-white"
            placeholder={text("contact.form.emailPlaceholder", "you@email.com")}
            required
          />
        </div>

        <div>
          <label htmlFor="service" className="block text-sm font-medium mb-2 text-primary">
            {text("contact.form.service", "Service of Interest")}
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleInputChange}
            className="contact-form-field w-full px-4 py-3 bg-black border-2 border-primary rounded-lg text-white"
            required
          >
            <option value="">{text("contact.form.selectService", "Select a service")}</option>
            <option value="public-safety">{text("contact.form.services.publicSafety", "Public Safety")}</option>
            <option value="francophone">{text("contact.form.services.francophone", "Francophone Services")}</option>
            <option value="health-safety">{text("contact.form.services.healthSafety", "Health & Safety")}</option>
            <option value="animal-aid">{text("contact.form.services.animalAid", "Animal First Aid")}</option>
          </select>
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-2 text-primary">
            {text("contact.form.message", "Message")}
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            value={formData.message}
            onChange={handleInputChange}
            className="contact-form-field w-full px-4 py-4 bg-black border-2 border-primary rounded-lg text-white resize-none"
            placeholder={text("contact.form.messagePlaceholder", "How can we help you?")}
            required
          />
        </div>

        <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden="true">
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
          <input type="url" name="url" tabIndex={-1} autoComplete="off" />
          <input type="tel" name="phone_hidden" tabIndex={-1} autoComplete="off" />
        </div>

        <div className="flex justify-center">
          <div className="text-primary text-center text-sm flex flex-col items-center">
            <div className="flex items-center gap-2 mb-1">
              <Shield size={16} aria-hidden="true" />
              <span>{text("contact.form.securityNote", "Enhanced abuse protection enabled")}</span>
            </div>
          </div>
        </div>

        {feedback && (
          <p className={feedback.type === "error" ? "text-red-500" : "text-green-500"}>{feedback.message}</p>
        )}

        <button
          ref={submitButtonRef}
          type="submit"
          disabled={disabled}
          className="border-gradient-button w-full py-4 px-8 text-white font-semibold disabled:opacity-50"
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center gap-2">
              <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" aria-hidden="true">
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M12 2a10 10 0 0 0-10 10h4a6 6 0 0 1 6-6V2z"
                />
              </svg>
              {text("contact.form.submitting", "Sending...")}
            </span>
          ) : (
            text("contact.form.submit", "Submit")
          )}
        </button>
      </form>
    </div>
  );
}
