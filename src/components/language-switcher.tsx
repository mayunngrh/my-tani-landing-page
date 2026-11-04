"use client";

import { isLocale, localeCookie, type Locale } from "@/i18n/config";
import styles from "./language-switcher.module.css";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  return (
    <label className={styles.switcher}>
      <span className={styles.srOnly}>{locale === "id" ? "Bahasa" : "Language"}</span>
      <select
        aria-label={locale === "id" ? "Bahasa" : "Language"}
        value={locale}
        onChange={(event) => {
          const nextLocale = event.target.value;
          if (!isLocale(nextLocale)) return;
          document.cookie = `${localeCookie}=${nextLocale}; Path=/; Max-Age=31536000; SameSite=Lax${location.protocol === "https:" ? "; Secure" : ""}`;
          const url = new URL(window.location.href);
          const segments = url.pathname.split("/");
          if (isLocale(segments[1])) segments[1] = nextLocale;
          else segments.splice(1, 0, nextLocale);
          url.pathname = segments.join("/");
          window.location.assign(url.href);
        }}
      >
        <option value="en" lang="en">English</option>
        <option value="id" lang="id">Indonesia</option>
      </select>
    </label>
  );
}
