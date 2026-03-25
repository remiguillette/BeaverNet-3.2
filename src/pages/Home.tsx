import { Link } from "react-router-dom";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { servicePages } from "../data/servicePages";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero">
          <div className="container">
            <h1>
              <span className="accent-blue">Solutions</span>{" "}
              <span className="accent-orange">innovantes pour votre entreprise</span>
            </h1>

            <p className="hero-text">
              Spécialiste en services d&apos;entreprise, le Groupe Rémi Guillette offre
              une gamme de solutions adaptées à vos besoins.
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
