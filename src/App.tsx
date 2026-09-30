import { useState } from "react";
import "./App.css";

type StorageMode = "local" | "r2";

const events = [
  [
    "03:42:18",
    "archive.created",
    "logs_archive_20260930_034218.tar.gz",
    "success",
  ],
  ["03:40:06", "buffer.flushed", "2,481 records · 4.8 MB", "neutral"],
  ["03:38:41", "upload.completed", "r2://prod-logs/2026/09/30/", "success"],
  ["03:35:02", "rotation.detected", "/var/log/syslog.1", "neutral"],
];

function App() {
  const [storageMode, setStorageMode] = useState<StorageMode>("r2");
  const [isDeploying, setIsDeploying] = useState(false);
  const [deployed, setDeployed] = useState(false);

  const handleDeploy = () => {
    setIsDeploying(true);
    window.setTimeout(() => {
      setIsDeploying(false);
      setDeployed(true);
    }, 900);
  };

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#overview" aria-label="Logstash home">
          <span className="brand-mark">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>
            logstash<span className="brand-dot">.</span>
          </span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className="active" href="#overview">
            Overview
          </a>
          <a href="#pipeline">Pipeline</a>
          <a href="#archives">Archives</a>
        </nav>
        <div className="topbar-actions">
          <span className="status-chip">
            <span className="pulse"></span> all systems nominal
          </span>
          <button
            className="icon-button"
            type="button"
            aria-label="Open settings"
          >
            ⌘
          </button>
          <button
            className="avatar"
            type="button"
            aria-label="Open account menu"
          >
            AM
          </button>
        </div>
      </header>

      <main>
        <section className="hero-section" id="overview">
          <div className="hero-copy">
            <p className="eyebrow">
              <span className="eyebrow-line"></span> VM LOG ARCHIVAL, REFINED
            </p>
            <h1>
              Keep every
              <br />
              <em>signal.</em>
            </h1>
            <p className="hero-intro">
              A quiet, resilient log pipeline for your Linux VMs. Deploy once,
              capture everything, and archive with confidence.
            </p>
            <div className="hero-actions">
              <button
                className="primary-button"
                type="button"
                onClick={handleDeploy}
                disabled={isDeploying}
              >
                {isDeploying
                  ? "Deploying..."
                  : deployed
                    ? "Deployment ready"
                    : "Deploy a collector"}{" "}
                <span>↗</span>
              </button>
              <a className="text-button" href="#pipeline">
                Explore the pipeline <span>↓</span>
              </a>
            </div>
            <div className="trust-row">
              <span className="trust-icon">✓</span> no agents to maintain{" "}
              <span className="trust-divider"></span>{" "}
              <span className="trust-icon">✓</span> S3-compatible storage
            </div>
          </div>
          <div className="hero-visual" aria-label="Live log pipeline status">
            <div className="visual-grid"></div>
            <div className="orb orb-one"></div>
            <div className="orb orb-two"></div>
            <div className="signal-card">
              <div className="signal-card-top">
                <span>LIVE PIPELINE</span>
                <span className="live-dot">● LIVE</span>
              </div>
              <div className="signal-number">
                1.24 <small>GB</small>
              </div>
              <div className="signal-label">captured in the last 24 hours</div>
              <div className="chart" aria-hidden="true">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="chart-labels">
                <span>00:00</span>
                <span>06:00</span>
                <span>12:00</span>
                <span>18:00</span>
                <span>NOW</span>
              </div>
            </div>
            <div className="floating-tag tag-source">
              <span className="tag-icon">⌁</span>
              <div>
                <b>syslog</b>
                <small>streaming</small>
              </div>
              <span className="green-dot"></span>
            </div>
            <div className="floating-tag tag-archive">
              <span className="tag-icon archive-icon">▧</span>
              <div>
                <b>R2 archive</b>
                <small>synced 2m ago</small>
              </div>
              <span className="green-dot"></span>
            </div>
            <div className="visual-caption">
              /var/log <span>→</span> fluent-bit <span>→</span> archive
            </div>
          </div>
        </section>

        <section className="metrics-strip" aria-label="Pipeline metrics">
          <div>
            <span className="metric-label">UPTIME</span>
            <strong>99.98%</strong>
            <span className="metric-good">+0.04%</span>
          </div>
          <div>
            <span className="metric-label">EVENTS PROCESSED</span>
            <strong>8.4M</strong>
            <span className="metric-muted">this month</span>
          </div>
          <div>
            <span className="metric-label">ACTIVE NODES</span>
            <strong>12</strong>
            <span className="metric-good">all healthy</span>
          </div>
          <div>
            <span className="metric-label">ARCHIVE LATENCY</span>
            <strong>
              420<span className="unit">ms</span>
            </strong>
            <span className="metric-good">−18ms</span>
          </div>
        </section>

        <section className="workspace-section" id="pipeline">
          <div className="section-heading">
            <div>
              <p className="eyebrow">CONTROL PLANE</p>
              <h2>Everything in its place.</h2>
            </div>
            <p>
              From first byte to final archive, see the health of your fleet at
              a glance.
            </p>
          </div>
          <div className="workspace-grid">
            <article className="panel flow-panel">
              <div className="panel-heading">
                <div>
                  <span className="panel-kicker">01 / PIPELINE</span>
                  <h3>Collection flow</h3>
                </div>
                <span className="healthy-label">
                  <span className="green-dot"></span> Healthy
                </span>
              </div>
              <div className="flow-steps">
                <div className="flow-step">
                  <span className="flow-icon">⌁</span>
                  <div>
                    <b>Linux VM</b>
                    <small>12 connected nodes</small>
                  </div>
                </div>
                <span className="flow-arrow">→</span>
                <div className="flow-step">
                  <span className="flow-icon orange">≋</span>
                  <div>
                    <b>Fluent Bit</b>
                    <small>buffering safely</small>
                  </div>
                </div>
                <span className="flow-arrow">→</span>
                <div className="flow-step">
                  <span className="flow-icon lime">▧</span>
                  <div>
                    <b>Archiver</b>
                    <small>last run 2m ago</small>
                  </div>
                </div>
              </div>
              <div className="progress-track">
                <span></span>
              </div>
              <div className="panel-foot">
                <span>Buffer utilization</span>
                <b>34%</b>
              </div>
            </article>
            <article className="panel storage-panel">
              <div className="panel-heading">
                <div>
                  <span className="panel-kicker">02 / DESTINATION</span>
                  <h3>Archive destination</h3>
                </div>
                <span className="storage-count">2.4 TB / 10 TB</span>
              </div>
              <div
                className="storage-toggle"
                role="group"
                aria-label="Archive destination"
              >
                <button
                  className={storageMode === "local" ? "selected" : ""}
                  type="button"
                  onClick={() => setStorageMode("local")}
                >
                  Local disk
                </button>
                <button
                  className={storageMode === "r2" ? "selected" : ""}
                  type="button"
                  onClick={() => setStorageMode("r2")}
                >
                  Cloudflare R2
                </button>
              </div>
              <div className="storage-details">
                <span className="storage-icon">
                  {storageMode === "r2" ? "◈" : "▣"}
                </span>
                <div>
                  <b>
                    {storageMode === "r2"
                      ? "logstash-production"
                      : "/var/log/fluent-bit-archives"}
                  </b>
                  <small>
                    {storageMode === "r2"
                      ? "S3-compatible · eu-west-1"
                      : "Encrypted local volume"}
                  </small>
                </div>
                <span className="green-dot"></span>
              </div>
              <div className="storage-bar">
                <span></span>
              </div>
            </article>
            <article className="panel activity-panel" id="archives">
              <div className="panel-heading">
                <div>
                  <span className="panel-kicker">03 / ACTIVITY</span>
                  <h3>Recent events</h3>
                </div>
                <button
                  className="more-button"
                  type="button"
                  aria-label="View all events"
                >
                  •••
                </button>
              </div>
              <div className="event-list">
                {events.map(([time, event, detail, state]) => (
                  <div className="event-row" key={time + event}>
                    <span className={"event-status " + state}></span>
                    <time>{time}</time>
                    <div>
                      <b>{event}</b>
                      <small>{detail}</small>
                    </div>
                    <span className="event-arrow">↗</span>
                  </div>
                ))}
              </div>
            </article>
          </div>
        </section>

        <section className="cta-section">
          <div>
            <p className="eyebrow">READY WHEN YOU ARE</p>
            <h2>
              Logs are only useful
              <br />
              when you can trust them.
            </h2>
          </div>
          <div className="cta-right">
            <p>
              Start with one VM. Scale to your whole fleet when the signal is
              clear.
            </p>
            <button
              className="primary-button"
              type="button"
              onClick={handleDeploy}
            >
              {deployed ? "Deployment ready" : "Start your first deployment"}{" "}
              <span>↗</span>
            </button>
          </div>
        </section>
      </main>
      <footer>
        <a className="brand" href="#overview">
          <span className="brand-mark">
            <span></span>
            <span></span>
            <span></span>
          </span>
          <span>
            logstash<span className="brand-dot">.</span>
          </span>
        </a>
        <span>Built for the moments after “what happened?”</span>
        <div>
          <a href="#pipeline">Documentation</a>
          <a href="#archives">Status</a>
          <a href="#overview">GitHub ↗</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
