import { Maximize2, Minimize2 } from "lucide-react";

type FullscreenToggleButtonProps = {
  isFullscreen: boolean;
  enterAriaLabel: string;
  exitAriaLabel: string;
  onToggleFullscreen: () => void;
};

export const FullscreenToggleButton = ({
  isFullscreen,
  enterAriaLabel,
  exitAriaLabel,
  onToggleFullscreen,
}: FullscreenToggleButtonProps) => {
  const ariaLabel = isFullscreen ? exitAriaLabel : enterAriaLabel;

  return (
    <button
      onClick={onToggleFullscreen}
      className="border-gradient-button icon-only-button"
      aria-label={ariaLabel}
      title={ariaLabel}
      type="button"
    >
      {isFullscreen ? (
        <Minimize2 className="language-icon" aria-hidden="true" />
      ) : (
        <Maximize2 className="language-icon" aria-hidden="true" />
      )}
    </button>
  );
};
