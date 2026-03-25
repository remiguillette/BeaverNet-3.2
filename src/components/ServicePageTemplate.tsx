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
  const serviceBaseKey = `servicePage.services.${service.key}`;

  return (
    <>
      <Header />
      <main className="service-page">
        <section className="service-hero">
          <div className="container">
            <h1>{text(`${serviceBaseKey}.pageTitle`, service.pageTitle)}</h1>
            <p>{text(`${serviceBaseKey}.intro`, service.intro)}</p>
          </div>
        </section>

        <section className="service-section">
          <div className="container">
            <h2>{text("servicePage.sections.services", "Nos services")}</h2>
            <div className="service-card-grid">
              {service.cards.map((card, cardIndex) => (
                <article key={card.title} className="service-detail-card">
                  <h3>{text(`${serviceBaseKey}.cards.${cardIndex}.title`, card.title)}</h3>
                  <p>{text(`${serviceBaseKey}.cards.${cardIndex}.description`, card.description)}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="service-section">
          <div className="container">
            {service.lists.map((list, listIndex) => (
              <article key={list.title} className="service-list-card">
                <h3>{text(`${serviceBaseKey}.lists.${listIndex}.title`, list.title)}</h3>
                <ul>
                  {list.items.map((item, itemIndex) => (
                    <li key={item}>
                      {text(`${serviceBaseKey}.lists.${listIndex}.items.${itemIndex}`, item)}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="service-legal">
          <div className="container">
            <h2>{text("servicePage.sections.legal", "Information légale")}</h2>
            <p>{text(`${serviceBaseKey}.legalText`, service.legalText)}</p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
