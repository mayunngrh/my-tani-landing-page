import Image from "next/image";
import styles from "./page.module.css";

const whatsapp = "https://wa.me/6287797141007?text=Hello%20MyTani%2C%20I%20would%20like%20to%20ask%20about%20your%20semi-husked%20coconuts.";
const email = "mailto:mytanibali@gmail.com?subject=MyTani%20coconut%20enquiry";

const links = [
  { href: "#about", label: "Our story" },
  { href: "#product", label: "Our coconut" },
  { href: "#process", label: "Our process" },
  { href: "#export", label: "Export info" },
];

const steps = [
  ["01", "Tell us what you need", "Share your required grade, quantity and destination with our team."],
  ["02", "Discuss the details", "We’ll clarify product specifications, availability and order terms with you."],
  ["03", "Prepare your order", "Once the details are agreed, your coconuts are prepared and packed for the journey."],
  ["04", "Arrange shipment", "We coordinate the next steps for your shipment according to your order agreement."],
];

function Brand() {
  return (
    <a className={styles.brand} href="#top" aria-label="MyTani home">
      <Image src="/images/mytani-logo-source.png" alt="" fill sizes="160px" priority />
    </a>
  );
}

export default function Home() {
  return (
    <main id="top" className={styles.page}>
      <a className={styles.skip} href="#about">Skip to content</a>
      <div className={styles.navigation}>
        <nav className={`glass-surface ${styles.nav}`} aria-label="Main navigation">
          <Brand />
          <div className={styles.navLinks}>{links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div>
          <a className={styles.navCta} href="#contact">Let’s talk <span aria-hidden="true">↗</span></a>
          <details className={styles.mobileMenu}>
            <summary>Menu <span aria-hidden="true">☰</span></summary>
            <div className={`glass-surface ${styles.mobilePanel}`}>{links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}<a href="#contact">Contact us</a></div>
          </details>
        </nav>
      </div>

      <section className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span /> Bali, Indonesia</p>
            <h1 id="hero-title">Rooted in Bali.<br /><em>Ready for the world.</em></h1>
            <p className={styles.heroDescription}>Semi-husked coconuts from Bali, thoughtfully brought closer to your business.</p>
            <div className={styles.actions}><a className={styles.buttonLight} href="#product">Explore our coconut <span aria-hidden="true">↗</span></a><a className={styles.textLinkLight} href="#about">Our story <span aria-hidden="true">↓</span></a></div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImage}><Image src="/images/coconut-product.png" alt="Illustrative image of mature semi-husked coconuts" fill priority sizes="(max-width: 800px) 100vw, 55vw" /></div>
            <div className={`glass-surface ${styles.heroTag}`}><span className={styles.tagIcon} aria-hidden="true">◒</span><div><strong>One remarkable fruit.</strong><small>From Bali, with care.</small></div></div>
            <p className={styles.heroCaption}>Illustrative image</p>
          </div>
          <div className={styles.heroBottom}><span>Rooted in nature. Made for connection.</span><a href="#about">Scroll to discover <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>

      <section id="about" className={`${styles.section} ${styles.about}`} aria-labelledby="about-title">
        <div className={styles.sectionMarker}><span>Our story</span><span>Bali, Indonesia</span></div>
        <div className={styles.aboutGrid}><div><p className={styles.eyebrowDark}>From our island to your business</p><h2 id="about-title">A little island.<br /><em>A bigger purpose.</em></h2></div><div className={styles.aboutText}><p className={styles.lead}>A connection that starts with the people and the land behind every coconut.</p><p>MyTani is a Bali-based coconut supplier focused on bringing semi-husked coconuts to businesses around the world. We believe good partnerships begin with clear communication, care for the product and respect for the people who grow it.</p><a className={styles.inlineLink} href="#people">The people behind it <span aria-hidden="true">↗</span></a></div></div>
      </section>

      <section id="product" className={styles.product} aria-labelledby="product-title">
        <div className={styles.productHead}><div><p className={styles.eyebrowDark}>Our coconut</p><h2 id="product-title">Nature’s most<br /><em>versatile fruit.</em></h2></div><p>One carefully considered product, with possibilities that reach far beyond the shell.</p></div>
        <div className={styles.productGrid}>
          <div className={styles.productImage}><Image src="/images/coconut-product.png" alt="Illustrative image of a group of mature coconuts" fill sizes="(max-width: 800px) 100vw, 55vw" /><span>Illustrative image</span></div>
          <div className={styles.productDetail}><div className={styles.detailTop}><span>From Bali, Indonesia</span><span aria-hidden="true">◒</span></div><h3>Semi-husked<br />coconut</h3><p>Known locally as kelapa kupas jambul, these mature coconuts are partially dehusked with some fibre left around the shell.</p><p>Suitable for businesses sourcing coconuts for processing or retail. Tell us what you need and we’ll help you explore the available options.</p><a className={styles.inlineLink} href="#specifications">Explore specifications <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>

      <section id="specifications" className={`${styles.section} ${styles.specs}`} aria-labelledby="spec-title">
        <div className={styles.sectionMarker}><span>Product details</span><span>Semi-husked coconut</span></div>
        <div className={styles.specGrid}><div><p className={styles.eyebrowDark}>The essentials</p><h2 id="spec-title">The details<br /><em>matter.</em></h2><p className={styles.specIntro}>Every order begins with understanding what you need. Confirm the current grades and specifications directly with our team.</p><a className={styles.buttonDark} href={whatsapp} target="_blank" rel="noreferrer">Ask about specifications <span aria-hidden="true">↗</span></a></div><dl className={styles.specList}><div><dt>Product</dt><dd>Semi-husked coconut</dd></div><div><dt>Origin</dt><dd>Bali, Indonesia</dd></div><div><dt>Form</dt><dd>Mature coconut, partially dehusked</dd></div><div><dt>Grades &amp; sizing</dt><dd>Available upon enquiry</dd></div><div><dt>Packing</dt><dd>Discuss with our team</dd></div><div><dt>Availability</dt><dd>Confirmed per order</dd></div></dl></div>
      </section>

      <section id="people" className={styles.people} aria-labelledby="people-title">
        <div className={styles.peopleImage}><Image src="/images/coconut-grove.png" alt="Illustrative image of coconuts in a tropical grove" fill sizes="100vw" /><div className={styles.peopleShade} /><span className={styles.imageNote}>Illustrative image</span></div>
        <div className={styles.peopleContent}><p className={styles.eyebrow}>People &amp; place</p><h2 id="people-title">Good things<br />grow <em>together.</em></h2><p>Behind every coconut is a community. Our ambition is to create opportunities for local farmers and contribute to livelihoods in Bali as we grow.</p><a className={styles.textLinkLight} href="#contact">Get to know MyTani <span aria-hidden="true">↗</span></a></div>
      </section>

      <section id="process" className={`${styles.section} ${styles.process}`} aria-labelledby="process-title">
        <div className={styles.sectionMarker}><span>How we work</span><span>From enquiry to shipment</span></div>
        <div className={styles.processHead}><div><p className={styles.eyebrowDark}>A straightforward journey</p><h2 id="process-title">From first hello<br /><em>to shipment.</em></h2></div><p>Every business is different. We’ll work through the details together, one step at a time.</p></div>
        <ol className={styles.steps}>{steps.map(([number, title, description]) => <li key={number}><span className={styles.stepNumber}>{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
      </section>

      <section id="export" className={styles.export} aria-labelledby="export-title"><div className={styles.exportInner}><div><p className={styles.eyebrow}>For international buyers</p><h2 id="export-title">Let’s talk<br /><em>business.</em></h2><p>From order quantities to shipping terms, our team can help you understand the details for your destination and requirements.</p><a className={styles.buttonLight} href="#contact">Start an enquiry <span aria-hidden="true">↗</span></a></div><div className={styles.exportInfo}><div><span>01</span><h3>Product &amp; grade</h3><p>Tell us the specifications that suit your market.</p></div><div><span>02</span><h3>Quantity &amp; packing</h3><p>Discuss minimum orders, available volumes and packing options.</p></div><div><span>03</span><h3>Terms &amp; destination</h3><p>Confirm delivery arrangements and applicable trade terms with our team.</p></div></div></div></section>

      <section id="insights" className={`${styles.section} ${styles.insights}`} aria-labelledby="insights-title"><div className={styles.sectionMarker}><span>Coconut notes</span><span>Frequently asked questions</span></div><div className={styles.insightsGrid}><div><p className={styles.eyebrowDark}>A little more to know</p><h2 id="insights-title">Good to<br /><em>know.</em></h2><p>Some useful starting points when sourcing semi-husked coconuts.</p></div><div className={styles.faq}><details><summary>What is a semi-husked coconut?<span aria-hidden="true">+</span></summary><p>It is a coconut with much of its outer husk removed while some fibre remains around the shell. Ask us for the current product details and photos.</p></details><details><summary>Can I ask for a specific grade?<span aria-hidden="true">+</span></summary><p>Yes. Share your desired size, quantity and intended use with us, and we can discuss current availability and specifications.</p></details><details><summary>How do I request a quotation?<span aria-hidden="true">+</span></summary><p>Contact us by WhatsApp or email with your product requirements, estimated quantity and destination. We will discuss the next steps with you.</p></details></div></div></section>

      <section id="contact" className={styles.contact} aria-labelledby="contact-title"><div className={styles.contactCircle} aria-hidden="true" /><div className={styles.contactInner}><p className={styles.eyebrow}>Let’s grow together</p><h2 id="contact-title">A good partnership<br /><em>starts here.</em></h2><p>Have a question or a coconut requirement in mind? We’d love to hear from you.</p><div className={styles.actions}><a className={styles.buttonLight} href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp <span aria-hidden="true">↗</span></a><a className={styles.textLinkLight} href={email}>Send us an email <span aria-hidden="true">↗</span></a></div><div className={styles.contactInfo}><div><span>Email</span><a href={email}>mytanibali@gmail.com</a></div><div><span>WhatsApp</span><a href={whatsapp} target="_blank" rel="noreferrer">+62 877 9714 1007</a></div><div><span>Based in</span><strong>Bali, Indonesia</strong></div></div></div></section>

      <footer className={styles.footer}><div><Brand /><p>Rooted in Bali.<br />Ready for the world.</p></div><div className={styles.footerLinks}><div><strong>Explore</strong>{links.map((link) => <a key={link.href} href={link.href}>{link.label}</a>)}</div><div><strong>Connect</strong><a href={email}>Email</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="#contact">Contact</a></div></div><div className={styles.footerBottom}><span>© MyTani. All rights reserved.</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
