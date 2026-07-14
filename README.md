# Jamal Yaqoob — Portfolio

A motion-rich, responsive portfolio for **Jamal Yaqoob**, presenting his work across accounting, finance operations, dealership systems, and software projects.

## Highlights

- Premium animated hero and section transitions
- Four persistent themes: Noir, Cobalt, Ember, and Ivory
- Smooth scrolling, cursor aura, spotlight cards, and magnetic actions
- Responsive experience timeline, project case studies, and skills system
- Reduced-motion support and keyboard-friendly interactions
- Static export for fast deployment on Vercel, Netlify, or GitHub Pages
- SEO metadata, Open Graph data, JSON-LD, sitemap, robots, and web manifest

## Technology

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS 4
- Motion
- Lenis
- Lucide React
- Self-hosted Manrope and Space Grotesk variable fonts

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Quality checks

```bash
npm run lint
npm run build
```

## Production build

The project uses Next.js static export. Running `npm run build` generates the deployable site in `out/`.

Set the final public URL before deployment:

```bash
cp .env.example .env.local
```

Then update `NEXT_PUBLIC_SITE_URL` in `.env.local`.

## Featured work

- [Jamal's Finance](https://jamals-finance-sable.vercel.app) — personal finance workspace
- [Jamal's Finance source](https://github.com/maijamalhoon/Jamals-finance)

## Author

Built for and maintained by **Jamal Yaqoob**.
