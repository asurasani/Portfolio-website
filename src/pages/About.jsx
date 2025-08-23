import React from "react";

function SparkIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M12 2 9.5 8.5 3 11l6.5 2.5L12 20l2.5-6.5L21 11l-6.5-2.5L12 2z"/>
    </svg>
  );
}
function StackIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path fill="currentColor" d="m12 2 9 4.5-9 4.5L3 6.5 12 2Zm0 7 9 4.5-9 4.5L3 13.5 12 9Zm0 7 9 4.5-9 4.5L3 20.5 12 16Z"/>
    </svg>
  );
}
function TargetIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M12 2a10 10 0 1 0 10 10A10.012 10.012 0 0 0 12 2Zm0 16a6 6 0 1 1 6-6 6.006 6.006 0 0 1-6 6Zm0-8a2 2 0 1 0 2 2 2.006 2.006 0 0 0-2-2Z"/>
    </svg>
  );
}

export default function About() {
  const badges = ["React", "Vue", "TypeScript", "Nest.js", "FastAPI", "GCP", "Python", ];

  const timeline = [
    { year: "2025", title: "Associate SWE @ Five9", desc: "Build & ship features, docs, and customer-facing improvements." },
    { year: "2024", title: "SWE Intern", desc: "Adapted Argilla; saved $100k; built Dialogflow integrations." },
    { year: "2023", title: "Projects", desc: "Portfolio apps, data viz, automation tooling." },
  ];

  return (
    <div className="about-wrap">
      {/* Left column: intro + highlights */}
      <div className="about-intro">
        <h2 className="about-title">About Me</h2>
        <p className="lead">
            I'm a developer who can only learn by building.
        </p>

        <p>
            I've always been curious about how things work—and even more curious about whether I could make them myself.
            Whenever I see an app with a subscription paywall, my first thought isn’t to pull out my wallet—it’s,
            <em> couldn’t I just build this myself?</em>
        </p>

        <p>
            That curiosity is what hooked me on software engineering. I love the challenge of reverse-engineering ideas,
            making them simpler, and turning them into tools I can actually use. Along the way, I’ve found that building
            things for myself usually makes life easier for others too—which is the most rewarding part.
        </p>

        <div className="about-cards">
          <div className="mini-card"><SparkIcon/> Product-minded engineering</div>
          <div className="mini-card"><StackIcon/> Full-stack focus</div>
          <div className="mini-card"><TargetIcon/> Outcome-driven, detail-oriented</div>
        </div>

        <div className="badge-row">
          {badges.map((b) => (
            <span key={b} className="badge">{b}</span>
          ))}
        </div>


        <div className="about-actions">
          <a className="btn" href="/resume.pdf" target="_blank" rel="noreferrer">Download Résumé</a>
          <a className="btn btn-ghost" href="#contact">Get in touch</a>
        </div>
      </div>

      {/* Right column: glass card with timeline + “now” box */}
      <div className="contact-card accent-border">
        <h3 style={{marginBottom: ".6rem"}}>What I’m doing now</h3>
        <ul className="now-list">
          <li>⚙️ Building features & docs that reduce support tickets</li>
          <li>🧪 Improving test coverage and DX</li>
          <li>📈 Polishing performance & a11y (Core Web Vitals)</li>
        </ul>

        <h3 style={{margin: "1.2rem 0 .6rem"}}>Career Highlights</h3>
        <ul className="timeline">
          {timeline.map((t) => (
            <li key={t.year}>
              <span className="t-year">{t.year}</span>
              <div className="t-body">
                <strong>{t.title}</strong>
                <p className="muted">{t.desc}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
