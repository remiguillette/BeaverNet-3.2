type OntarioPrideTextProps = {
  text: string;
  lang?: "fr" | "en";
};

export const OntarioPrideText = ({
  text,
  lang = "en",
}: OntarioPrideTextProps) => {
  return (
    <span
      className="ontario-pride-text"
      lang={lang}
      aria-label={text}
    >
      {text}
    </span>
  );
};
