import { Link } from "react-router-dom";
import { Shield, User, HardHat, PawPrint } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

const divisions = [
  {
    icon: Shield,
    title: "Cabinet-conseil en sécurité publique",
    href: "/public-safety",
  },
  {
    icon: User,
    title: "Services communautaires francophones",
    href: "/francophone-services",
  },
  {
    icon: HardHat,
    title: "Services en santé et sécurité au travail (SST)",
    href: "/health-safety",
  },
  {
    icon: PawPrint,
    title: "Services de premiers soins animaliers",
    href: "/animal-first-aid",
  },
];

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
              {divisions.map((division) => {
                const Icon = division.icon;

                return (
                  <Link
                    key={division.href}
                    to={division.href}
                    className="sector-card"
                    aria-label={`Voir ${division.title}`}
                  >
                    <Icon className="sector-icon" aria-hidden="true" />
                    <h3>{division.title}</h3>
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
