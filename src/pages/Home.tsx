import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { servicePages } from "../data/servicePages";
import { useTranslation } from "../contexts/TranslationContext";

export default function Home() {
  const { t } = useTranslation();
  const text = (key: string, fallback: string) => {
    const value = t(key);
    return value === key ? fallback : value;
  };

  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <h1>
              <span className="accent-blue">{text("home.hero.titleLead", "Innovative")}</span>{" "}
              <span className="accent-orange">{text("home.hero.titleAccent", "solutions for your business")}</span>
            </h1>

            <p className="hero-text">
              <span className="accent-orange">
                {text(
                  "home.hero.description",
                  "Specializing in business services, the Rémi Guillette Group offers a range of solutions tailored to your needs.",
                )}
              </span>
            </p>
          </div>
        </section>

        <section className="sectors">
          <div className="container">
            <h2>Secteurs d&apos;activité</h2>

            <div className="card-grid">
              {servicePages.map((servicePage) => {
                const Icon = servicePage.homeIcon;

                return (
                  <Link
                    key={servicePage.path}
                    to={servicePage.path}
                    className="sector-card"
                    aria-label={`Voir ${servicePage.homeTitle}`}
                  >
                    <Icon className="sector-icon" aria-hidden="true" />
                    <h3>{servicePage.homeTitle}</h3>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
