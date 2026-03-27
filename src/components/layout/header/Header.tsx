import { useRef } from "react";
import { useTranslation } from "../../../contexts/TranslationContext";
import beaverLogo from "../../../assets/beaver.png";

import { HeaderBrand } from "./HeaderBrand";
import { HeaderAlert } from "./HeaderAlert";
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
        <HeaderNav
          navAriaLabel={t("header.nav.mainAria")}
          toggleAriaLabel={t("header.nav.languageToggleAria")}
          toggleLabel={t("header.nav.languageToggleLabel")}
          buttonRef={buttonRef}
          onToggleLanguage={toggleLanguage}
        />

        <HeaderAlert
          title={t("header.alert.title")}
          code={t("header.alert.code")}
          timestamp={t("header.alert.timestamp")}
          location={t("header.alert.location")}
        />

        <HeaderBrand
          isLoaded={isLoaded}
          logoSrc={beaverLogo}
          homeAriaLabel={t("header.brand.homeAria")}
          logoAlt={t("header.brand.logoAlt")}
          title={t("header.brand.title")}
        />
      </div>
    </header>
  );
};
