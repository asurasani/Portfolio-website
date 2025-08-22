import React, { useEffect, useMemo, useRef, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

export default function App() {
  // Refs for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const skillsRef = useRef(null);
  const contactRef = useRef(null);

  const pages = useMemo(
    () => ([
      { id: "home", ref: homeRef },
      { id: "about", ref: aboutRef },
      { id: "portfolio", ref: portfolioRef },
      { id: "skills", ref: skillsRef },
      { id: "contact", ref: contactRef },
    ]),
    []
  );

  // Track which section is active to highlight the navbar
  const [active, setActive] = useState("home");

  useEffect(() => {
    const observers = [];

    pages.forEach(({ id, ref }) => {
      const el = ref.current;
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActive(id);
            }
          });
        },
        {
          root: null,
          rootMargin: "-40% 0px -55% 0px", // focus mid viewport
          threshold: 0.01,
        }
      );

      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [pages]);

  // Smooth-scroll to section from navbar
  const scrollTo = (id) => {
    const target = pages.find((s) => s.id === id)?.ref.current;
    if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="app">
      <Navbar active={active} onJump={scrollTo} />

      {/* Only "/" route, but keeps CRA structure intact */}
      <main className="container">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <section id="home" ref={homeRef} className="section">
                  <Home onPrimaryCta={() => scrollTo("portfolio")} />
                </section>

                <section id="about" ref={aboutRef} className="section">
                  <About />
                </section>

                <section id="portfolio" ref={portfolioRef} className="section">
                  <Portfolio />
                </section>

                <section id="skills" ref={skillsRef} className="section">
                  <Skills />
                </section>

                <section id="contact" ref={contactRef} className="section">
                  <Contact />
                </section>
              </>
            }
          />
        </Routes>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Your Name</footer>
    </div>
  );
}
