import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const output = join(root, "public", "Jamal_Yaqoob_Resume.pdf");

const escapePdf = (value) => value.replaceAll("\\", "\\\\").replaceAll("(", "\\(").replaceAll(")", "\\)");
const commands = [];
const text = (x, y, size, value, bold = false) => {
  commands.push(`BT /${bold ? "F2" : "F1"} ${size} Tf 1 0 0 1 ${x} ${y} Tm (${escapePdf(value)}) Tj ET`);
};
const line = (x1, y1, x2, y2, width = 0.8) => {
  commands.push(`${width} w ${x1} ${y1} m ${x2} ${y2} l S`);
};

commands.push("0.04 0.05 0.06 rg 0 748 595 94 re f");
commands.push("1 1 1 rg");
text(42, 802, 24, "JAMAL YAQOOB", true);
text(42, 779, 11, "ACCOUNTING, FINANCE & SYSTEMS");
commands.push("0 0 0 rg");
text(42, 728, 9.5, "+92 328 2685435  |  jamalarain186@gmail.com  |  DHA Phase I, Karachi");
line(42, 714, 553, 714);

text(42, 691, 12, "PROFILE", true);
text(42, 674, 9.5, "Accounts professional with practical experience in finance operations, ERP/DMS workflows,");
text(42, 660, 9.5, "bank reconciliation, reporting, payroll and dealership controls. Computer Science student");
text(42, 646, 9.5, "focused on combining financial discipline with reliable digital systems.");

text(42, 617, 12, "EXPERIENCE", true);
text(42, 598, 10.5, "Assistant Accountant - Toyota Society Motors", true);
text(410, 598, 9, "Jun 2025 - Present");
text(54, 582, 9, "- Salary, management payments, commissions and financial documentation");
text(54, 568, 9, "- Multi-bank entries, ledgers, journals and bank reconciliation");
text(54, 554, 9, "- Daily reports, cash-flow records and DMS coordination");

text(42, 531, 10.5, "Cashier - Toyota Society Motors", true);
text(427, 531, 9, "Nov 2024 - Jun 2025");
text(54, 515, 9, "- Cash, card, corporate and warranty billing with daily settlements");
text(54, 501, 9, "- DMS invoicing, receipt processing, POS accuracy and customer support");

text(42, 478, 10.5, "Cashier - Toyota Creek Motors", true);
text(427, 478, 9, "Apr 2024 - Nov 2024");
text(54, 462, 9, "- Billing, reconciliation, end-of-day reporting and counter operations");

text(42, 433, 12, "CORE SKILLS", true);
text(42, 415, 9, "Bank Reconciliation  |  Journal Entries  |  Ledger Management  |  Salary Processing");
text(42, 401, 9, "Commission Handling  |  Financial Reporting  |  Cash Handling  |  POS Operations");
text(42, 387, 9, "ERP Systems  |  DMS Software  |  MS Office  |  IT Support  |  Troubleshooting");
text(42, 373, 9, "Networking  |  Problem Solving  |  Customer Dealing  |  Team Work  |  Quick Learning");

text(42, 343, 12, "EDUCATION", true);
text(42, 325, 10.5, "Bachelor's in Computer Science", true);
text(42, 310, 9, "Allama Iqbal Open University | 2025 - Present");

text(42, 280, 12, "PROJECTS & PROFESSIONAL LINKS", true);
text(42, 262, 9, "Portfolio: https://jamal-portfolio.vercel.app");
text(42, 248, 9, "GitHub: https://github.com/maijamalhoon");
text(42, 234, 9, "LinkedIn: https://pk.linkedin.com/in/jamalarain-it");
text(42, 220, 9, "Jamal's Finance: https://jamals-finance-sable.vercel.app");

text(42, 188, 12, "LANGUAGES", true);
text(42, 170, 9.5, "Urdu  |  English");

line(42, 145, 553, 145);
text(42, 126, 8.5, "References and supporting information are available on request.");

const stream = commands.join("\n");
const objects = [
  "<< /Type /Catalog /Pages 2 0 R >>",
  "<< /Type /Pages /Kids [3 0 R] /Count 1 >>",
  "<< /Type /Page /Parent 2 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 4 0 R /F2 5 0 R >> >> /Contents 6 0 R >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>",
  "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>",
  `<< /Length ${Buffer.byteLength(stream)} >>\nstream\n${stream}\nendstream`,
];

let pdf = "%PDF-1.4\n";
const offsets = [0];
objects.forEach((object, index) => {
  offsets.push(Buffer.byteLength(pdf));
  pdf += `${index + 1} 0 obj\n${object}\nendobj\n`;
});
const xrefOffset = Buffer.byteLength(pdf);
pdf += `xref\n0 ${objects.length + 1}\n0000000000 65535 f \n`;
offsets.slice(1).forEach((offset) => {
  pdf += `${String(offset).padStart(10, "0")} 00000 n \n`;
});
pdf += `trailer\n<< /Size ${objects.length + 1} /Root 1 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`;

mkdirSync(dirname(output), { recursive: true });
writeFileSync(output, pdf, "binary");
console.log(`Generated ${output}`);
