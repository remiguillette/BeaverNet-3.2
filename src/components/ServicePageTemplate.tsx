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
  const renderFirstWordBlue = (value: string) => {
    const [firstWord, ...remainingWords] = value.trim().split(/\s+/);

    return (
      <>
        <span className="accent-blue">{firstWord}</span>
        {remainingWords.length > 0 ? (
          <>
            {" "}
            <span className="accent-orange">{remainingWords.join(" ")}</span>
          </>
        ) : null}
      </>
    );
  };
  const serviceBaseKey = `servicePage.services.${service.key}`;

  const showAnimalLegalSection = service.key === "animalFirstAid";

  return (
    <>
      <Header />
      <main className="service-page">
        <section className="service-hero">
          <div className="container">
            <h1>{renderFirstWordBlue(text(`${serviceBaseKey}.pageTitle`, service.pageTitle))}</h1>
            <p>{text(`${serviceBaseKey}.intro`, service.intro)}</p>
          </div>
        </section>

        <section className="service-section">
          <div className="container">
            <h2>{renderFirstWordBlue(text("servicePage.sections.services", "Nos services"))}</h2>
            <div className="service-card-grid">
              {service.cards.map((card, cardIndex) => (
                <article key={card.title} className="service-detail-card">
                  <h3>{renderFirstWordBlue(text(`${serviceBaseKey}.cards.${cardIndex}.title`, card.title))}</h3>
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
                <h3>{renderFirstWordBlue(text(`${serviceBaseKey}.lists.${listIndex}.title`, list.title))}</h3>
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

        {showAnimalLegalSection ? (
          <section className="service-legal">
            <div className="container">
              <h2>
                {renderFirstWordBlue(
                  text(
                    "servicePage.sections.legalAnimalServices",
                    "Legal Information for Animal Services",
                  ),
                )}
              </h2>
              <p>{text(`${serviceBaseKey}.legalText`, service.legalText)}</p>
            </div>
          </section>
        ) : null}
      </main>
      <Footer />
    </>
  );
}
