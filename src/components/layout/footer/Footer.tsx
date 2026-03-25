import { Link } from "react-router-dom";
import beaverLogo from "../../../assets/beaver.png";
import { useTranslation } from "../../../contexts/TranslationContext";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="container footer-grid">
        <section className="footer-brand" aria-label="Identité de l’entreprise">
          <div className="footer-wordmark">
            <p className="footer-remi-guillette">
              <span className="accent-blue">{t("footer.brand.remi")}</span>{" "}
              <span className="accent-orange">{t("footer.brand.guillette")}</span>
            </p>
            <p className="accent-orange footer-group-line">{t("footer.brand.group")}</p>
          </div>

          <img src={beaverLogo} alt={t("footer.brand.logoAlt")} className="footer-logo" />
        </section>

        <nav className="footer-links" aria-label="Liens de pied de page">
          <Link to="/privacy-policy">{t("footer.links.privacyPolicy")}</Link>
          <Link to="/contact" className="border-gradient-button footer-contact-button">
            {t("footer.links.contactButton")}
          </Link>
        </nav>

        <address className="footer-contact">
          <p className="footer-title">{t("footer.contact.title")}</p>
          <p>{t("footer.contact.line1")}</p>
          <p>{t("footer.contact.line2")}</p>
          <p>{t("footer.contact.line3")}</p>
          <p>{t("footer.contact.line4")}</p>
          <p>
            {t("footer.contact.phoneLabel")}: <a href="tel:6135012160">613-501-2160</a>
          </p>
        </address>

        <section className="footer-registration" aria-label="Enregistrements">
          <p className="footer-title">{t("footer.social.title")}</p>
          <p>{t("footer.registration.ontarioFr")}</p>
          <p>{t("footer.registration.ontarioEn")}</p>
          <p>{t("footer.registration.canadaFr")}</p>
          <p>{t("footer.registration.canadaEn")}</p>
          <p>1001174676</p>
          <p>1001174693</p>
          <p>725808273</p>
        </section>
      </div>
    </footer>
  );
};
