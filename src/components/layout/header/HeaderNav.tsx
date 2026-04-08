import type React from "react";
import { LanguageToggleButton } from "./LanguageToggleButton";
import { FullscreenToggleButton } from "./FullscreenToggleButton";

type HeaderNavProps = {
  navAriaLabel: string;
  toggleAriaLabel: string;
  toggleLabel: string;
  buttonRef: React.RefObject<HTMLButtonElement | null>;
  onToggleLanguage: () => void;
  isFullscreen: boolean;
  enterFullscreenAriaLabel: string;
  exitFullscreenAriaLabel: string;
  onToggleFullscreen: () => void;
};

export const HeaderNav = ({
  navAriaLabel,
  toggleAriaLabel,
  toggleLabel,
  buttonRef,
  onToggleLanguage,
  isFullscreen,
  enterFullscreenAriaLabel,
  exitFullscreenAriaLabel,
  onToggleFullscreen,
}: HeaderNavProps) => {
  return (
    <nav className="header-nav" role="navigation" aria-label={navAriaLabel}>
      <LanguageToggleButton
        buttonRef={buttonRef}
        onToggleLanguage={onToggleLanguage}
        ariaLabel={toggleAriaLabel}
        label={toggleLabel}
      />
      <FullscreenToggleButton
        isFullscreen={isFullscreen}
        enterAriaLabel={enterFullscreenAriaLabel}
        exitAriaLabel={exitFullscreenAriaLabel}
        onToggleFullscreen={onToggleFullscreen}
      />
    </nav>
  );
};
