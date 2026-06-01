"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

export default function FAQ() {
  const heading = useReveal();
  const list = useReveal();
  const [showAll, setShowAll] = useState(false);

  return (
    <section className="section faq" id="faq">
      <div className="container">
        <h2 className={`section-heading ${heading.className}`} ref={heading.ref}>
          FAQ
        </h2>
        <div className={`faq__list ${list.className} reveal--delay`} ref={list.ref}>
          {FAQ_ITEMS.map((item) => {
            const isHidden = "hidden" in item && item.hidden;
            return (
            <details
              key={item.question}
              className={`faq-item ${isHidden && !showAll ? "faq-item--hidden" : ""} ${isHidden && showAll ? "is-visible" : ""}`}
              open={item.defaultOpen}
            >
              <summary className="faq-item__question">
                <span>{item.question}</span>
                <span className="faq-item__icon" aria-hidden="true" />
              </summary>
              <div className="faq-item__answer">
                <p>{item.answer}</p>
              </div>
            </details>
          );
          })}
        </div>
        {!showAll && (
          <button
            type="button"
            className="faq__more link-accent"
            onClick={() => setShowAll(true)}
          >
            Show More
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M6 9l6 6 6-6" />
            </svg>
          </button>
        )}
      </div>
    </section>
  );
}
