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
      <main className="py-16 bg-black min-h-screen w-full">
        <div className="container-responsive">
          <header className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-primary">{text("contact.title", "Contact")}</h1>
            <p className="text-xl max-w-4xl mx-auto text-primary">
              {text("contact.subtitle", "Reach out to us and we will respond as soon as possible.")}
            </p>
          </header>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <section className="space-y-8">
              <div className="bg-black rounded-2xl p-8 border-2 border-primary">
                <h2 className="text-2xl font-bold mb-6 text-primary">{text("contact.info", "Contact information")}</h2>
                <p className="text-primary">{text("contact.address", "Ontario, Canada")}</p>
                <p className="text-primary">{text("contact.phone", "+1 (555) 123-4567")}</p>
                <p className="text-primary">{text("contact.email", "contact@example.com")}</p>
              </div>

              <div className="bg-black rounded-2xl p-8 border-2 border-primary">
                <h2 className="text-xl font-bold mb-4 text-primary">{text("contact.hours", "Hours")}</h2>
                <p className="text-primary">{text("contact.hoursLine1", "24/7 all year")}</p>
                <p className="text-primary">{text("contact.hoursLine2", "Available anytime")}</p>
              </div>
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
