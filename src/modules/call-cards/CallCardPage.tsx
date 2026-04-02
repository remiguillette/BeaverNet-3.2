import Header from "../../components/layout/Header";
import CallCard from "./CallCard";
import type { CallCardConfig, CallCardRecord } from "./types";

type CallCardPageProps = {
  config: CallCardConfig;
  calls: CallCardRecord[];
};

export default function CallCardPage({ config, calls }: CallCardPageProps) {
  const [firstWord, ...remainingWords] = config.moduleTitle.trim().split(/\s+/);

  return (
    <>
      <Header />
      <main className="service-page">
        <section className="service-hero">
          <div className="container">
            <h1>
              <span className="accent-blue">{firstWord}</span>
              {remainingWords.length > 0 ? (
                <>
                  {" "}
                  <span className="accent-orange">{remainingWords.join(" ")}</span>
                </>
              ) : null}
            </h1>
            <p>{config.moduleDescription}</p>
          </div>
        </section>

        <section className="service-section">
          <div className="container">
            <h2>
              <span className="accent-blue">{config.labels.status}</span>{" "}
              <span className="accent-orange">Calls</span>
            </h2>
            {calls.length === 0 ? <p>{config.emptyStateMessage}</p> : null}
            <div className="service-card-grid">
              {calls.map((call) => (
                <CallCard key={call.id} call={call} labels={config.labels} />
              ))}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
