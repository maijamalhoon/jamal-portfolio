import Link from "next/link";

export default function NotFound() {
  return (
    <main className="not-found-page">
      <section className="not-found-card">
        <span>404 · PAGE NOT FOUND</span>
        <h1>This route lost the ledger.</h1>
        <p>
          The page you requested does not exist. Return to the portfolio or jump directly to the selected work.
        </p>
        <div className="not-found-actions">
          <Link href="/">Return home</Link>
          <Link href="/#work">View selected work</Link>
        </div>
      </section>
    </main>
  );
}
