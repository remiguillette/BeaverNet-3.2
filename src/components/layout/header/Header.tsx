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
          remi={t("header.brand.remi")}
          guillette={t("header.brand.guillette")}
          groupFr={t("header.brand.groupFr")}
          groupEn={t("header.brand.groupEn")}
          businessInfo={t("header.brand.businessInfo")}
        />

        <HeaderNav
          navAriaLabel={t("header.nav.mainAria")}
          ontarioText={t("header.nav.ontarioPride")}
          ontarioTextLang={language}
          toggleAriaLabel={t("header.nav.languageToggleAria")}
          toggleLabel={t("header.nav.languageToggleLabel")}
          buttonRef={buttonRef}
          onToggleLanguage={toggleLanguage}
        />
      </div>
    </header>
  );
};
