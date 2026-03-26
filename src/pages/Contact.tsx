import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { ContactForm } from "../components/contact/ContactForm";
import { useTranslation } from "../contexts/TranslationContext";

export default function Contact() {
  const { t } = useTranslation();
  const text = (key: string, fallback: string) => {
    const value = t(key);
    return value === key ? fallback : value;
  };

  return (
    <>
      <Header />
      <main className="contact-page">
        <div className="container-responsive contact-page-container">
          <header className="contact-page-header">
            <h1>{text("contact.title", "Contact")}</h1>
            <p>{text("contact.subtitle", "Reach out to us and we will respond as soon as possible.")}</p>
          </header>

          <div className="contact-page-layout">
            <section className="contact-info-stack">
              <article className="contact-info-card">
                <h2>{text("contact.info", "Contact information")}</h2>
                <p>{text("contact.address", "Ontario, Canada")}</p>
                <p>{text("contact.phone", "+1 (555) 123-4567")}</p>
                <p>{text("contact.email", "contact@example.com")}</p>
              </article>

              <article className="contact-info-card">
                <h2>{text("contact.hours", "Hours")}</h2>
                <p>{text("contact.hoursLine1", "24/7 all year")}</p>
                <p>{text("contact.hoursLine2", "Available anytime")}</p>
              </article>
            </section>

            <section>
              <ContactForm />
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
