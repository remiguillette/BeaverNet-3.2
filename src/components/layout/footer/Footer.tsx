import { Link } from "react-router-dom";
import beaverLogo from "../../../assets/beaver.png";

export const Footer = () => {
  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <section className="footer-brand" aria-label="Identité de l’entreprise">
          <img
            src={beaverLogo}
            alt="Logo Rémi Guillette Groupe / Group"
            className="footer-logo"
          />

          <div className="footer-wordmark">
            <p className="footer-remi-guillette">
              <span className="accent-blue">Rémi</span>{" "}
              <span className="accent-orange">Guillette</span>
            </p>
            <p className="accent-orange footer-group-line">Groupe</p>
            <p className="accent-orange footer-group-line">Group</p>
          </div>
        </section>

        <nav className="footer-links" aria-label="Liens de pied de page">
          <Link to="/privacy-policy">
            Politique de confidentialité / Privacy Policy
          </Link>
          <Link to="/contact" className="border-gradient-button footer-contact-button">
            Contact / Contact
          </Link>
        </nav>

        <address className="footer-contact">
          <p>6388 Hawkins Street, Apt. 307</p>
          <p>Niagara Falls, ON L2G 1P3</p>
          <p>
            <a href="tel:6135012160">613 501-2160</a>
          </p>
          <p>
            <a href="mailto:info@remiguillette.ca">info@remiguillette.ca</a>
          </p>
        </address>

        <section className="footer-registration" aria-label="Enregistrements">
          <p>Enregistrement Ontario / Ontario Registration</p>
          <p>Enregistrement Canada / Canada Registration</p>
          <p>[numéro Ontario]</p>
          <p>[numéro Canada]</p>
        </section>
      </div>
    </footer>
  );
};
