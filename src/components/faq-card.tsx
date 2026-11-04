"use client";

import { useId, useState } from "react";
import styles from "./faq-card.module.css";

export function FaqCard({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const answerId = useId();

  return (
    <button
      type="button"
      className={`glass-surface ${styles.card}`}
      aria-label={question}
      aria-expanded={open}
      aria-controls={answerId}
      aria-describedby={open ? answerId : undefined}
      onClick={() => setOpen((current) => !current)}
    >
      <span className={styles.heading}>
        <span>{question}</span>
        <svg className={styles.icon} width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
          <path d="M4 10h12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          <path className={styles.vertical} d="M10 4v12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span id={answerId} className={styles.answer} aria-hidden={!open}>
        <span className={styles.clip}><span className={styles.copy}>{answer}</span></span>
      </span>
    </button>
  );
}
