type BrandWordmarkProps = {
  isLoaded: boolean;
  groupFr: string;
  groupEn: string;
};

export const BrandWordmark = ({ isLoaded, groupFr, groupEn }: BrandWordmarkProps) => {
  const stateClass = isLoaded ? "is-loaded" : "is-preload";

  return (
    <div className="header-wordmark" aria-label={`Rémi Guillette, ${groupFr}, ${groupEn}`}>
      <div className="header-wordmark-row">
        <span className={`header-remi ${stateClass}`}>Rémi</span>
        <span className={`header-guillette ${stateClass}`}>Guillette</span>
      </div>

      <div className="header-group-lines">
        <p className={`header-group-fr ${stateClass}`}>{groupFr}</p>
        <p className={`header-group-en ${stateClass}`}>{groupEn}</p>
      </div>
    </div>
  );
};
