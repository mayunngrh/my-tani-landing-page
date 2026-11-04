import type { ReactNode } from "react";
import styles from "@/app/page.module.css";

const icons: Record<"email" | "chat" | "location", ReactNode> = {
  email: <><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>,
  chat: <path d="M20 11.5a8 8 0 0 1-8 8 9 9 0 0 1-3.5-.7L4 20l1.2-4.5a9 9 0 0 1-.7-3.5 8 8 0 0 1 8-8h.5a7.5 7.5 0 0 1 7 7v.5Z" />,
  location: <><path d="M19 10c0 5-7 11-7 11S5 15 5 10a7 7 0 1 1 14 0Z" /><circle cx="12" cy="10" r="2.5" /></>,
};

export function ContactCard({ href, label, value, icon, external = false }: {
  href: string;
  label: string;
  value: string;
  icon: keyof typeof icons;
  external?: boolean;
}) {
  return (
    <a
      className={`glass-surface glass-surface--dark ${styles.contactCard}`}
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <span className={styles.contactLabel}>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{icons[icon]}</svg>
        <span>{label}</span>
      </span>
      <strong>{value}</strong>
    </a>
  );
}
