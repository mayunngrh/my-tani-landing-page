import type { Metadata } from "next";
import { Button, ButtonLink } from "@/components/ui/button";
import { GlassPanel } from "@/components/ui/glass-panel";
import { TextField } from "@/components/ui/text-field";
import styles from "./showcase.module.css";

export const metadata: Metadata = {
  title: "Design system | MyTani",
  description: "A working visual foundation for MyTani.",
  robots: { index: false, follow: false },
};

const colors = [
  { name: "Olive", token: "--color-olive-800", value: "#39401E", tone: "olive" },
  { name: "Coconut shell", token: "--color-brown-800", value: "#512F1A", tone: "brown" },
  { name: "Warm cream", token: "--color-cream-100", value: "#F7F1E3", tone: "cream" },
  { name: "Husk", token: "--color-husk-300", value: "#E4D9C5", tone: "husk" },
];

export default function DesignSystemPage() {
  return (
    <main className={styles.page}>
      <header className={styles.topbar}>
        <a className={styles.wordmark} href="#top">MyTani <span> / design system</span></a>
        <nav aria-label="Design system sections" className={styles.topnav}>
          <a href="#foundations">Foundations</a>
          <a href="#materials">Materials</a>
          <a href="#components">Components</a>
        </nav>
      </header>

      <section className={styles.hero} id="top" aria-labelledby="hero-title">
        <div className={styles.heroCopy}>
          <p className={styles.kicker}>The visual foundation</p>
          <h1 id="hero-title">Rooted in<br /><em>something real.</em></h1>
          <p className={styles.heroText}>An evolving design language inspired by the coconut, the warmth of Bali, and the clarity of water.</p>
          <a href="#foundations" className={styles.heroLink}>Explore the system <span aria-hidden="true">↓</span></a>
        </div>
        <div className={styles.heroArt} aria-hidden="true">
          <div className={styles.orbit} />
          <div className={styles.coconutBack} />
          <div className={styles.coconutFront} />
          <div className={styles.heroGlass}><span>Natural origin</span><span>Modern clarity</span></div>
        </div>
        <div className={styles.heroFoot}><span>MyTani / Creative direction</span><span>Coconut Lens</span></div>
      </section>

      <div className={styles.content}>
        <section className={styles.section} id="foundations" aria-labelledby="foundations-title">
          <div className={styles.sectionIntro}>
            <div><p className={styles.kicker}>Foundations</p><h2 id="foundations-title">A palette with<br /><em>roots.</em></h2></div>
            <p>Earthy, warm and confident. These colors are sampled from the supplied logo and remain provisional until original brand assets are available.</p>
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
            <div><p className={styles.kicker}>Typography</p><p className={styles.typeDisplay}>A natural<br /><em>connection.</em></p></div>
            <div className={styles.typeDescription}><p className={styles.sampleAa}>Aa</p><p>Expressive serif for the big moments. A clear, familiar sans-serif for everything the buyer needs to understand.</p><span>Display serif / system sans</span></div>
          </div>
        </section>

        <section className={styles.section} id="materials" aria-labelledby="materials-title">
          <div className={styles.sectionIntro}>
            <div><p className={styles.kicker}>Material</p><h2 id="materials-title">A little<br /><em>lightness.</em></h2></div>
            <p>Glass draws from the clarity of coconut water. It adds depth to navigation and small surfaces while keeping information readable.</p>
          </div>
          <div className={styles.materialStage}>
            <div className={styles.stageCircle} aria-hidden="true" />
            <GlassPanel className={styles.lightPanel}><span className={styles.panelLabel}>Light surface</span><p>Clarity, with a little warmth.</p><span>For navigation and small overlays</span></GlassPanel>
            <GlassPanel tone="dark" className={styles.darkPanel}><span className={styles.panelLabel}>Dark surface</span><p>Grounded in olive.</p><span>For contrasting contexts</span></GlassPanel>
            <span className={styles.stageNote}>Translucent where supported. Solid when needed.</span>
          </div>
        </section>

        <section className={styles.section} id="components" aria-labelledby="components-title">
          <div className={styles.sectionIntro}>
            <div><p className={styles.kicker}>Components</p><h2 id="components-title">Made to<br /><em>be useful.</em></h2></div>
            <p>Simple building blocks for a thoughtful website, with clear actions, accessible labels and visible states.</p>
          </div>
          <div className={styles.componentGrid}>
            <div className={styles.componentBlock}>
              <div className={styles.componentHeading}><h3>Buttons</h3><span>01</span></div>
              <p>Use a solid button for the primary action. Secondary styles support the journey.</p>
              <div className={styles.buttonGroup}><Button>Primary action</Button><Button variant="secondary">Secondary action</Button><Button variant="glass">Glass action</Button><Button disabled>Disabled</Button></div>
              <ButtonLink href="#top" variant="secondary" size="small">Back to top <span aria-hidden="true">↑</span></ButtonLink>
            </div>
            <div className={styles.componentBlock}>
              <div className={styles.componentHeading}><h3>Fields</h3><span>02</span></div>
              <p>Labels stay visible. Hints and errors give useful context.</p>
              <div className={styles.fieldGroup}><TextField id="example-email" label="Email address" type="email" placeholder="you@company.com" hint="A sample field for the design system." /><TextField id="example-error" label="Company name" defaultValue="" error="Enter your company name." /></div>
            </div>
          </div>
        </section>
      </div>
      <footer className={styles.footer}><span>MyTani</span><p>A working foundation, made to grow.</p><a href="#top">Back to top ↑</a></footer>
    </main>
  );
}
