import { getTranslator } from "@/i18n/messages";
import { requireLocale } from "@/i18n/server";
import Image from "next/image";
import { ContactCard } from "@/components/contact-card";
import { FaqCard } from "@/components/faq-card";
import { Brand, SiteNavigation } from "@/components/site-navigation";
import styles from "@/app/page.module.css";

export default async function Home({ params }: PageProps<"/[lang]">) {
  const locale = requireLocale((await params).lang);
  const t = getTranslator(locale);
  const whatsapp = `https://wa.me/6287797141007?text=${encodeURIComponent(t("Hello MyTani, I would like to ask about your semi-husked coconuts."))}`;
  const email = `mailto:mytanibali@gmail.com?subject=${encodeURIComponent(t("MyTani coconut enquiry"))}`;

  const steps = [
    ["01", t("Tell us what you need"), t("Share your required grade, quantity and destination with our team.")],
    ["02", t("Discuss the details"), t("We’ll clarify product specifications, availability and order terms with you.")],
    ["03", t("Prepare your order"), t("Once the details are agreed, your coconuts are prepared and packed for the journey.")],
    ["04", t("Arrange shipment"), t("We coordinate the next steps for your shipment according to your order agreement.")],
  ];

  return (
    <main id="top" className={styles.page}>
      <a className={styles.skip} href="#about">{t("Skip to content")}</a>
      <SiteNavigation locale={locale} />

      <section id="home" className={styles.hero} aria-labelledby="hero-title">
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}><span /> {t("Bali, Indonesia")}</p>
            <h1 id="hero-title">{t("Rooted in Bali.")}<br /><em>{t("Ready for the world.")}</em></h1>
            <p className={styles.heroDescription}>{t("Semi-husked coconuts from Bali, thoughtfully brought closer to your business.")}</p>
            <div className={styles.actions}><a className={`glass-surface ${styles.buttonLight}`} href="#product">{t("Explore our coconut")} <span aria-hidden="true">↗</span></a><a className={styles.textLinkLight} href="#about">{t("Story")} <span aria-hidden="true">↓</span></a></div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroImage}><Image src="/images/coconut-hero.webp" alt={t("Close-up of mature coconuts with brown husks")} fill loading="eager" fetchPriority="high" sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 850px) 560px, (max-width: 1440px) 48vw, 688px" /></div>
            <div className={`glass-surface ${styles.heroTag}`}><span className={styles.tagIcon} aria-hidden="true">◒</span><div><strong>{t("One remarkable fruit.")}</strong><small>{t("From Bali, with care.")}</small></div></div>
          </div>
          <div className={styles.heroBottom}><span>{t("Rooted in nature. Made for connection.")}</span><a href="#about">{t("Scroll to discover")} <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>

      <section id="about" className={`${styles.section} ${styles.about}`} aria-labelledby="about-title">
        <div className={styles.sectionMarker}><span>{t("Story")}</span><span>{t("Bali, Indonesia")}</span></div>
        <div className={styles.aboutGrid}><div><p className={styles.eyebrowDark}>{t("From our island to your business")}</p><h2 id="about-title">{t("A little island.")}<br /><em>{t("A bigger purpose.")}</em></h2></div><div className={`glass-surface ${styles.aboutText}`}><p className={styles.lead}>{t("A connection that starts with the people and the land behind every coconut.")}</p><p>{t("MyTani is a Bali-based coconut supplier focused on bringing semi-husked coconuts to businesses around the world. We believe good partnerships begin with clear communication, care for the product and respect for the people who grow it.")}</p><a className={styles.inlineLink} href="#people">{t("The people behind it")} <span aria-hidden="true">↗</span></a></div></div>
      </section>

      <section id="people" className={styles.people} aria-labelledby="people-title">
        <div className={styles.peopleImage}><Image src="/images/coconut-handling.webp" alt={t("People handling coconuts in a covered sorting area")} fill loading="lazy" sizes="100vw" /><div className={styles.peopleShade} /></div>
        <div className={`glass-surface glass-surface--dark ${styles.peopleContent}`}><p className={styles.eyebrow}>{t("People & place")}</p><h2 id="people-title">{t("Good things")}<br />{t("grow")} <em>{t("together.")}</em></h2><p>{t("Behind every coconut is a community. Our ambition is to create opportunities for local farmers and contribute to livelihoods in Bali as we grow.")}</p><a className={styles.textLinkLight} href="#contact">{t("Get to know MyTani")} <span aria-hidden="true">↗</span></a></div>
      </section>

      <section id="product" className={styles.product} aria-labelledby="product-title">
        <div className={styles.productHead}><div><p className={styles.eyebrowDark}>{t("Coconuts")}</p><h2 id="product-title">{t("Nature’s most")}<br /><em>{t("versatile fruit.")}</em></h2></div><p>{t("One carefully considered product, with possibilities that reach far beyond the shell.")}</p></div>
        <div className={styles.productGrid}>
          <div className={styles.productImage}><Image src="/images/coconut-detail.webp" alt={t("A single semi-husked coconut showing the retained fibre")} fill loading="lazy" sizes="(max-width: 850px) calc(100vw - 40px), (max-width: 1500px) 50vw, 740px" /></div>
          <div className={`glass-surface ${styles.productDetail}`}><div className={styles.detailTop}><span>{t("From Bali, Indonesia")}</span><span aria-hidden="true">◒</span></div><h3>{t("Semi-husked")}<br />{t("coconut")}</h3><p>{t("Known locally as kelapa kupas jambul, these mature coconuts are partially dehusked with some fibre left around the shell.")}</p><p>{t("Suitable for businesses sourcing coconuts for processing or retail. Tell us what you need and we’ll help you explore the available options.")}</p><a className={styles.inlineLink} href="#specifications">{t("Explore specifications")} <span aria-hidden="true">↓</span></a></div>
        </div>
      </section>

      <section id="specifications" className={`${styles.section} ${styles.specs}`} aria-labelledby="spec-title">
        <div className={styles.sectionMarker}><span>{t("Product details")}</span><span>{t("Semi-husked coconut")}</span></div>
        <div className={styles.specGrid}><div><p className={styles.eyebrowDark}>{t("The essentials")}</p><h2 id="spec-title">{t("The details")}<br /><em>{t("matter.")}</em></h2><p className={styles.specIntro}>{t("Every order begins with understanding what you need. Confirm the current grades and specifications directly with our team.")}</p><a className={`glass-surface glass-surface--dark ${styles.buttonDark}`} href={whatsapp} target="_blank" rel="noreferrer">{t("Ask about specifications")} <span aria-hidden="true">↗</span></a></div><dl className={`glass-surface ${styles.specList}`}><div><dt>{t("Product")}</dt><dd>{t("Semi-husked coconut")}</dd></div><div><dt>{t("Origin")}</dt><dd>{t("Bali, Indonesia")}</dd></div><div><dt>{t("Form")}</dt><dd>{t("Mature coconut, partially dehusked")}</dd></div><div><dt>{t("Grades & sizing")}</dt><dd>{t("Available upon enquiry")}</dd></div><div><dt>{t("Packing")}</dt><dd>{t("Discuss with our team")}</dd></div><div><dt>{t("Availability")}</dt><dd>{t("Confirmed per order")}</dd></div></dl></div>
      </section>

      <section id="process" className={`${styles.section} ${styles.process}`} aria-labelledby="process-title">
        <div className={styles.sectionMarker}><span>{t("How we work")}</span><span>{t("From enquiry to shipment")}</span></div>
        <div className={styles.processHead}><div><p className={styles.eyebrowDark}>{t("A straightforward journey")}</p><h2 id="process-title">{t("From first hello")}<br /><em>{t("to shipment.")}</em></h2></div><p>{t("Every business is different. We’ll work through the details together, one step at a time.")}</p></div>
        <ol className={styles.steps}>{steps.map(([number, title, description]) => <li className="glass-surface" key={number}><span className={styles.stepNumber}>{number}</span><div><h3>{title}</h3><p>{description}</p></div></li>)}</ol>
      </section>

      <section id="export" className={styles.export} aria-labelledby="export-title"><div className={styles.exportInner}><div><p className={styles.eyebrow}>{t("For international buyers")}</p><h2 id="export-title">{t("Let’s talk")}<br /><em>{t("business.")}</em></h2><p>{t("From order quantities to shipping terms, our team can help you understand the details for your destination and requirements.")}</p><a className={`glass-surface ${styles.buttonLight}`} href="#contact">{t("Start an enquiry")} <span aria-hidden="true">↗</span></a></div><div className={styles.exportInfo}>{[["01", t("Product & grade"), t("Tell us the specifications that suit your market.")], ["02", t("Quantity & packing"), t("Discuss minimum orders, available volumes and packing options.")], ["03", t("Terms & destination"), t("Confirm delivery arrangements and applicable trade terms with our team.")]].map(([number, title, description]) => <div className="glass-surface glass-surface--dark" key={number}><span>{number}</span><h3>{title}</h3><p>{description}</p></div>)}</div></div></section>

      <section id="insights" className={`${styles.section} ${styles.insights}`} aria-labelledby="insights-title"><div className={styles.sectionMarker}><span>{t("Coconut notes")}</span><span>{t("Frequently asked questions")}</span></div><div className={styles.insightsGrid}><div><p className={styles.eyebrowDark}>{t("A little more to know")}</p><h2 id="insights-title">{t("Good to")}<br /><em>{t("know.")}</em></h2><p>{t("Some useful starting points when sourcing semi-husked coconuts.")}</p></div><div className={styles.faq}>{[[t("What is a semi-husked coconut?"), t("It is a coconut with much of its outer husk removed while some fibre remains around the shell. Ask us for the current product details and photos.")], [t("Can I ask for a specific grade?"), t("Yes. Share your desired size, quantity and intended use with us, and we can discuss current availability and specifications.")], [t("How do I request a quotation?"), t("Contact us by WhatsApp or email with your product requirements, estimated quantity and destination. We will discuss the next steps with you.")]].map(([question, answer]) => <FaqCard key={question} question={question} answer={answer} />)}</div></div></section>

      <section id="contact" className={styles.contact} aria-labelledby="contact-title"><div className={styles.contactCircle} aria-hidden="true" /><div className={styles.contactInner}><p className={styles.eyebrow}>{t("Let’s grow together")}</p><h2 id="contact-title">{t("A good partnership")}<br /><em>{t("starts here.")}</em></h2><p>{t("Have a question or a coconut requirement in mind? We’d love to hear from you.")}</p><div className={styles.actions}><a className={`glass-surface ${styles.buttonLight}`} href={whatsapp} target="_blank" rel="noreferrer">{t("Chat on WhatsApp")} <span aria-hidden="true">↗</span></a><a className={styles.textLinkLight} href={email}>{t("Send us an email")} <span aria-hidden="true">↗</span></a></div><div className={styles.contactInfo}><ContactCard href={email} label={t("Email")} value="mytanibali@gmail.com" icon="email" /><ContactCard href={whatsapp} label={t("WhatsApp")} value="+62 877 9714 1007" icon="chat" external /><ContactCard href="https://www.google.com/maps/search/?api=1&query=Bali%2C%20Indonesia" label={t("Based in")} value={t("Bali, Indonesia")} icon="location" external /></div></div></section>

      <footer className={`glass-surface ${styles.footer}`}><div><Brand locale={locale} /><p>{t("Rooted in Bali.")}<br />{t("Ready for the world.")}</p></div><div className={styles.footerLinks}><div><strong>{t("Explore")}</strong><a href="#home">{t("Home")}</a><a href="#about">{t("Story")}</a><a href="#product">{t("Coconuts")}</a><a href="#process">{t("Process")}</a><a href="#export">{t("Export info")}</a></div><div><strong>{t("Connect")}</strong><a href={email}>{t("Email")}</a><a href={whatsapp} target="_blank" rel="noreferrer">{t("WhatsApp")}</a><a href="#contact">{t("Contact")}</a></div></div><div className={styles.footerBottom}><span>{t("© MyTani. All rights reserved.")}</span><a href="#top">{t("Back to top ↑")}</a></div></footer>
    </main>
  );
}
