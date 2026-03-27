import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import { servicePages } from "../data/servicePages";
import { useTranslation } from "../contexts/TranslationContext";

export default function Home() {
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

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <h1>
              {renderFirstWordBlue(text("home.hero.title", "Innovative solutions for your business"))}
            </h1>
          </div>
        </section>

        <section className="sectors">
          <div className="container">
            <div className="card-grid">
              {servicePages.map((servicePage) => {
                const Icon = servicePage.homeIcon;
                const translatedTitle = text(
                  `home.sectors.items.${servicePage.key}`,
                  servicePage.homeTitle,
                );

                return (
                  <Link
                    key={servicePage.path}
                    to={servicePage.path}
                    className="sector-card accent-orange-card"
                    aria-label={`${text("home.sectors.viewAriaPrefix", "View")} ${translatedTitle}`}
                  >
                    <Icon className="sector-icon accent-orange" aria-hidden="true" />
                    <h3>{renderFirstWordBlue(translatedTitle)}</h3>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
