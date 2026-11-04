"use client";

import { useEffect, useId, useRef, useState, type KeyboardEvent } from "react";
import { isLocale, localeCookie, type Locale } from "@/i18n/config";
import styles from "./language-switcher.module.css";

const languages = [
  { locale: "en", label: "English" },
  { locale: "id", label: "Indonesia" },
] as const;

// Called only from the language selection event.
function navigateToLocale(nextLocale: Locale) {
  document.cookie = `${localeCookie}=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
  const url = new URL(window.location.href);
  const segments = url.pathname.split("/");
  if (isLocale(segments[1])) segments[1] = nextLocale;
  else segments.splice(1, 0, nextLocale);
  url.pathname = segments.join("/");
  window.location.assign(url.href);
}

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const options = useRef<(HTMLButtonElement | null)[]>([]);
  const initialFocus = useRef(languages.findIndex((language) => language.locale === locale));
  const menuId = useId();
  const label = locale === "id" ? "Bahasa" : "Language";

  useEffect(() => {
    if (!open) return;
    options.current[initialFocus.current]?.focus();
    const dismiss = (event: PointerEvent) => {
      if (event.target instanceof Node && !root.current?.contains(event.target)) setOpen(false);
    };
    document.addEventListener("pointerdown", dismiss);
    return () => document.removeEventListener("pointerdown", dismiss);
  }, [open]);

  function showMenu(index: number) {
    initialFocus.current = index;
    setOpen(true);
  }

  function chooseLanguage(nextLocale: Locale) {
    setOpen(false);
    if (nextLocale === locale) {
      trigger.current?.focus();
      return;
    }
    navigateToLocale(nextLocale);
  }

  function handleMenuKey(event: KeyboardEvent<HTMLDivElement>) {
    const index = options.current.findIndex((option) => option === document.activeElement);
    let next: number;
    switch (event.key) {
      case "ArrowDown": next = (index + 1) % languages.length; break;
      case "ArrowUp": next = (index + languages.length - 1) % languages.length; break;
      case "Home": next = 0; break;
      case "End": next = languages.length - 1; break;
      case "e": case "E": next = 0; break;
      case "i": case "I": next = 1; break;
      case "Escape":
        event.preventDefault();
        setOpen(false);
        trigger.current?.focus();
        return;
      default: return;
    }
    event.preventDefault();
    options.current[next]?.focus();
  }

  return (
    <div
      ref={root}
      className={styles.switcher}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <button
        ref={trigger}
        type="button"
        className={styles.trigger}
        aria-label={`${label}: ${locale === "id" ? "Indonesia" : "English"}`}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-controls={open ? menuId : undefined}
        onClick={() => open ? setOpen(false) : showMenu(languages.findIndex((language) => language.locale === locale))}
        onKeyDown={(event) => {
          if (event.key === "ArrowDown" || event.key === "ArrowUp") {
            event.preventDefault();
            showMenu(event.key === "ArrowDown" ? 0 : languages.length - 1);
          }
        }}
      >
        <span>{locale === "id" ? "Indonesia" : "English"}</span>
        <svg className={styles.chevron} data-open={open} width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m4 6 4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
      </button>
      {open && (
        <div id={menuId} role="menu" aria-label={label} className={`glass-surface ${styles.menu}`} onKeyDown={handleMenuKey}>
          {languages.map((language, index) => (
            <button
              key={language.locale}
              ref={(element) => { options.current[index] = element; }}
              role="menuitemradio"
              aria-checked={locale === language.locale}
              type="button"
              tabIndex={-1}
              lang={language.locale}
              className={styles.option}
              onClick={() => chooseLanguage(language.locale)}
            >
              <span>{language.label}</span>
              {locale === language.locale && <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="m3 8 3 3 7-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
