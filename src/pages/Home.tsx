import { Link } from "react-router-dom";
import { CarFront, FileText, Map, PawPrint, Shield, type LucideIcon } from "lucide-react";
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

  const servicePageByKey = servicePages.reduce<Record<string, (typeof servicePages)[number]>>(
    (accumulator, servicePage) => {
      accumulator[servicePage.key] = servicePage;
      return accumulator;
    },
    {},
  );

  type HomeCard = {
    key: string;
    icon: LucideIcon;
    path?: string;
    externalUrl?: string;
  };

  const homeCards: HomeCard[] = [
    { key: "publicSafety", icon: Shield, path: servicePageByKey.publicSafety?.path },
    { key: "animalFirstAid", icon: PawPrint, path: servicePageByKey.animalFirstAid?.path },
    { key: "healthSafety", icon: Map, path: servicePageByKey.healthSafety?.path },
    { key: "francophoneServices", icon: FileText, path: servicePageByKey.francophoneServices?.path },
    {
      key: "beaverMto",
      icon: CarFront,
      externalUrl: "https://www.ontario.ca/page/driver-and-vehicle-services",
    },
  ];

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
              {homeCards.map((card) => {
                const Icon = card.icon;
                const translatedTitle = text(
                  `home.sectors.items.${card.key}`,
                  card.key,
                );
                const ariaLabel = `${text("home.sectors.viewAriaPrefix", "View")} ${translatedTitle}`;
                const cardClasses = "sector-card accent-orange-card";

                if (card.externalUrl) {
                  return (
                    <a
                      key={card.key}
                      href={card.externalUrl}
                      className={cardClasses}
                      aria-label={ariaLabel}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Icon className="sector-icon accent-orange" aria-hidden="true" />
                      <h3>{renderFirstWordBlue(translatedTitle)}</h3>
                    </a>
                  );
                }

                if (!card.path) {
                  return null;
                }

                return (
                  <Link
                    key={card.key}
                    to={card.path}
                    className={cardClasses}
                    aria-label={ariaLabel}
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
