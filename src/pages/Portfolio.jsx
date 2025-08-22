import React from "react";

const projects = [
  { title: "Project One", desc: "Responsive landing page.", tags: ["React", "CSS"] },
  { title: "Project Two", desc: "Full-stack app with auth.", tags: ["React", "Node"] },
  { title: "Project Three", desc: "Data viz dashboard.", tags: ["React", "D3"] },
];

export default function Portfolio() {
  return (
    <div className="stack gap-md">
      <h2>Portfolio</h2>
      <div className="grid">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <div className="card-body">
              <h3>{p.title}</h3>
              <p className="muted">{p.desc}</p>
              <div className="tags">
                {p.tags.map((t) => (
                  <span key={t} className="tag">{t}</span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
