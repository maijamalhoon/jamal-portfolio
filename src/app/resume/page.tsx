import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { DownloadButton } from "./print-button";
import styles from "./resume.module.css";

export const metadata: Metadata = {
  title: "Résumé",
  description: "Professional résumé of Jamal Yaqoob, accounting and finance professional.",
};

const roles = [
  {
    company: "Toyota Society Motors",
    title: "Assistant Accountant",
    period: "Jun 2025 — Present",
    points: [
      "Managing end-to-end accounting operations and financial records",
      "Preparing employee salaries and management payments",
      "Managing sales, recovery, CR and MRS commissions",
      "Recording cash receipts and payments and performing bank reconciliation",
      "Maintaining multi-bank entries, ledgers and journal vouchers",
      "Preparing daily reports, cash-flow records and finance documentation",
      "Working with DMS and Toyota systems",
    ],
  },
  {
    company: "Toyota Society Motors",
    title: "Cashier",
    period: "Nov 2024 — Jun 2025",
    points: [
      "Managed cash, card, corporate and warranty billing",
      "Processed CREATIVE DMS invoices and receipts",
      "Completed daily settlements, cash closing and reporting",
      "Supported customers accurately during peak hours",
      "Maintained reliable POS operations",
    ],
  },
  {
    company: "Toyota Creek Motors",
    title: "Cashier",
    period: "Apr 2024 — Nov 2024",
    points: [
      "Managed cash, card, corporate and warranty billing",
      "Completed reconciliation and end-of-day reporting",
      "Maintained POS operations and invoice accuracy",
      "Delivered responsive customer service and counter management",
    ],
  },
];

const skills = [
  "MS Office", "ERP Systems", "DMS Software", "Cash Handling", "Bank Reconciliation",
  "Journal Entries", "Ledger Management", "Salary Processing", "Commission Handling",
  "Financial Reporting", "Customer Service", "POS Operations", "IT Support",
  "System Troubleshooting", "Networking", "Problem Solving", "Teamwork", "Adaptability",
];

export default function ResumePage() {
  return (
    <main className={styles.page}>
      <div className={styles.toolbar}>
        <Link href="/">← Back to portfolio</Link>
        <DownloadButton />
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
            <p>ACCOUNTING, FINANCE &amp; SYSTEMS</p>
          </div>
        </header>

        <div className={styles.body}>
          <aside className={styles.sidebar}>
            <section className={styles.section}>
              <h2>Contact</h2>
              <ul className={styles.contact}>
                <li><a href="tel:+923282685435">+92 328 2685435</a></li>
                <li><a href="mailto:jamalarain186@gmail.com">jamalarain186@gmail.com</a></li>
                <li>DHA Phase I, Karachi</li>
                <li><a href="https://maijamalhoon.github.io/jamal-portfolio/" target="_blank" rel="noreferrer">Portfolio</a></li>
                <li><a href="https://pk.linkedin.com/in/jamalarain-it" target="_blank" rel="noreferrer">LinkedIn</a></li>
                <li><a href="https://github.com/maijamalhoon" target="_blank" rel="noreferrer">GitHub</a></li>
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
                Accounts professional with practical experience in finance operations, ERP/DMS systems and reporting.
                Currently managing salary processing, commission calculations and financial records, with a strong
                understanding of automobile dealership operations and a focus on accuracy, efficiency and growth.
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
