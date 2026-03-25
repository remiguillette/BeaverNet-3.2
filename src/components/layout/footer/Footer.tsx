import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import beaverLogo from "../../../assets/beaver.png";
import { useTranslation } from "../../../contexts/TranslationContext";

export const Footer = () => {
  const { t, language } = useTranslation();
  const contactButtonRef = useRef<HTMLAnchorElement>(null);
  const accentOrange = "#f89422";
  const accentBlue = "#0d6efd";

  // Animation pour la bordure gradient du bouton "Contact Us"
  useEffect(() => {
    if (!contactButtonRef.current) return;

    let angle = 0;
    let animationFrameId: number;

    const rotateGradient = () => {
      angle = (angle + 1) % 360;
      if (contactButtonRef.current) {
        contactButtonRef.current.style.setProperty("--gradient-angle", `${angle}deg`);
      }
      animationFrameId = requestAnimationFrame(rotateGradient);
    };

    rotateGradient();

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, []);

  return (
    <footer className="site-footer" role="contentinfo">
      <div className="site-footer-container">
        <div className="site-footer-grid">
          
          {/* Colonne 1 : Vide pour préserver l'alignement sur écran large */}
          <div className="site-footer-spacer" aria-hidden="true"></div>

          {/* Colonne 2 : Identité de marque et Navigation */}
          <div
            className="site-footer-brand"
            aria-label={t("footer.aria.companyIdentity")}
          >
            <a 
              href="https://rgbeavernet.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-brand-link"
              aria-label={language === 'fr' ? 'Visiter le site externe Rémi Guillette Groupe' : 'Visit external Rémi Guillette Group site'}
            >
              <img 
                src={beaverLogo} 
                alt={t("footer.brand.logoAlt")} 
                className="site-footer-logo"
                style={{ objectFit: "contain", width: "180px", height: "180px", maxWidth: "45vw" }}
              />
            </a>
            
            <h3 className="site-footer-title">
              <span style={{ color: accentBlue }}>{t("footer.brand.remi")}</span>{" "}
              <span style={{ color: accentOrange }}>{t("footer.brand.guillette")}</span>
            </h3>
            <h3 className="site-footer-title" style={{ color: accentOrange }}>
              Groupe
            </h3>
            <h3 className="site-footer-title" style={{ color: accentOrange }}>
              Group
            </h3>

            <nav className="site-footer-nav" aria-label={t("footer.aria.footerNav")}>
              <Link
                to="/privacy-policy"
                className="site-footer-privacy-link"
                style={{ color: accentOrange }}
              >
                {t("footer.links.privacyPolicy")}
              </Link>
            </nav>
          </div>

          {/* Colonne 3 : Informations de contact et enregistrements */}
          <section
            className="site-footer-contact"
            aria-labelledby="contact-heading"
          >
            
            {/* Contact */}
            <address className="site-footer-address" style={{ color: accentOrange }}>
              <h3 id="contact-heading" className="site-footer-heading" style={{ color: accentOrange }}>
                {t("footer.contact.title")}
              </h3>
              <div className="site-footer-address-lines">
                <p>{t("footer.contact.line1")}</p>
                <p>{t("footer.contact.line2")}</p>
                <p>{t("footer.contact.line3")}</p>
                <p>{t("footer.contact.line4")}</p>
                <p className="site-footer-phone">
                  <Phone className="site-footer-phone-icon" aria-hidden="true" />
                  <span className="sr-only">{t("footer.contact.phoneLabel")}: </span>
                  <a href="tel:6135012160" className="site-footer-phone-link" style={{ color: accentOrange }}>613-501-2160</a>
                </p>
              </div>
              
              <Link 
                ref={contactButtonRef}
                to="/contact"
                className="border-gradient-button site-footer-contact-button"
                aria-label={t("footer.links.contactButton")}
              >
                <Mail className="site-footer-phone-icon" aria-hidden="true" />
                {t("footer.links.contactButton")}
              </Link>
            </address>

            {/* Réseaux Sociaux */}
            <div>
              <h4 className="site-footer-social-heading" style={{ color: accentOrange }}>
                {t("footer.social.title")}
              </h4>
              <div className="site-footer-social-links">
                <a href="https://x.com/RGRA_ON" target="_blank" rel="noopener noreferrer" className="site-footer-social-link" style={{ color: accentOrange }} aria-label="X (Twitter)">
                  <span className="site-footer-social-text">X</span>
                </a>
                <a href="https://www.instagram.com/rgra_on" target="_blank" rel="noopener noreferrer" className="site-footer-social-link" style={{ color: accentOrange }} aria-label="Instagram">
                  <span className="site-footer-social-text">IG</span>
                </a>
                <a href="https://discord.gg/qFbVDPCFz9" target="_blank" rel="noopener noreferrer" className="site-footer-social-link" style={{ color: accentOrange }} aria-label="Discord">
                  <span className="site-footer-social-text">DC</span>
                </a>
              </div>
            </div>

            {/* Numéros d'enregistrement */}
            <div className="site-footer-registration">
              <div className="site-footer-registration-grid">
                <div className="site-footer-registration-labels" style={{ color: accentOrange }}>
                  <p>{t("footer.registration.ontarioFr")}</p>
                  <p>{t("footer.registration.ontarioEn")}</p>
                  <p className="pt-2">{t("footer.registration.canadaFr")}</p>
                  <p>{t("footer.registration.canadaEn")}</p>
                </div>
                <div className="site-footer-registration-values" style={{ color: accentOrange }}>
                  <p>1001174676</p>
                  <p>1001174693</p>
                  <div className="flex-1 flex items-end justify-end">
                    <p>725808273</p>
                  </div>
                </div>
              </div>
            </div>

          </section>
        </div>
      </div>
    </footer>
  );
};
