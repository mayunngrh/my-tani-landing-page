import Image from "next/image";
import { Brand, SiteNavigation } from "@/components/site-navigation";
import styles from "./page.module.css";

const whatsapp = "https://wa.me/6287797141007?text=Hello%20MyTani%2C%20I%20would%20like%20to%20ask%20about%20your%20semi-husked%20coconuts.";
const email = "mailto:mytanibali@gmail.com?subject=MyTani%20coconut%20enquiry";

const steps = [
  ["01", "Tell us what you need", "Share your required grade, quantity and destination with our team."],
  ["02", "Discuss the details", "We’ll clarify product specifications, availability and order terms with you."],
  ["03", "Prepare your order", "Once the details are agreed, your coconuts are prepared and packed for the journey."],
  ["04", "Arrange shipment", "We coordinate the next steps for your shipment according to your order agreement."],
];

export default function Home() {
  return (
    <main id="top" className={styles.page}>
      <a className={styles.skip} href="#about">Skip to content</a>
      <SiteNavigation />

      <section id="home" className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span /> Bali, Indonesia</p>
            <h1 id="hero-title">Rooted in Bali.<br /><em>Ready for the world.</em></h1>
            <p className={styles.heroDescription}>Semi-husked coconuts from Bali, thoughtfully brought closer to your business.</p>
            <div className={styles.actions}><a className={`glass-surface ${styles.buttonLight}`} href="#product">Explore our coconut <span aria-hidden="true">↗</span></a><a className={styles.textLinkLight} href="#about">Our story <span aria-hidden="true">↓</span></a></div>
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
        <div className={styles.aboutGrid}><div><p className={styles.eyebrowDark}>From our island to your business</p><h2 id="about-title">A little island.<br /><em>A bigger purpose.</em></h2></div><div className={`glass-surface ${styles.aboutText}`}><p className={styles.lead}>A connection that starts with the people and the land behind every coconut.</p><p>MyTani is a Bali-based coconut supplier focused on bringing semi-husked coconuts to businesses around the world. We believe good partnerships begin with clear communication, care for the product and respect for the people who grow it.</p><a className={styles.inlineLink} href="#people">The people behind it <span aria-hidden="true">↗</span></a></div></div>
      </section>

      <section id="product" className={styles.product} aria-labelledby="product-title">
        <div className={styles.productHead}><div><p className={styles.eyebrowDark}>Our coconut</p><h2 id="product-title">Nature’s most<br /><em>versatile fruit.</em></h2></div><p>One carefully considered product, with possibilities that reach far beyond the shell.</p></div>
        <div className={styles.productGrid}>
          <div className={styles.productImage}><Image src="/images/coconut-product.png" alt="Illustrative image of a group of mature coconuts" fill sizes="(max-width: 800px) 100vw, 55vw" /><span>Illustrative image</span></div>
          <div className={`glass-surface ${styles.productDetail}`}><div className={styles.detailTop}><span>From Bali, Indonesia</span><span aria-hidden="true">◒</span></div><h3>Semi-husked<br />coconut</h3><p>Known locally as kelapa kupas jambul, these mature coconuts are partially dehusked with some fibre left around the shell.</p><p>Suitable for businesses sourcing coconuts for processing or retail. Tell us what you need and we’ll help you explore the available options.</p><a className={styles.inlineLink} href="#specifications">Explore specifications <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>

      <section id="specifications" className={`${styles.section} ${styles.specs}`} aria-labelledby="spec-title">
        <div className={styles.sectionMarker}><span>Product details</span><span>Semi-husked coconut</span></div>
        <div className={styles.specGrid}><div><p className={styles.eyebrowDark}>The essentials</p><h2 id="spec-title">The details<br /><em>matter.</em></h2><p className={styles.specIntro}>Every order begins with understanding what you need. Confirm the current grades and specifications directly with our team.</p><a className={`glass-surface glass-surface--dark ${styles.buttonDark}`} href={whatsapp} target="_blank" rel="noreferrer">Ask about specifications <span aria-hidden="true">↗</span></a></div><dl className={`glass-surface ${styles.specList}`}><div><dt>Product</dt><dd>Semi-husked coconut</dd></div><div><dt>Origin</dt><dd>Bali, Indonesia</dd></div><div><dt>Form</dt><dd>Mature coconut, partially dehusked</dd></div><div><dt>Grades &amp; sizing</dt><dd>Available upon enquiry</dd></div><div><dt>Packing</dt><dd>Discuss with our team</dd></div><div><dt>Availability</dt><dd>Confirmed per order</dd></div></dl></div>
      </section>

      <section id="people" className={styles.people} aria-labelledby="people-title">
        <div className={styles.peopleImage}><Image src="/images/coconut-grove.png" alt="Illustrative image of coconuts in a tropical grove" fill sizes="100vw" /><div className={styles.peopleShade} /><span className={styles.imageNote}>Illustrative image</span></div>
        <div className={`glass-surface glass-surface--dark ${styles.peopleContent}`}><p className={styles.eyebrow}>People &amp; place</p><h2 id="people-title">Good things<br />grow <em>together.</em></h2><p>Behind every coconut is a community. Our ambition is to create opportunities for local farmers and contribute to livelihoods in Bali as we grow.</p><a className={styles.textLinkLight} href="#contact">Get to know MyTani <span aria-hidden="true">↗</span></a></div>
      </section>

      <section id="process" className={`${styles.section} ${styles.process}`} aria-labelledby="process-title">
        <div className={styles.sectionMarker}><span>How we work</span><span>From enquiry to shipment</span></div>
        <div className={styles.processHead}><div><p className={styles.eyebrowDark}>A straightforward journey</p><h2 id="process-title">From first hello<br /><em>to shipment.</em></h2></div><p>Every business is different. We’ll work through the details together, one step at a time.</p></div>
        <ol className={styles.steps}>{steps.map(([number, title, description]) => <li className="glass-surface" key={number}><span className={styles.stepNumber}>{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
      </section>

      <section id="export" className={styles.export} aria-labelledby="export-title"><div className={styles.exportInner}><div><p className={styles.eyebrow}>For international buyers</p><h2 id="export-title">Let’s talk<br /><em>business.</em></h2><p>From order quantities to shipping terms, our team can help you understand the details for your destination and requirements.</p><a className={`glass-surface ${styles.buttonLight}`} href="#contact">Start an enquiry <span aria-hidden="true">↗</span></a></div><div className={styles.exportInfo}>{[["01", "Product & grade", "Tell us the specifications that suit your market."], ["02", "Quantity & packing", "Discuss minimum orders, available volumes and packing options."], ["03", "Terms & destination", "Confirm delivery arrangements and applicable trade terms with our team."]].map(([number, title, description]) => <div className="glass-surface glass-surface--dark" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></div>)}</div></div></section>

      <section id="insights" className={`${styles.section} ${styles.insights}`} aria-labelledby="insights-title"><div className={styles.sectionMarker}><span>Coconut notes</span><span>Frequently asked questions</span></div><div className={styles.insightsGrid}><div><p className={styles.eyebrowDark}>A little more to know</p><h2 id="insights-title">Good to<br /><em>know.</em></h2><p>Some useful starting points when sourcing semi-husked coconuts.</p></div><div className={styles.faq}>{[["What is a semi-husked coconut?", "It is a coconut with much of its outer husk removed while some fibre remains around the shell. Ask us for the current product details and photos."], ["Can I ask for a specific grade?", "Yes. Share your desired size, quantity and intended use with us, and we can discuss current availability and specifications."], ["How do I request a quotation?", "Contact us by WhatsApp or email with your product requirements, estimated quantity and destination. We will discuss the next steps with you."]].map(([question, answer]) => <details className="glass-surface" key={question}><summary>{question}<span aria-hidden="true">+</span></summary><p>{answer}</p></details>)}</div></div></section>

      <section id="contact" className={styles.contact} aria-labelledby="contact-title"><div className={styles.contactCircle} aria-hidden="true" /><div className={styles.contactInner}><p className={styles.eyebrow}>Let’s grow together</p><h2 id="contact-title">A good partnership<br /><em>starts here.</em></h2><p>Have a question or a coconut requirement in mind? We’d love to hear from you.</p><div className={styles.actions}><a className={`glass-surface ${styles.buttonLight}`} href={whatsapp} target="_blank" rel="noreferrer">Chat on WhatsApp <span aria-hidden="true">↗</span></a><a className={styles.textLinkLight} href={email}>Send us an email <span aria-hidden="true">↗</span></a></div><div className={styles.contactInfo}><div className="glass-surface glass-surface--dark"><span>Email</span><a href={email}>mytanibali@gmail.com</a></div><div className="glass-surface glass-surface--dark"><span>WhatsApp</span><a href={whatsapp} target="_blank" rel="noreferrer">+62 877 9714 1007</a></div><div className="glass-surface glass-surface--dark"><span>Based in</span><strong>Bali, Indonesia</strong></div></div></div></section>

      <footer className={`glass-surface ${styles.footer}`}><div><Brand /><p>Rooted in Bali.<br />Ready for the world.</p></div><div className={styles.footerLinks}><div><strong>Explore</strong><a href="#about">Our story</a><a href="#product">Our coconut</a><a href="#process">Our process</a><a href="#export">Export info</a></div><div><strong>Connect</strong><a href={email}>Email</a><a href={whatsapp} target="_blank" rel="noreferrer">WhatsApp</a><a href="#contact">Contact</a></div></div><div className={styles.footerBottom}><span>© MyTani. All rights reserved.</span><a href="#top">Back to top ↑</a></div></footer>
    </main>
  );
}
