import indonesian from "./id.json";
import type { Locale } from "./config";

export type MessageKey = keyof typeof indonesian;

/** English source copy is the key; missing translations fail the type check. */
export function getTranslator(locale: Locale) {
  return (message: MessageKey): string => locale === "id" ? indonesian[message] : message;
}
