export default function Skills() {
  const skills = [
    { group: "Frontend", items: ["React", "TypeScript", "Vite/Cra", "CSS Modules", "Tailwind"] },
    { group: "Backend", items: ["Node.js", "Express", "FastAPI", "PostgreSQL"] },
    { group: "Cloud & Tools", items: ["GCP", "Docker", "CI/CD", "Git", "Jest"] },
  ];

  return (
    <div className="stack gap-md skills"> 
      <h2>Skills</h2>
      <div className="grid">
        {skills.map((s) => (
          <article key={s.group} className="card">
            <div className="card-body">
              <h3>{s.group}</h3>
              <ul className="pill-list">
                {s.items.map((i) => <li key={i} className="pill">{i}</li>)}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
