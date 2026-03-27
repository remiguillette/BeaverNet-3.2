import type React from "react";
import { LanguageToggleButton } from "./LanguageToggleButton";

type HeaderNavProps = {
  navAriaLabel: string;
  toggleAriaLabel: string;
  toggleLabel: string;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  onToggleLanguage: () => void;
};

export const HeaderNav = ({
  navAriaLabel,
  toggleAriaLabel,
  toggleLabel,
  buttonRef,
  onToggleLanguage,
}: HeaderNavProps) => {
  return (
    <nav className="header-nav" role="navigation" aria-label={navAriaLabel}>
      <LanguageToggleButton
        buttonRef={buttonRef}
        onToggleLanguage={onToggleLanguage}
        ariaLabel={toggleAriaLabel}
        label={toggleLabel}
      />
    </nav>
  );
};
