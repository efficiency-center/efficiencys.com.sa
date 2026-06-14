"use client";

import { useEffect, useState } from "react";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (!stored) setVisible(true);
  }, []);

  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
    window.dispatchEvent(new Event("cookie-consent-accepted"));
  };

  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-banner">
      <p className="cookie-banner__text">
        We use cookies and tracking technologies to improve your experience and measure site performance.
      </p>
      <div className="cookie-banner__actions">
        <button className="cookie-banner__btn cookie-banner__btn--decline" onClick={decline}>
          Decline
        </button>
        <button className="cookie-banner__btn cookie-banner__btn--accept" onClick={accept}>
          Accept
        </button>
      </div>
    </div>
  );
}
