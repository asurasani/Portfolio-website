import React, { useState } from "react";

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 2v.01L12 13 4 6.01V6h16ZM4 18V8.24l7.4 6.3a1.5 1.5 0 0 0 2 0L20 8.24V18H4Z"/>
    </svg>
  );
}
function UserIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Zm0 2c-4.33 0-8 2.17-8 5v1h16v-1c0-2.83-3.67-5-8-5Z"/>
    </svg>
  );
}
function MessageIcon(props) {
  return (
    <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" {...props}>
      <path fill="currentColor" d="M4 4h16a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H8l-4 4V6a2 2 0 0 1 2-2Z"/>
    </svg>
  );
}

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setSending(true);

    const res = await fetch("https://formspree.io/f/mqalrpzz", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
    });

    setSending(false);
    if(res.ok) setSent(true);
    else alert("Failed to send message");
  };

  return (
    <div className="contact-wrap">
      {/* Left column: blurb + quick links */}
      <div className="contact-intro">
        <h2 className="contact-title">Let’s work together</h2>
        <p className="muted">
          Have a project in mind or just want to say hi? Drop me a message—I'll reply within 1–2 business days.
        </p>

        <div className="contact-cards">
          <a className="mini-card" href="mailto:asurasani729@gmail.com" aria-label="Email">
            <MailIcon /> you@example.com
          </a>
          <a className="mini-card" href="https://www.linkedin.com/in/aneesh-surasani/" target="_blank" rel="noreferrer">
            {/* simple dot avatar */}
            <span className="dot" /> LinkedIn
          </a>
          <a className="mini-card" href="https://github.com/" target="_blank" rel="noreferrer">
            <span className="dot" /> GitHub
          </a>
        </div>

        <ul className="contact-highlights">
          <li>✅ Freelance & contract friendly</li>
          <li>⚡ Fast turnarounds</li>
          <li>🧪 Strong testing & a11y</li>
        </ul>
      </div>

      {/* Right column: glass form */}
      <div className="contact-card accent-border">
        {sent ? (
          <div className="stack gap-md" role="status" aria-live="polite">
            <h3>Thanks! 🎉</h3>
            <p className="muted">Your message is on its way. I’ll get back to you soon.</p>
            <button className="btn btn-ghost" onClick={() => setSent(false)}>
              Send another
            </button>
          </div>
        ) : (
          <form className="stack gap-sm contact-form" onSubmit={submit} noValidate>
            <label className="input-wrap">
              <span className="input-label">Name</span>
              <span className="input-with-icon">
                <UserIcon className="input-icon" />
                <input
                  name="name"
                  value={form.name}
                  onChange={update}
                  placeholder="Your name"
                  required
                />
              </span>
            </label>

            <label className="input-wrap">
              <span className="input-label">Email</span>
              <span className="input-with-icon">
                <MailIcon className="input-icon" />
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={update}
                  placeholder="you@example.com"
                  required
                />
              </span>
            </label>

            <label className="input-wrap">
              <span className="input-label">Message</span>
              <span className="input-with-icon text-area">
                <MessageIcon className="input-icon" />
                <textarea
                  name="message"
                  rows={5}
                  value={form.message}
                  onChange={update}
                  placeholder="How can I help?"
                  required
                />
              </span>
            </label>

            <button className="btn glow" type="submit" disabled={sending}>
              {sending ? "Sending…" : "Send"}
            </button>

            <p className="tiny muted">
              By sending this form you agree to be contacted about your inquiry.
            </p>
          </form>
        )}
      </div>
    </div>
  );
}
