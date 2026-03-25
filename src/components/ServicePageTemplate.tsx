import Header from "./layout/Header";
import Footer from "./layout/Footer";
import type { ServicePageData } from "../data/servicePages";
import { useTranslation } from "../contexts/TranslationContext";

type ServicePageTemplateProps = {
  service: ServicePageData;
};

export default function ServicePageTemplate({ service }: ServicePageTemplateProps) {
  const { t } = useTranslation();
  const text = (key: string, fallback: string) => {
    const value = t(key);

    return value === key ? fallback : value;
  };

  return (
    <>
      <Header />
      <main className="service-page">
        <section className="service-hero">
          <div className="container">
            <h1>{service.pageTitle}</h1>
            <p>{service.intro}</p>
          </div>
        </section>

        <section className="service-section">
          <div className="container">
            <h2>{text("servicePage.sections.services", "Nos services")}</h2>
            <div className="service-card-grid">
              {service.cards.map((card) => (
                <article key={card.title} className="service-detail-card">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-section">
          <div className="container">
            {service.lists.map((list) => (
              <article key={list.title} className="service-list-card">
                <h3>{list.title}</h3>
                <ul>
                  {list.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="service-legal">
          <div className="container">
            <h2>{text("servicePage.sections.legal", "Information légale")}</h2>
            <p>{service.legalText}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
