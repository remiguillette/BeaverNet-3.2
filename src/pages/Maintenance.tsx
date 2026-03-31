import { Link } from "react-router-dom";

export default function Maintenance() {
  return (
    <main className="maintenance-page">
      <div className="maintenance-card">
        <p className="maintenance-badge">Server Maintenance</p>
        <h1>We&apos;ll be back soon.</h1>
        <p>
          BeaverNet is temporarily unavailable while we complete scheduled updates.
          Please check back shortly.
        </p>
        <Link to="/maintenance" className="maintenance-link">
          Refresh maintenance status
        </Link>
      </div>
    </main>
  );
}
