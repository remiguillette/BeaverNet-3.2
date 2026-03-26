import { type RefObject } from "react";
import { Languages } from "lucide-react";

type LanguageToggleButtonProps = {
  buttonRef: RefObject<HTMLButtonElement | null>;
  onToggleLanguage: () => void;
  ariaLabel: string;
  label: string;
};

export const LanguageToggleButton = ({
  buttonRef,
  onToggleLanguage,
  ariaLabel,
  label,
}: LanguageToggleButtonProps) => {
  return (
    <button
      ref={buttonRef}
      onClick={onToggleLanguage}
      className="border-gradient-button"
      aria-label={ariaLabel}
    >
      <Languages className="language-icon" aria-hidden="true" />
      {label}
    </button>
  );
};
