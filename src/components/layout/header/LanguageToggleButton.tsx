import { type Ref } from "react";
import { Languages } from "lucide-react";

type LanguageToggleButtonProps = {
  buttonRef: Ref<HTMLButtonElement>;
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
