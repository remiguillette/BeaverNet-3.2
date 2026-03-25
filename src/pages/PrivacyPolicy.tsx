import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

type PrivacySection = {
  title: string;
  body: string[];
};

const sections: PrivacySection[] = [
  {
    title: "Introduction",
    body: [
      "Le Groupe Rémi Guillette respecte votre vie privée et protège vos renseignements personnels selon les lois applicables au Canada.",
      "Rémi Guillette Group respects your privacy and protects personal information in accordance with applicable Canadian laws.",
    ],
  },
  {
    title: "Renseignements recueillis / Information We Collect",
    body: [
      "Nous pouvons recueillir vos coordonnées, les détails de vos demandes et les informations techniques nécessaires au fonctionnement du site.",
      "We may collect your contact details, request details, and technical information needed to operate the website.",
    ],
  },
  {
    title: "Utilisation des données / How We Use Data",
    body: [
      "Nous utilisons ces renseignements pour répondre à vos demandes, fournir nos services et améliorer votre expérience.",
      "We use this information to respond to inquiries, provide services, and improve your experience.",
    ],
  },
  {
    title: "Partage des renseignements / Information Sharing",
    body: [
      "Nous ne vendons pas vos données. Le partage est limité aux fournisseurs nécessaires à nos opérations ou lorsque requis par la loi.",
      "We do not sell your data. Sharing is limited to providers required for operations or when legally required.",
    ],
  },
  {
    title: "Conservation et sécurité / Retention and Security",
    body: [
      "Nous conservons les renseignements seulement pour la durée nécessaire et appliquons des mesures administratives, techniques et physiques de sécurité.",
      "We retain information only as long as needed and apply administrative, technical, and physical safeguards.",
    ],
  },
  {
    title: "Vos droits / Your Rights",
    body: [
      "Vous pouvez demander l'accès, la correction ou la suppression de certains renseignements personnels conformément à la loi.",
      "You may request access, correction, or deletion of certain personal information as permitted by law.",
    ],
  },
  {
    title: "Nous joindre / Contact",
    body: [
      "Pour toute question sur cette politique, contactez-nous à info@remiguillette.ca.",
      "If you have any questions about this policy, contact us at info@remiguillette.ca.",
    ],
  },
];

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <main className="privacy-page">
        <section className="privacy-hero">
          <div className="container">
            <h1>
              <span className="accent-blue">Politique de</span>{" "}
              <span className="accent-orange">confidentialité / Privacy Policy</span>
            </h1>
            <p>Mise à jour / Last updated: March 25, 2026</p>
          </div>
        </section>

        <section className="privacy-sections">
          <div className="container privacy-grid">
            {sections.map((section) => (
              <article key={section.title} className="privacy-card">
                <h2>{section.title}</h2>
                {section.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </article>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
