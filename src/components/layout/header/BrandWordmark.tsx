type BrandWordmarkProps = {
  isLoaded: boolean;
  groupFr: string;
  groupEn: string;
};

export const BrandWordmark = ({ isLoaded, groupFr, groupEn }: BrandWordmarkProps) => {
  return (
    <div className="header-wordmark">
      <div className="header-wordmark-row">
        <span className={`header-remi ${isLoaded ? "is-loaded" : "is-hidden-left"}`}>Rémi</span>
        <span className={`header-guillette ${isLoaded ? "is-loaded" : "is-hidden-right"}`}>
          Guillette
        </span>
      </div>

      <p className={`header-group-fr ${isLoaded ? "is-loaded" : "is-hidden-up"}`}>{groupFr}</p>
      <p className={`header-group-en ${isLoaded ? "is-loaded" : "is-hidden-up"}`}>{groupEn}</p>
    </div>
  );
};
