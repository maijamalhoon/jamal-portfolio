import { readFile, writeFile } from "node:fs/promises";

const path = "src/app/page.tsx";
let source = await readFile(path, "utf8");

const replaceRequired = (before, after, label) => {
  if (!source.includes(before)) throw new Error(`Patch target missing: ${label}`);
  source = source.replace(before, after);
};

source = source.replace("  Github,\n", "").replace("  Linkedin,\n", "");

replaceRequired(
  `const projectCategories = [\n  "product live finance",\n  "systems private payroll",\n  "operations professional finance",\n] as const;\n`,
  `const projectCategories = [\n  "product live finance",\n  "systems private payroll",\n  "operations professional finance",\n] as const;\n\nconst commandLinks = [\n  { href: "#about", title: "About Jamal", description: "Story, values and background", icon: Briefcase },\n  { href: "#experience", title: "Experience", description: "Roles and operational responsibilities", icon: Clock },\n  { href: "#work", title: "Selected work", description: "Products, systems and case studies", icon: BarChart3 },\n  { href: "#lab", title: "Reconciliation lab", description: "Interactive finance calculation", icon: Calculator },\n  { href: "#profiles", title: "Professional profiles", description: "LinkedIn and live GitHub work", icon: Code },\n] as const;\n`,
  "typed command links",
);

replaceRequired(
  `<a href={contact.github} target="_blank" rel="noreferrer">\n                  <Github size={17} aria-hidden="true" /> GitHub\n                </a>`,
  `<a href={contact.github} target="_blank" rel="noreferrer">\n                  <span className="github-mini" aria-hidden="true">GH</span> GitHub\n                </a>`,
  "about GitHub icon",
);

replaceRequired(
  `<a href={contact.linkedin} target="_blank" rel="noreferrer">\n                  <Linkedin size={17} aria-hidden="true" /> LinkedIn\n                </a>`,
  `<a href={contact.linkedin} target="_blank" rel="noreferrer">\n                  <span className="linkedin-mini" aria-hidden="true">in</span> LinkedIn\n                </a>`,
  "about LinkedIn icon",
);

source = source.replace(
  `Source <Github size={16} aria-hidden="true" />`,
  `Source <Code size={16} aria-hidden="true" />`,
);

replaceRequired(
  `{[\n              ["#about", "About Jamal", "Story, values and background", Briefcase],\n              ["#experience", "Experience", "Roles and operational responsibilities", Clock],\n              ["#work", "Selected work", "Products, systems and case studies", BarChart3],\n              ["#lab", "Reconciliation lab", "Interactive finance calculation", Calculator],\n              ["#profiles", "Professional profiles", "LinkedIn and live GitHub work", Github],\n            ].map(([href, title, description, ItemIcon]) => (\n              <a key={String(href)} href={String(href)} data-command-item data-command-keywords={\`${"${title} ${description}"}\`}>\n                <span><ItemIcon size={18} aria-hidden="true" /></span>\n                <div><strong>{String(title)}</strong><small>{String(description)}</small></div>\n                <ArrowRight size={17} aria-hidden="true" />\n              </a>\n            ))}`,
  `{commandLinks.map(({ href, title, description, icon: ItemIcon }) => (\n              <a key={href} href={href} data-command-item data-command-keywords={\`${"${title} ${description}"}\`}>\n                <span><ItemIcon size={18} aria-hidden="true" /></span>\n                <div><strong>{title}</strong><small>{description}</small></div>\n                <ArrowRight size={17} aria-hidden="true" />\n              </a>\n            ))}`,
  "command navigation map",
);

source = source
  .replace(
    `<a href={contact.linkedin} target="_blank" rel="noreferrer"><Linkedin size={19} aria-hidden="true" /><strong>Open LinkedIn</strong>`,
    `<a href={contact.linkedin} target="_blank" rel="noreferrer"><span className="linkedin-mini" aria-hidden="true">in</span><strong>Open LinkedIn</strong>`,
  )
  .replace(
    `<a href={contact.github} target="_blank" rel="noreferrer"><Github size={19} aria-hidden="true" /><strong>Open GitHub</strong>`,
    `<a href={contact.github} target="_blank" rel="noreferrer"><span className="github-mini" aria-hidden="true">GH</span><strong>Open GitHub</strong>`,
  );

if (/\bGithub\b|\bLinkedin\b/.test(source)) {
  throw new Error("Unsupported Lucide brand import or usage remains");
}

await writeFile(path, source);
