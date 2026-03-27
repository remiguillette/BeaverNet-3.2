import { Link } from "react-router-dom";
import { BrandWordmark } from "./BrandWordmark";

type HeaderBrandProps = {
  isLoaded: boolean;
  logoSrc: string;
  homeAriaLabel: string;
  logoAlt: string;
  title: string;
};

export const HeaderBrand = ({
  isLoaded,
  logoSrc,
  homeAriaLabel,
  logoAlt,
  title,
}: HeaderBrandProps) => {
  return (
    <Link to="/" className="header-brand-link" aria-label={homeAriaLabel}>
      <img
        src={logoSrc}
        alt={logoAlt}
        className={`header-logo ${isLoaded ? "is-loaded" : "is-hidden-scale"}`}
      />

      <BrandWordmark
        isLoaded={isLoaded}
        title={title}
      />
    </Link>
  );
};
