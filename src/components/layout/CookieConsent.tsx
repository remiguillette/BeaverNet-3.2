import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");

    if (!consent) {
      setVisible(true);
    }
  }, []);

  const setConsent = (value: string) => {
    localStorage.setItem("cookie-consent", value);
    setVisible(false);
  };

  if (!visible) {
    return null;
  }

  return (
    <aside
      className="cookie-banner"
      role="dialog"
      aria-modal="true"
      aria-labelledby="cookie-title"
    >
      <div className="container">
        <h2 id="cookie-title">Gestion des cookies / Cookie management</h2>

        <p>
          Ce site peut utiliser des cookies et des technologies similaires,
          incluant des services d&apos;hébergement et de sécurité. Vous pouvez
          accepter ou limiter leur utilisation. / This site may use cookies and
          similar technologies, including hosting and security services.
        </p>

        <div className="cookie-actions">
          <button onClick={() => setConsent("essential")}>
            Essentiels / Essential
          </button>

          <button onClick={() => setConsent("accepted")}>Accepter / Accept</button>
        </div>
      </div>
    </aside>
  );
}
