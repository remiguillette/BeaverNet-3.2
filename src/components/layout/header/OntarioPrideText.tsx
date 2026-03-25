type OntarioPrideTextProps = {
  text: string;
};

export const OntarioPrideText = ({ text }: OntarioPrideTextProps) => {
  return <span className="ontario-pride-text">{text}</span>;
};
