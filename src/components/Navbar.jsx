import React from "react";

const tabs = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "portfolio", label: "Portfolio" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ active, onJump }) {
  return (
    <header className="navbar">
      <nav className="nav-center">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`nav-link ${active === t.id ? "active" : ""}`}
            onClick={() => onJump(t.id)}
            aria-current={active === t.id ? "page" : undefined}
          >
            {t.label}
          </button>
        ))}
      </nav>
    </header>
  );
}
