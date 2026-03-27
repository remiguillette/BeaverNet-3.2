import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
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
        <p>{text("about.description", "This page presents the Website v3.2 project.")}</p>
      </main>
      <Footer />
    </>
  );
}
