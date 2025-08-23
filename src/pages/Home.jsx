import React from "react";

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M13 5l7 7-7 7v-4H4v-6h9V5z"/>
    </svg>
  );
}

const featured = [
  { title: "Request Bin (Playground)", blurb: "Headless test endpoint with inspector.", href: "/#portfolio" },
  { title: "Annotation Tool", blurb: "Dialogflow pipelines + review UX.", href: "/#portfolio" },
  { title: "Docs Scraper", blurb: "API schema extractor for vendor docs.", href: "/#portfolio" },
];

const notes = [
  { title: "Improving DX with better error shapes", href: "#" },
  { title: "Shaving 400ms from a React route", href: "#" },
  { title: "CI tips for PR reliability", href: "#" },
];

export default function Home({ onPrimaryCta }) {
  return (
    <div className="home-wrap">
      {/* Left: hero copy */}
      <div className="hero-copy">
        <div className="hero-kicker">Shipping {">"} Talking</div>
        <h1 className="hero-title">
          I build fast, accessible interfaces
          <br />and **boring-reliable** services.
        </h1>
        <p className="muted">
          Full-stack engineer focused on smooth UX, clean APIs, and pragmatic tooling.
          No fluff—just things that work and keep working.
        </p>

        <div className="hero-actions">
          <button className="btn glow" onClick={onPrimaryCta}>
            See Featured Work <ArrowIcon style={{ marginLeft: 8 }} />
          </button>
          <a className="btn btn-ghost" href="#contact">Contact</a>
        </div>

        <div className="pill-row">
          <span className="pill">Break → Fix → Learn</span>
          <span className="pill">User first</span>
          <span className="pill">Learning by building</span>
          <span className="pill">Making life easier</span>
        </div>
      </div>

      {/* Right: decorative / code vibe (no photo) */}
      <div className="hero-art">
        <div className="beam" />
        <div className="glass code-card accent-border">
          <div className="code-header">
            <span className="dot red" />
            <span className="dot yellow" />
            <span className="dot green" />
            <span className="filename">deploy.ts</span>
          </div>
          <pre className="code">
              {`import { build, test, deploy } from "./pipeline";

              async function ship() {
                await build({ minify: true });
                await test({ coverage: 0.9 });
                await deploy({ env: "prod", canary: true });
                return "🚀 shipped";
              }

              ship().then(console.log);`}
          </pre>
        </div>
      </div>
    </div>
  );
}

// Page sections under the hero (still part of Home)
export function HomeBelow() {
  return (
    <div className="home-below">
      {/* Featured Work teaser (links into Portfolio section) */}
      <section aria-labelledby="featured-heading" className="featured">
        <h2 id="featured-heading">Featured Work</h2>
        <div className="grid">
          {featured.map((f) => (
            <a key={f.title} href={f.href} className="card hover-card">
              <div className="card-body">
                <h3>{f.title}</h3>
                <p className="muted">{f.blurb}</p>
                <span className="linkish">Open</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Latest Notes (not a blog—just short updates) */}
      <section aria-labelledby="notes-heading" className="notes">
        <h2 id="notes-heading">Latest Notes</h2>
        <ul>
          {notes.map((n) => (
            <li key={n.title}>
              <a href={n.href} className="linkish">{n.title}</a>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
