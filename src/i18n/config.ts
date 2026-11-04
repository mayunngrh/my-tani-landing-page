export const locales = ["en", "id"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";
export const localeCookie = "mytani-locale";

export function isLocale(value: string | undefined): value is Locale {
  return locales.some((locale) => locale === value);
}

/** Match supported browser languages in quality order, including regional tags. */
export function detectLocale(header: string | null): Locale {
  const preferences = (header ?? "").split(",").map((entry, index) => {
    const [tag, ...parameters] = entry.trim().split(";");
    const qualityParameter = parameters.find((parameter) => parameter.trim().startsWith("q="));
    const quality = qualityParameter ? Number(qualityParameter.trim().slice(2)) : 1;
    return { language: tag.toLowerCase().split("-")[0], quality, index };
  }).filter(({ quality }) => Number.isFinite(quality) && quality > 0 && quality <= 1)
    .sort((a, b) => b.quality - a.quality || a.index - b.index);

  const match = preferences.find(({ language }) => isLocale(language));
  return match && isLocale(match.language) ? match.language : defaultLocale;
}
