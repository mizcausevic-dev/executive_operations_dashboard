import { capabilityCards, businessSystems, commandSignals, priorityQueue, weeklyNarrative } from "./data";

const statusClassMap = {
  stable: "status-pill status-pill--stable",
  watch: "status-pill status-pill--watch",
  critical: "status-pill status-pill--critical"
} as const;

const toneClassMap = {
  positive: "signal-card signal-card--positive",
  warning: "signal-card signal-card--warning",
  neutral: "signal-card signal-card--neutral"
} as const;

function App() {
  return (
    <main className="dashboard-shell">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Executive Operations Dashboard</p>
          <h1>One command layer for revenue, platform, content, cost, security, and growth execution.</h1>
          <p className="hero-text">
            A flagship frontend portfolio project that turns the backend systems in this GitHub portfolio into a single executive operating
            surface. Instead of scattered dashboards, teams get one artifact that shows pressure, priorities, and next actions across the
            business.
          </p>
          <div className="hero-actions">
            <a href="#system-map" className="action-chip">
              Explore system map
            </a>
            <a href="#priority-queue" className="action-chip action-chip--alt">
              Review decision queue
            </a>
          </div>
        </div>
        <div className="hero-grid" aria-label="Executive operating signals">
          {commandSignals.map((signal) => (
            <article key={signal.id} className={toneClassMap[signal.tone]}>
              <span>{signal.label}</span>
              <strong>{signal.value}</strong>
              <p>{signal.delta}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-grid">
        <div className="editorial-panel" id="system-map">
          <div className="section-heading">
            <p className="eyebrow">System map</p>
            <h2>Business systems translated into one readable executive surface.</h2>
          </div>
          <div className="system-list">
            {businessSystems.map((system) => (
              <article key={system.id} className="system-card">
                <div className="system-card__topline">
                  <div>
                    <h3>{system.name}</h3>
                    <p>{system.owner}</p>
                  </div>
                  <span className={statusClassMap[system.posture]}>{system.posture}</span>
                </div>
                <p className="system-card__summary">{system.summary}</p>
                <div className="system-card__metric">{system.metric}</div>
              </article>
            ))}
          </div>
        </div>

        <aside className="spotlight-panel" id="priority-queue">
          <div className="section-heading section-heading--compact">
            <p className="eyebrow">Decision queue</p>
            <h2>What leadership should move on next.</h2>
          </div>
          <div className="priority-list">
            {priorityQueue.map((item) => (
              <article key={item.title} className="priority-item">
                <div className="priority-item__meta">
                  <span>{item.team}</span>
                  <span>{item.urgency}</span>
                </div>
                <h3>{item.title}</h3>
                <p>{item.outcome}</p>
              </article>
            ))}
          </div>
        </aside>
      </section>

      <section className="narrative-band">
        <div className="section-heading">
          <p className="eyebrow">Operating cadence</p>
          <h2>Designed for how executive teams actually interpret movement across the week.</h2>
        </div>
        <div className="timeline-grid">
          {weeklyNarrative.map((moment) => (
            <article key={moment.stage} className="timeline-card">
              <span>{moment.stage}</span>
              <h3>{moment.headline}</h3>
              <p>{moment.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="capability-band">
        <div className="section-heading">
          <p className="eyebrow">What this proves</p>
          <h2>Product taste, executive reporting discipline, and systems-level frontend thinking.</h2>
        </div>
        <div className="capability-grid">
          {capabilityCards.map((card) => (
            <article key={card.title} className="capability-card">
              <p>{card.artifact}</p>
              <h3>{card.title}</h3>
              <span>{card.summary}</span>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
