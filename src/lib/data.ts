export const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Profiles", href: "#github" },
  { label: "Contact", href: "#contact" },
] as const;

export const experience = [
  {
    company: "Toyota Society Motors",
    role: "Assistant Accountant",
    period: "Jun 2025 — Present",
    summary:
      "Manages day-to-day accounting operations, payroll, commissions, bank reconciliation, journals, reporting and finance documentation across dealership workflows.",
    highlights: [
      "Salary and management payment preparation",
      "Sales, recovery, CR and MRS commission handling",
      "Multi-bank entries, ledgers and journal vouchers",
      "Daily reports, cash-flow records and DMS coordination",
    ],
  },
  {
    company: "Toyota Society Motors",
    role: "Cashier",
    period: "Nov 2024 — Jun 2025",
    summary:
      "Managed high-volume cash, card, corporate and warranty billing while keeping settlements, invoicing and customer interactions accurate under pressure.",
    highlights: [
      "CREATIVE DMS invoicing and receipt processing",
      "Daily settlement, cash closing and reporting",
      "POS accuracy across multiple payment methods",
      "Customer-facing counter management",
    ],
  },
  {
    company: "Toyota Creek Motors",
    role: "Cashier",
    period: "Apr 2024 — Nov 2024",
    summary:
      "Handled dealership billing, reconciliation and end-of-day reporting with a strong focus on clean records and responsive customer service.",
    highlights: [
      "Cash, credit/debit, corporate and warranty billing",
      "End-of-day reconciliation and reporting",
      "Invoice accuracy and POS operations",
      "Customer service and counter operations",
    ],
  },
] as const;

export const skillGroups = [
  {
    title: "Finance core",
    skills: [
      "Bank Reconciliation",
      "Journal Entries",
      "Ledger Management",
      "Salary Processing",
      "Commission Handling",
      "Financial Reporting",
      "Cash Handling",
    ],
  },
  {
    title: "Systems",
    skills: [
      "ERP Systems",
      "DMS Software",
      "POS Operations",
      "MS Office",
      "IT Support",
      "System Troubleshooting",
      "Networking",
    ],
  },
  {
    title: "Working style",
    skills: [
      "Problem Solving",
      "Customer Service",
      "Teamwork",
      "Adaptability",
      "Process Accuracy",
      "Documentation",
    ],
  },
] as const;

export const projects = [
  {
    eyebrow: "Flagship product",
    title: "Jamal’s Finance",
    description:
      "A privacy-minded personal finance workspace for accounts, income, expenses, goals, investments, payables and financial trends — designed around truthful data, ownership and calm control.",
    stack: ["Next.js 16", "React 19", "TypeScript", "Tailwind 4", "Supabase"],
    href: "https://jamals-finance-sable.vercel.app",
    repo: "https://github.com/maijamalhoon/Jamals-finance",
    status: "Live",
    visual: "finance",
  },
  {
    eyebrow: "Private build",
    title: "Jamal’s Payroll System",
    description:
      "A private product build centered on payroll workflows, structured calculations and dependable salary-processing operations.",
    stack: ["Payroll", "Operations", "Finance Systems", "Private Repository"],
    href: null,
    repo: null,
    status: "In development",
    visual: "payroll",
  },
  {
    eyebrow: "Operations case study",
    title: "Dealership Finance Control",
    description:
      "A real-world operating system for daily settlements, multi-bank entries, commission records, journals, reconciliations and management reporting across dealership finance.",
    stack: ["ERP", "DMS", "Reconciliation", "Reporting", "Process Design"],
    href: "#experience",
    repo: null,
    status: "Professional work",
    visual: "operations",
  },
] as const;

export const themes = [
  { id: "noir", label: "Noir", swatch: "#caff4a" },
  { id: "cobalt", label: "Cobalt", swatch: "#47d7ff" },
  { id: "ember", label: "Ember", swatch: "#ff7657" },
  { id: "ivory", label: "Ivory", swatch: "#5b57ff" },
] as const;

export type ThemeId = (typeof themes)[number]["id"];
