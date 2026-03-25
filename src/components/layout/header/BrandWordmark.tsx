type BrandWordmarkProps = {
  isLoaded: boolean;
  remi: string;
  guillette: string;
  groupFr: string;
  groupEn: string;
  businessInfo: string;
};

export const BrandWordmark = ({
  isLoaded,
  remi,
  guillette,
  groupFr,
  groupEn,
  businessInfo,
}: BrandWordmarkProps) => {
  const stateClass = isLoaded ? "is-loaded" : "is-preload";

  return (
    <div className="header-wordmark" aria-label={`${remi} ${guillette}, ${groupFr}, ${groupEn}`}>
      <div className="header-wordmark-row">
        <span className={`header-remi ${stateClass}`}>{remi}</span>
        <span className={`header-guillette ${stateClass}`}>{guillette}</span>
      </div>

      <div className="header-group-lines">
        <p className={`header-group-fr ${stateClass}`}>{groupFr}</p>
        <p className={`header-group-en ${stateClass}`}>{groupEn}</p>
        <p className={`header-business-info ${stateClass}`}>{businessInfo}</p>
      </div>
    </div>
  );
};
