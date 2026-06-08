"use client";

import { useState, useRef } from "react";
import { FAQ_ITEMS } from "@/lib/data";
import { useReveal } from "@/hooks/useReveal";

function FaqItem({ question, answer, defaultOpen }: { question: string; answer: string; defaultOpen?: boolean }) {
  const [open, setOpen] = useState(defaultOpen ?? false);
  const bodyRef = useRef<HTMLDivElement>(null);

  return (
    <div className={`faq-item ${open ? "is-open" : ""}`}>
      <button
        type="button"
        className="faq-item__trigger"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
      >
        <span className="faq-item__question">{question}</span>
        <span className="faq-item__icon" aria-hidden="true">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M7 1v12M1 7h12" className="faq-item__icon-v" />
          </svg>
        </span>
      </button>
      <div
        className="faq-item__body"
        ref={bodyRef}
        style={{
          maxHeight: open ? `${bodyRef.current?.scrollHeight ?? 500}px` : "0px",
        }}
      >
        <div className="faq-item__answer">
          <p>{answer}</p>
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  const heading = useReveal({ stagger: true });

  return (
    <section className="section faq" id="faq">
      <div className="faq__container">
        <div className={`faq__head ${heading.className}`} ref={heading.ref}>
          <h2 className="faq__title">FAQs</h2>
        </div>
        <div className="faq__list">
          {FAQ_ITEMS.map((item) => {
            if ("hidden" in item && item.hidden) return null;
            return (
              <FaqItem
                key={item.question}
                question={item.question}
                answer={item.answer}
                defaultOpen={item.defaultOpen}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}
