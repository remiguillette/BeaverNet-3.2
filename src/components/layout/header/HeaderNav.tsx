import type React from "react";
import { OntarioPrideText } from "./OntarioPrideText";
import { LanguageToggleButton } from "./LanguageToggleButton";

type HeaderNavProps = {
  navAriaLabel: string;
  ontarioText: string;
  toggleAriaLabel: string;
  toggleLabel: string;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  onToggleLanguage: () => void;
};

export const HeaderNav = ({
  navAriaLabel,
  ontarioText,
  toggleAriaLabel,
  toggleLabel,
  buttonRef,
  onToggleLanguage,
}: HeaderNavProps) => {
  return (
    <nav className="header-nav" role="navigation" aria-label={navAriaLabel}>
      <OntarioPrideText text={ontarioText} />
      <LanguageToggleButton
        buttonRef={buttonRef}
        onToggleLanguage={onToggleLanguage}
        ariaLabel={toggleAriaLabel}
        label={toggleLabel}
      />
    </nav>
  );
};
