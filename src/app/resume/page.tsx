import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { PrintButton } from "./print-button";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "Résumé | Jamal Yaqoob",
  description: "Professional résumé of Jamal Yaqoob, accounting and finance professional.",
};

const roles = [
  {
    company: "Toyota Society Motors",
    title: "Assistant Accountant",
    period: "Jun 2025 — Present",
    points: [
      "Handling complete accounts operations and financial records",
      "Preparing employee salaries and management payments",
      "Managing sales, recovery, CR and MRS commissions",
      "Cash receipts, payments and bank reconciliation",
      "Multi-bank entries, ledgers and journal vouchers",
      "Preparing daily reports, cash-flow records and documentation",
      "Working with DMS and Toyota systems",
    ],
  },
  {
    company: "Toyota Society Motors",
    title: "Cashier",
    period: "Nov 2024 — Jun 2025",
    points: [
      "Cash, card, corporate and warranty billing",
      "Creative DMS invoicing and receipt processing",
      "Daily settlements, cash closing and reporting",
      "Customer interaction during peak hours",
      "Accurate POS operations",
    ],
  },
  {
    company: "Toyota Creek Motors",
    title: "Cashier",
    period: "Apr 2024 — Nov 2024",
    points: [
      "Cash, card, corporate and warranty billing",
      "Cash handling, reconciliation and end-of-day reporting",
      "POS operations and invoice accuracy",
      "Customer service and counter management",
    ],
  },
];

const skills = [
  "MS Office", "ERP Systems", "DMS Software", "Cash Handling", "Bank Reconciliation",
  "Journal Entries", "Ledger Management", "Salary Processing", "Commission Handling",
  "Financial Reporting", "Customer Dealing", "POS Operations", "IT Support",
  "System Troubleshooting", "Networking", "Problem Solving", "Team Work", "Quick Learning",
];

export default function ResumePage() {
  return (
    <main className={styles.page}>
      <div className={styles.toolbar}>
        <Link href="/">← Back to portfolio</Link>
        <PrintButton />
      </div>

      <article className={styles.sheet}>
        <header className={styles.header}>
          <div className={styles.photoWrap}>
            <Image
              className={styles.photo}
              src="https://avatars.githubusercontent.com/u/150429791?v=4"
              width={300}
              height={300}
              alt="Jamal Yaqoob"
              priority
            />
          </div>
          <div className={styles.identity}>
            <h1>JAMAL YAQOOB</h1>
            <p>ACCOUNTING AND FINANCE</p>
          </div>
        </header>

        <div className={styles.body}>
          <aside className={styles.sidebar}>
            <section className={styles.section}>
              <h2>Contact</h2>
              <ul className={styles.contact}>
                <li>0328-2685435</li>
                <li>jamalarain186@gmail.com</li>
                <li>DHA, Phase I, Karachi</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Skills</h2>
              <ul className={styles.skills}>
                {skills.map((skill) => <li key={skill}>• {skill}</li>)}
              </ul>
            </section>

            <section className={styles.section}>
              <h2>Languages</h2>
              <ul className={styles.languages}>
                <li>• Urdu</li>
                <li>• English</li>
              </ul>
            </section>
          </aside>

          <div className={styles.main}>
            <section className={styles.section}>
              <h2>Profile</h2>
              <p className={styles.profile}>
                Accounts professional with practical experience in finance operations, ERP systems and reporting.
                Currently managing salary processing, commission calculations and complete financial records, with
                a strong understanding of automobile dealership operations and a focus on accuracy, efficiency and growth.
              </p>
            </section>

            <section className={styles.section}>
              <h2>Work Experience</h2>
              {roles.map((role) => (
                <div className={styles.role} key={`${role.company}-${role.title}`}>
                  <div className={styles.roleHeader}>
                    <h3>{role.company}</h3>
                    <span>{role.period}</span>
                  </div>
                  <p className={styles.roleTitle}>{role.title}</p>
                  <ul>
                    {role.points.map((point) => <li key={point}>{point}</li>)}
                  </ul>
                </div>
              ))}
            </section>

            <section className={`${styles.section} ${styles.education}`}>
              <h2>Education</h2>
              <p><strong>Bachelor&apos;s in Computer Science</strong> — 2025 to Present</p>
              <p>Allama Iqbal Open University</p>
            </section>
          </div>
        </div>
      </article>
    </main>
  );
}
