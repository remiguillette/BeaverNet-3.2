import type { CallCardConfig, CallCardRecord } from "./types";

type CallCardProps = {
  call: CallCardRecord;
  labels: CallCardConfig["labels"];
};

export default function CallCard({ call, labels }: CallCardProps) {
  const normalizedStatus = call.status.toLowerCase();
  const isActive = normalizedStatus === "active";

  return (
    <article className="service-detail-card" aria-live="polite">
      <h3>
        <span className={isActive ? "accent-orange" : "accent-blue"}>{call.status}</span>
      </h3>
      <p>
        <strong>{labels.callType}: </strong>
        {call.callType}
      </p>
      <p>
        <strong>{labels.timestamp}: </strong>
        <time dateTime={call.timestamp}>{new Date(call.timestamp).toLocaleString()}</time>
      </p>
      <p>
        <strong>{labels.location}: </strong>
        {call.location}
      </p>
      {call.metadata?.map((field) => (
        <p key={field.key}>
          <strong>{field.label}: </strong>
          {field.value}
        </p>
      ))}
    </article>
  );
}
