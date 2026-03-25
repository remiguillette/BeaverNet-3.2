import { useRef } from "react";
import { useTranslation } from "../../../contexts/TranslationContext";
import beaverLogo from "../../../assets/beaver.png";

import { HeaderBrand } from "./HeaderBrand";
import { HeaderNav } from "./HeaderNav";
import { useDelayedMountAnimation } from "./hooks/useDelayedMountAnimation";
import { useRotatingGradient } from "./hooks/useRotatingGradient";

export const Header = () => {
  const { language, changeLanguage, t } = useTranslation();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const isLoaded = useDelayedMountAnimation(100);
  useRotatingGradient(buttonRef);

  const toggleLanguage = () => {
    const newLang = language === "fr" ? "en" : "fr";
    changeLanguage(newLang);
  };

  return (
    <header className="site-header" role="banner">
      <div className="site-header-inner">
        <HeaderBrand
          isLoaded={isLoaded}
          logoSrc={beaverLogo}
          homeAriaLabel={t("header.brand.homeAria")}
          logoAlt={t("header.brand.logoAlt")}
          groupFr={t("header.brand.groupFr")}
          groupEn={t("header.brand.groupEn")}
        />

        <HeaderNav
          navAriaLabel={t("header.nav.mainAria")}
          ontarioText={t("header.nav.ontarioPride")}
          toggleAriaLabel={t("header.nav.languageToggleAria")}
          toggleLabel={language === "fr" ? "EN" : "FR"}
          buttonRef={buttonRef}
          onToggleLanguage={toggleLanguage}
        />
      </div>
    </header>
  );
};
