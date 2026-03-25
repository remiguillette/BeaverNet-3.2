import { Link } from "react-router-dom";
import beaverLogo from "../../../assets/beaver.png";
import { useTranslation } from "../../../contexts/TranslationContext";

export const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="bg-black py-12 w-full text-white" role="contentinfo">
      {/* On utilise 'grid-cols-1' pour mobile (empilé) 
          et 'md:grid-cols-3' pour les écrans moyens et larges 
      */}
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
        
        {/* Colonne 1 : Vide ou Logo secondaire (pour respecter l'ancien espacement) */}
        <div className="hidden md:block"></div>

        {/* Colonne 2 : Brand & Logo (Centre) */}
        <section className="flex flex-col items-center text-center" aria-label="Identité de l’entreprise">
          <div className="mb-6">
            <p className="font-bold text-2xl uppercase tracking-tight">
              <span className="text-[#0d6efd]">{t("footer.brand.remi")}</span>{" "}
              <span className="text-[#f89422]">{t("footer.brand.guillette")}</span>
            </p>
            <p className="text-[#f89422] font-semibold">{t("footer.brand.group")}</p>
          </div>
          
          <img src={beaverLogo} alt={t("footer.brand.logoAlt")} className="h-32 w-32 object-contain" />

          <nav className="flex flex-col gap-3 mt-8" aria-label="Liens de navigation">
            <Link to="/privacy-policy" className="text-[#f89422] hover:text-white transition-colors text-sm">
              {t("footer.links.privacyPolicy")}
            </Link>
          </nav>
        </section>

        {/* Colonne 3 : Contact & Enregistrements (Droite) */}
        <div className="flex flex-col gap-8">
          <address className="not-italic text-[#f89422]">
            <p className="font-bold text-xl mb-4 text-white">{t("footer.contact.title")}</p>
            <div className="space-y-1 text-sm">
              <p>{t("footer.contact.line1")}</p>
              <p>{t("footer.contact.line2")}</p>
              <p>{t("footer.contact.line3")}</p>
              <p>{t("footer.contact.line4")}</p>
              <p className="pt-2">
                {t("footer.contact.phoneLabel")}: <a href="tel:6135012160" className="hover:text-white underline">613-501-2160</a>
              </p>
            </div>
            
            <Link to="/contact" className="border-gradient-button inline-block mt-6 px-6 py-2 text-center text-white">
              {t("footer.links.contactButton")}
            </Link>
          </address>

          <section className="border-t border-[#f89422]/30 pt-4" aria-label="Enregistrements">
            <p className="text-xs font-bold mb-2 uppercase text-white">{t("footer.social.title")}</p>
            <div className="grid grid-cols-2 gap-x-4 text-[10px] leading-relaxed opacity-80">
              <div>
                <p>{t("footer.registration.ontarioFr")}</p>
                <p>{t("footer.registration.ontarioEn")}</p>
                <p>{t("footer.registration.canadaFr")}</p>
                <p>{t("footer.registration.canadaEn")}</p>
              </div>
              <div className="text-right font-mono">
                <p>1001174676</p>
                <p>1001174693</p>
                <p>725808273</p>
              </div>
            </div>
          </section>
        </div>

      </div>
    </footer>
  );
