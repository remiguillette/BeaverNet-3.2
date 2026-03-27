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
                <p>{text("footer.contact.line1", "6388 Hawkins Street")}</p>
                <p>{text("footer.contact.line2", "Apt. 307")}</p>
                <p>{text("footer.contact.line3", "Niagara Falls, Ontario")}</p>
                <p>{text("footer.contact.line4", "L2G 1P3")}</p>
                <p>{text("contact.phone", "613-501-2160")}</p>
                <p>{text("contact.email", "contact@example.com")}</p>
              </article>

              <article className="contact-info-card">
                <h2>{text("contact.hours", "Hours")}</h2>
                <p>{text("contact.hoursLine1", "24 hours a day, 7 days a week, year-round")}</p>
                <p>{text("contact.hoursLine2", "Continuous availability")}</p>
                <p>{text("contact.hoursLine3", "Canadian statutory holidays: on-call")}</p>
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
