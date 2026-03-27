import { Link } from "react-router-dom";
import { useTranslation } from "../contexts/TranslationContext";

export default function NotFound() {
  const { t } = useTranslation();
  const text = (key: string, fallback: string) => {
    const value = t(key);
    return value === key ? fallback : value;
  };

  return (
    <main className="page-content">
      <h1>404</h1>
      <p>{text("notFound.message", "Page not found.")}</p>
      <Link to="/">{text("notFound.homeLink", "Back to home")}</Link>
    </main>
  );
}
