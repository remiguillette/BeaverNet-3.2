import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { Phone, Mail } from "lucide-react";
import { SiX, SiInstagram, SiDiscord } from "react-icons/si";
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
    <footer className="bg-black py-12 w-full text-white" role="contentinfo" style={{ backgroundColor: "#000", color: "#fff" }}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
          
          {/* Colonne 1 : Vide pour préserver l'alignement sur écran large */}
          <div className="hidden md:block"></div>

          {/* Colonne 2 : Identité de marque et Navigation */}
          <div className="flex flex-col items-center text-center max-w-[300px] mx-auto" aria-label={t("footer.aria.companyIdentity")}>
            <a 
              href="https://rgbeavernet.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
              aria-label={language === 'fr' ? 'Visiter le site externe Rémi Guillette Groupe' : 'Visit external Rémi Guillette Group site'}
            >
              <img 
                src={beaverLogo} 
                alt={t("footer.brand.logoAlt")} 
                className="h-32 w-32 mb-6"
                style={{ objectFit: "contain", width: "180px", height: "180px", maxWidth: "45vw" }}
              />
            </a>
            
            <h3 className="font-bold text-2xl mb-2 tracking-tight">
              <span className="text-[#0d6efd]" style={{ color: accentBlue }}>{t("footer.brand.remi")}</span>{" "}
              <span className="text-[#f89422]" style={{ color: accentOrange }}>{t("footer.brand.guillette")}</span>
            </h3>
            <h3 className="font-bold text-2xl mb-2 text-[#f89422]" style={{ color: accentOrange }}>
              Groupe
            </h3>
            <h3 className="font-bold text-2xl mb-2 text-[#f89422]" style={{ color: accentOrange }}>
              Group
            </h3>

            <nav className="mt-4" aria-label={t("footer.aria.footerNav")}>
              <Link
                to="/privacy-policy"
                className="text-[#f89422] hover:text-white transition-colors underline-offset-4 hover:underline"
                style={{ color: accentOrange }}
              >
                {t("footer.links.privacyPolicy")}
              </Link>
            </nav>
          </div>

          {/* Colonne 3 : Informations de contact et enregistrements */}
          <section className="flex flex-col gap-8" aria-labelledby="contact-heading">
            
            {/* Contact */}
            <address className="not-italic text-[#f89422]" style={{ color: accentOrange }}>
              <h3 id="contact-heading" className="font-bold text-xl mb-4 text-[#f89422]" style={{ color: accentOrange }}>
                {t("footer.contact.title")}
              </h3>
              <div className="space-y-2 text-sm mb-4">
                <p>{t("footer.contact.line1")}</p>
                <p>{t("footer.contact.line2")}</p>
                <p>{t("footer.contact.line3")}</p>
                <p>{t("footer.contact.line4")}</p>
                <p className="flex items-center pt-2">
                  <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                  <span className="sr-only">{t("footer.contact.phoneLabel")}: </span>
                  <a href="tel:6135012160" className="hover:text-white transition-colors" style={{ color: accentOrange }}>613-501-2160</a>
                </p>
              </div>
              
              <Link 
                ref={contactButtonRef}
                to="/contact"
                className="border-gradient-button inline-flex items-center justify-center text-white px-6 py-2 font-medium text-sm mt-2"
                aria-label={t("footer.links.contactButton")}
              >
                <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                {t("footer.links.contactButton")}
              </Link>
            </address>

            {/* Réseaux Sociaux */}
            <div>
              <h4 className="font-bold text-lg mb-3 text-[#f89422]" style={{ color: accentOrange }}>
                {t("footer.social.title")}
              </h4>
              <div className="flex gap-4">
                <a href="https://x.com/RGRA_ON" target="_blank" rel="noopener noreferrer" className="text-[#f89422] hover:text-white transition-colors" style={{ color: accentOrange }} aria-label="X (Twitter)">
                  <SiX className="w-6 h-6" />
                </a>
                <a href="https://www.instagram.com/rgra_on" target="_blank" rel="noopener noreferrer" className="text-[#f89422] hover:text-white transition-colors" style={{ color: accentOrange }} aria-label="Instagram">
                  <SiInstagram className="w-6 h-6" />
                </a>
                <a href="https://discord.gg/qFbVDPCFz9" target="_blank" rel="noopener noreferrer" className="text-[#f89422] hover:text-white transition-colors" style={{ color: accentOrange }} aria-label="Discord">
                  <SiDiscord className="w-6 h-6" />
                </a>
              </div>
            </div>

            {/* Numéros d'enregistrement */}
            <div className="border-t border-[#f89422]/50 pt-4">
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="text-left text-[#f89422] space-y-2" style={{ color: accentOrange }}>
                  <p>{t("footer.registration.ontarioFr")}</p>
                  <p>{t("footer.registration.ontarioEn")}</p>
                  <p className="pt-2">{t("footer.registration.canadaFr")}</p>
                  <p>{t("footer.registration.canadaEn")}</p>
                </div>
                <div className="text-right text-[#f89422] flex flex-col space-y-2 font-mono" style={{ color: accentOrange }}>
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
