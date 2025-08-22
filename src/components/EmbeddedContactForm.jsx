import React, { useState } from "react";

/**
 * EmbeddedContactForm
 * - Drop anywhere (Contact section or footer)
 * - Pass `action` to post to your backend or a service like Formspree
 *   e.g., action="https://formspree.io/f/yourFormId"
 * - Optional: onSuccess, onError callbacks
 */
export default function EmbeddedContactForm({
  action = "",
  onSuccess,
  onError,
}) {
  const [form, setForm] = useState({ name: "", email: "", message: "", company: "" }); // "company" = honeypot
  const [status, setStatus] = useState({ sending: false, sent: false, error: "" });

  const update = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const submit = async (e) => {
    e.preventDefault();
    if (status.sending) return;

    // honeypot: if filled, quietly ignore
    if (form.company.trim()) {
      setStatus({ sending: false, sent: true, error: "" });
      onSuccess?.();
      return;
    }

    try {
      setStatus({ sending: true, sent: false, error: "" });

      // Build payload
      const payload = {
        name: form.name,
        email: form.email,
        message: form.message,
      };

      // If no action provided, just simulate success
      if (!action) {
        await new Promise((r) => setTimeout(r, 500));
        setStatus({ sending: false, sent: true, error: "" });
        onSuccess?.(payload);
        return;
      }

      const res = await fetch(action, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const text = await res.text().catch(() => "");
        throw new Error(text || `Request failed with ${res.status}`);
      }

      setStatus({ sending: false, sent: true, error: "" });
      onSuccess?.(payload);
    } catch (err) {
      const msg = err instanceof Error ? err.message : "Something went wrong.";
      setStatus({ sending: false, sent: false, error: msg });
      onError?.(msg);
    }
  };

  if (status.sent) {
    return (
      <div className="stack gap-md" role="status" aria-live="polite">
        <h3>Thanks!</h3>
        <p className="muted">Your message was sent. I’ll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form className="form stack gap-sm" onSubmit={submit} noValidate>
      {/* Honeypot (hidden from humans) */}
      <label style={{ position: "absolute", left: "-9999px" }} aria-hidden="true">
        Company
        <input
          tabIndex={-1}
          autoComplete="off"
          name="company"
          value={form.company}
          onChange={update}
        />
      </label>

      <label className="stack gap-xs">
        <span>Name</span>
        <input
          name="name"
          value={form.name}
          onChange={update}
          placeholder="Your name"
          required
          aria-required="true"
        />
      </label>

      <label className="stack gap-xs">
        <span>Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={update}
          placeholder="you@example.com"
          required
          aria-required="true"
        />
      </label>

      <label className="stack gap-xs">
        <span>Message</span>
        <textarea
          name="message"
          rows={5}
          value={form.message}
          onChange={update}
          placeholder="How can I help?"
          required
          aria-required="true"
        />
      </label>

      {status.error && (
        <div className="muted" role="alert" style={{ color: "#ff6b6b" }}>
          {status.error}
        </div>
      )}

      <button className="btn" type="submit" disabled={status.sending}>
        {status.sending ? "Sending…" : "Send"}
      </button>
    </form>
  );
}
