import type { Metadata } from "next";
import { locales } from "@/i18n/config";
import { getTranslator } from "@/i18n/messages";
import { requireLocale } from "@/i18n/server";
import "../globals.css";

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({ params }: LayoutProps<"/[lang]">): Promise<Metadata> {
  const locale = requireLocale((await params).lang);
  const t = getTranslator(locale);
  return {
    title: t("MyTani | Coconuts from Bali"),
    description: t("Discover MyTani’s semi-husked coconuts from Bali, Indonesia. Get in touch to discuss your sourcing requirements."),
    alternates: { languages: { en: "/en", id: "/id", "x-default": "/en" } },
  };
}

export default async function RootLayout({ children, params }: LayoutProps<"/[lang]">) {
  const locale = requireLocale((await params).lang);
  return <html lang={locale}><body>{children}</body></html>;
}
