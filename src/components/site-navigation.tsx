"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@/app/page.module.css";

const links = [
  { href: "#home", label: "Home", sections: ["home"] },
  { href: "#about", label: "Story", sections: ["about", "people"] },
  { href: "#product", label: "Coconuts", sections: ["product", "specifications"] },
  { href: "#process", label: "Process", sections: ["process"] },
  { href: "#export", label: "Export info", sections: ["export"] },
  { href: "#insights", label: "FAQs", sections: ["insights"] },
];

const contact = { href: "#contact", label: "Let’s talk", sections: ["contact"] };
const navigation = [...links, contact];

export function Brand() {
  return (
    <a className={styles.brand} href="#top" aria-label="MyTani home">
      <Image src="/images/mytani-wordmark-transparent.png" alt="" width={1100} height={416} sizes="(max-width: 850px) 125px, 145px" priority />
    </a>
  );
}

export function SiteNavigation() {
  const [activeHref, setActiveHref] = useState<string | null>(null);

  useEffect(() => {
    const sectionToHref = new Map(navigation.flatMap(({ href, sections }) => sections.map((id) => [id, href] as const)));
    let animationFrame = 0;

    const selectFromHash = () => {
      const href = `#${window.location.hash.slice(1)}`;
      setActiveHref(navigation.some((item) => item.href === href) ? href : null);
    };

    const updateFromScroll = () => {
      const readingLine = Math.min(160, window.innerHeight * 0.18);
      const current = [...sectionToHref.entries()]
        .map(([id, href]) => ({ id, href, top: document.getElementById(id)?.getBoundingClientRect().top }))
        .filter((section): section is { id: string; href: string; top: number } => section.top !== undefined && section.top <= readingLine)
        .sort((a, b) => b.top - a.top)[0];

      setActiveHref(current?.href ?? null);
    };

    const scheduleUpdate = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = window.requestAnimationFrame(() => {
        selectFromHash();
        updateFromScroll();
      });
    };

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", scheduleUpdate);
    scheduleUpdate();

    return () => {
      window.cancelAnimationFrame(animationFrame);
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", scheduleUpdate);
    };
  }, []);

  const renderLink = ({ href, label }: { href: string; label: string }) => (
    <a
      aria-current={activeHref === href ? "location" : undefined}
      href={href}
      key={href}
      onClick={() => setActiveHref(href)}
    >
      {label}
    </a>
  );

  return (
    <div className={styles.navigation}>
      <nav className={`glass-surface ${styles.nav}`} aria-label="Main navigation">
        <Brand />
        <div className={styles.navLinks}>{links.map(renderLink)}</div>
        <a
          aria-current={activeHref === contact.href ? "location" : undefined}
          className={`glass-surface glass-surface--dark ${styles.navCta}`}
          href={contact.href}
          onClick={() => setActiveHref(contact.href)}
        >
          {contact.label} <span aria-hidden="true">↗</span>
        </a>
        <details className={styles.mobileMenu}>
          <summary>Menu <span aria-hidden="true">☰</span></summary>
          <div className={`glass-surface ${styles.mobilePanel}`}>{navigation.map(renderLink)}</div>
        </details>
      </nav>
    </div>
  );
}
