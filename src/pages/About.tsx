import Header from "../components/layout/Header";
import { useTranslation } from "../contexts/TranslationContext";

export default function About() {
  const { t } = useTranslation();
  const text = (key: string, fallback: string) => {
    const value = t(key);
    return value === key ? fallback : value;
  };

  return (
    <>
      <Header />
      <main className="page-content">
        <h1>{text("about.title", "About")}</h1>
        <p>{text("about.description", "Official website of Rémi Guillette Groupe.")}</p>
      </main>
    </>
  );
}
