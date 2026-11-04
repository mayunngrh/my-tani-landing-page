import { getTranslator } from "@/i18n/messages";
import { requireLocale } from "@/i18n/server";
import type { Metadata } from "next";
import { Button, ButtonLink } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { TextField } from "@/components/ui/text-field";
import styles from "@/app/design-system/showcase.module.css";
import { LanguageSwitcher } from "@/components/language-switcher";

export async function generateMetadata({ params }: PageProps<"/[lang]/design-system">): Promise<Metadata> {
  const t = getTranslator(requireLocale((await params).lang));
  return { title: t("Design system | MyTani"), description: t("A working visual foundation for MyTani."), robots: { index: false, follow: false }, alternates: { languages: { en: "/en/design-system", id: "/id/design-system", "x-default": "/en/design-system" } } };
}

export default async function DesignSystemPage({ params }: PageProps<"/[lang]/design-system">) {
  const locale = requireLocale((await params).lang);
  const t = getTranslator(locale);
  const colors = [
    { name: t("Olive"), token: "--color-olive-800", value: "#39401E", tone: "olive" },
    { name: t("Coconut shell"), token: "--color-brown-800", value: "#512F1A", tone: "brown" },
    { name: t("Warm cream"), token: "--color-cream-100", value: "#F7F1E3", tone: "cream" },
    { name: t("Husk"), token: "--color-husk-300", value: "#E4D9C5", tone: "husk" },
  ];

  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <a className={styles.wordmark} href="#top">{t("MyTani")} <span> {t("/ design system")}</span></a>
        <nav aria-label={t("Design system sections")} className={styles.topnav}>
          <a href="#foundations">{t("Foundations")}</a>
          <a href="#materials">{t("Materials")}</a>
          <a href="#components">{t("Components")}</a>
        </nav>
        <LanguageSwitcher locale={locale} />
      </header>

      <section className={styles.hero} id="top" aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>{t("The visual foundation")}</p>
          <h1 id="hero-title">{t("Rooted in")}<br /><em>{t("something real.")}</em></h1>
          <p className={styles.heroText}>{t("An evolving design language inspired by the coconut, the warmth of Bali, and the clarity of water.")}</p>
          <a href="#foundations" className={styles.heroLink}>{t("Explore the system")} <span aria-hidden="true">↓</span></a>
        </div>
        <div className={styles.heroArt} aria-hidden="true">
          <div className={styles.orbit} />
          <div className={styles.coconutBack} />
          <div className={styles.coconutFront} />
          <div className={styles.heroGlass}><span>{t("Natural origin")}</span><span>{t("Modern clarity")}</span></div>
        </div>
        <div className={styles.heroFoot}><span>{t("MyTani / Creative direction")}</span><span>{t("Coconut Lens")}</span></div>
      </section>

      <div className={styles.content}>
        <section className={styles.section} id="foundations" aria-labelledby="foundations-title">
          <div className={styles.sectionIntro}>
            <div><p className={styles.kicker}>{t("Foundations")}</p><h2 id="foundations-title">{t("A palette with")}<br /><em>{t("roots.")}</em></h2></div>
            <p>{t("Earthy, warm and confident. These colors are sampled from the supplied logo and remain provisional until original brand assets are available.")}</p>
          </div>
          <div className={styles.swatches}>
            {colors.map((color) => (
              <div className={styles.swatch} key={color.name}>
                <div className={`${styles.swatchColor} ${styles[color.tone]}`} />
                <div className={styles.swatchInfo}><strong>{color.name}</strong><span>{color.value}</span><code>{color.token}</code></div>
              </div>
            ))}
          </div>
          <div className={styles.typeSample}>
            <div><p className={styles.kicker}>{t("Typography")}</p><p className={styles.typeDisplay}>{t("A natural")}<br /><em>{t("connection.")}</em></p></div>
            <div className={styles.typeDescription}><p className={styles.sampleAa}>{t("Aa")}</p><p>{t("Expressive serif for the big moments. A clear, familiar sans-serif for everything the buyer needs to understand.")}</p><span>{t("Display serif / system sans")}</span></div>
          </div>
        </section>

        <section className={styles.section} id="materials" aria-labelledby="materials-title">
          <div className={styles.sectionIntro}>
            <div><p className={styles.kicker}>{t("Material")}</p><h2 id="materials-title">{t("A little")}<br /><em>{t("lightness.")}</em></h2></div>
            <p>{t("Glass draws from the clarity of coconut water. It adds depth to navigation and small surfaces while keeping information readable.")}</p>
          </div>
          <div className={styles.materialStage}>
            <div className={styles.stageCircle} aria-hidden="true" />
            <GlassPanel className={styles.lightPanel}><span className={styles.panelLabel}>{t("Light surface")}</span><p>{t("Clarity, with a little warmth.")}</p><span>{t("For navigation and small overlays")}</span></GlassPanel>
            <GlassPanel tone="dark" className={styles.darkPanel}><span className={styles.panelLabel}>{t("Dark surface")}</span><p>{t("Grounded in olive.")}</p><span>{t("For contrasting contexts")}</span></GlassPanel>
            <span className={styles.stageNote}>{t("Translucent where supported. Solid when needed.")}</span>
          </div>
        </section>

        <section className={styles.section} id="components" aria-labelledby="components-title">
          <div className={styles.sectionIntro}>
            <div><p className={styles.kicker}>{t("Components")}</p><h2 id="components-title">{t("Made to")}<br /><em>{t("be useful.")}</em></h2></div>
            <p>{t("Simple building blocks for a thoughtful website, with clear actions, accessible labels and visible states.")}</p>
          </div>
          <div className={styles.componentGrid}>
            <div className={styles.componentBlock}>
              <div className={styles.componentHeading}><h3>{t("Buttons")}</h3><span>01</span></div>
              <p>{t("Use a solid button for the primary action. Secondary styles support the journey.")}</p>
              <div className={styles.buttonGroup}><Button>{t("Primary action")}</Button><Button variant="secondary">{t("Secondary action")}</Button><Button variant="glass">{t("Glass action")}</Button><Button disabled>{t("Disabled")}</Button></div>
              <ButtonLink href="#top" variant="secondary" size="small">{t("Back to top")} <span aria-hidden="true">↑</span></ButtonLink>
            </div>
            <div className={styles.componentBlock}>
              <div className={styles.componentHeading}><h3>{t("Fields")}</h3><span>02</span></div>
              <p>{t("Labels stay visible. Hints and errors give useful context.")}</p>
              <div className={styles.fieldGroup}><TextField id="example-email" label={t("Email address")} type="email" placeholder={t("you@company.com")} hint={t("A sample field for the design system.")} /><TextField id="example-error" label={t("Company name")} defaultValue="" error={t("Enter your company name.")} /></div>
            </div>
          </div>
        </section>
      </div>
      <footer className={styles.footer}><span>{t("MyTani")}</span><p>{t("A working foundation, made to grow.")}</p><a href="#top">{t("Back to top ↑")}</a></footer>
    </main>
  );
}
