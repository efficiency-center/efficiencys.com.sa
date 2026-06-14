"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    setLoading(true);
    setError("");

    const data = new FormData(form);
    const body = {
      email: data.get("email"),
      phone: data.get("phone"),
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong.");
      }

      window.gtag?.("event", "conversion", {
        send_to: "AW-328814558/TLkICKrI2dwDEN6f5ZwB",
      });
      setSubmitted(true);
      form.reset();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form">
      <Link href="/" className="contact-form__logo" aria-label="Efficiency Center — Home">
        <Logo variant="footer" />
      </Link>

      <h1 className="contact-form__title">
        Please enter your contact details to get started
      </h1>
      <p className="contact-form__subtitle">
        We will solely use this information to contact you about our products and services.
      </p>

      {submitted ? (
        <p className="contact-form__success" role="status">
          Thank you! Our team will contact you shortly.
        </p>
      ) : (
        <form className="contact-form__fields" onSubmit={onSubmit} noValidate>
          <label className="contact-field">
            <span className="contact-field__icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 6h16v12H4V6z" />
                <path d="M4 7l8 6 8-6" />
              </svg>
            </span>
            <span className="contact-field__label">Email</span>
            <input
              type="email"
              name="email"
              placeholder=" "
              required
              autoComplete="email"
              className="contact-field__input"
            />
          </label>

          <label className="contact-field contact-field--phone">
            <span className="contact-field__country" aria-hidden="true">
              <span className="contact-field__flag">🇸🇦</span>
            </span>
            <span className="contact-field__prefix">(+966)</span>
            <input
              type="tel"
              name="phone"
              placeholder="Phone number"
              required
              autoComplete="tel"
              className="contact-field__input contact-field__input--phone"
            />
          </label>

          {error && (
            <p className="contact-form__error" role="alert">{error}</p>
          )}

          <p className="contact-form__privacy">
            By submitting this form you agree to our{" "}
            <Link href="/privacy">Privacy Policy</Link>
          </p>

          <button type="submit" className="contact-form__submit" disabled={loading}>
            {loading ? "Sending..." : "Get Started"}
            {!loading && <span aria-hidden="true">→</span>}
          </button>
        </form>
      )}
    </div>
  );
}
