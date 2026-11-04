import type { Locale } from "@/i18n/config";
import { getTranslator } from "@/i18n/messages";
import styles from "@/app/page.module.css";

export function ProductAdvantages({ locale }: { locale: Locale }) {
  const t = getTranslator(locale);
  const advantages = [
    [t("Premium Bali origin"), t("Premium coconuts sourced directly from Bali — our No. 1 coconut offering from the island.")],
    [t("Highland growing conditions"), t("Our highland coconuts offer thicker, sweeter meat with high oil content.")],
    [t("Careful quality selection"), t("Each coconut is carefully selected and prepared to meet international export requirements, with quality maintained from harvest to shipment.")],
    [t("Reliable supply"), t("Partnerships with experienced local farmers support stable, sustainable supply and consistent product quality.")],
    [t("Integrated cargo coordination"), t("Exclusive cooperation with a major cargo company in Bali supports coordinated shipment and careful delivery to buyers.")],
    [t("Export-ready packing"), t("Ventilated Mesh/PP bags help maintain airflow during transport, with packing prepared for export distribution.")],
    [t("Responsible sourcing"), t("Sustainability and care for the environment guide our sourcing approach and our relationships with local farming communities.")],
    [t("Long-term buyer partnerships"), t("Professional, responsive service and a commitment to customer satisfaction support lasting business relationships.")],
  ];

  return (
    <div className={`glass-surface ${styles.advantages}`}>
      <p className={styles.eyebrowDark}>{t("Our advantages")}</p>
      <h3>{t("From origin to delivery")}</h3>
      <dl className={styles.advantageList}>
        {advantages.map(([title, description]) => <div key={title}><dt>{title}</dt><dd>{description}</dd></div>)}
      </dl>
    </div>
  );
}

export function ProductOrderDetails({ locale }: { locale: Locale }) {
  const t = getTranslator(locale);
  return (
    <div className={styles.orderDetails}>
      <div className={`glass-surface ${styles.orderPanel}`}>
        <h3>{t("Weight grades")}</h3>
        <table className={styles.gradeTable} aria-label={t("Weight grades")}>
          <thead><tr><th scope="col">{t("Grade")}</th><th scope="col">{t("Weight per coconut")}</th></tr></thead>
          <tbody>
            {[[t("Grade A"), t("1,000–2,000+ g")], [t("Grade B"), t("800–1,000 g")], [t("Grade C"), t("500–800 g")]].map(([grade, weight]) => <tr key={grade}><th scope="row">{grade}</th><td>{weight}</td></tr>)}
          </tbody>
        </table>
        <p>{t("The final grade for coconuts at the range boundaries is agreed in your quotation.")}</p>
      </div>
      <div className={`glass-surface ${styles.orderPanel}`}>
        <h3>{t("Packaging")}</h3>
        <ul className={styles.packingList}><li>{t("Mesh/PP bags")}</li><li>{t("Approximately 25–30 coconuts per bag")}</li></ul>
        <p>{t("Ventilated packing allows airflow during transport. Confirm handling and storage conditions for your shipment.")}</p>
      </div>
    </div>
  );
}
