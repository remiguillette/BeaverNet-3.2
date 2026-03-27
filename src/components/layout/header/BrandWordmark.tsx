type BrandWordmarkProps = {
  isLoaded: boolean;
  title: string;
};

export const BrandWordmark = ({ isLoaded, title }: BrandWordmarkProps) => {
  const stateClass = isLoaded ? "is-loaded" : "is-preload";

  return (
    <div className="header-wordmark" aria-label={title}>
      <p className={`header-title ${stateClass}`}>{title}</p>
    </div>
  );
};
