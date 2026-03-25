import { Link } from "react-router-dom";
import { BrandWordmark } from "./BrandWordmark";

type HeaderBrandProps = {
  isLoaded: boolean;
  logoSrc: string;
  homeAriaLabel: string;
  logoAlt: string;
  groupFr: string;
  groupEn: string;
};

export const HeaderBrand = ({
  isLoaded,
  logoSrc,
  homeAriaLabel,
  logoAlt,
  groupFr,
  groupEn,
}: HeaderBrandProps) => {
  return (
    <Link to="/" className="header-brand-link" aria-label={homeAriaLabel}>
      <img
        src={logoSrc}
        alt={logoAlt}
        className={`header-logo ${isLoaded ? "is-loaded" : "is-hidden-scale"}`}
      />

      <BrandWordmark isLoaded={isLoaded} groupFr={groupFr} groupEn={groupEn} />
    </Link>
  );
};
