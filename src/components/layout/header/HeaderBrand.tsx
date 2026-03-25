import { Link } from "react-router-dom";
import { BrandWordmark } from "./BrandWordmark";

type HeaderBrandProps = {
  isLoaded: boolean;
  logoSrc: string;
  homeAriaLabel: string;
  logoAlt: string;
  remi: string;
  guillette: string;
  groupFr: string;
  groupEn: string;
  businessInfo: string;
};

export const HeaderBrand = ({
  isLoaded,
  logoSrc,
  homeAriaLabel,
  logoAlt,
  remi,
  guillette,
  groupFr,
  groupEn,
  businessInfo,
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
        remi={remi}
        guillette={guillette}
        groupFr={groupFr}
        groupEn={groupEn}
        businessInfo={businessInfo}
      />
    </Link>
  );
};
