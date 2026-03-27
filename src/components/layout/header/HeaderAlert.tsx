import { AlertTriangle } from "lucide-react";

type HeaderAlertProps = {
  title: string;
  code: string;
  timestamp: string;
  location: string;
};

export const HeaderAlert = ({ title, code, timestamp, location }: HeaderAlertProps) => {
  return (
    <section className="header-alert" aria-label={title}>
      <div className="header-alert-title">
        <AlertTriangle className="header-alert-icon" aria-hidden="true" />
        <strong>{title}</strong>
      </div>
      <p className="header-alert-code">{code}</p>
      <p className="header-alert-time">{timestamp}</p>
      <p className="header-alert-location">{location}</p>
    </section>
  );
};
