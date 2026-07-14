"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
  ArrowUpRight,
  BookOpenText,
  GitFork,
  MapPin,
  RefreshCw,
  Star,
  Users,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";

const GITHUB_USER = "maijamalhoon";
const CACHE_KEY = "jamal-github-live-v2";
const CACHE_TTL = 15 * 60 * 1000;

type GitHubProfile = {
  login: string;
  name: string | null;
  avatar_url: string;
  html_url: string;
  bio: string | null;
  location: string | null;
  public_repos: number;
  followers: number;
  following: number;
};

type GitHubRepo = {
  id: number;
  name: string;
  full_name: string;
  html_url: string;
  homepage: string | null;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  updated_at: string;
  pushed_at: string;
  topics?: string[];
};

type GitHubSnapshot = {
  profile: GitHubProfile;
  repos: GitHubRepo[];
  fetchedAt: number;
};

type LoadState = "loading" | "live" | "cached" | "fallback";

const fallbackProfile: GitHubProfile = {
  login: GITHUB_USER,
  name: "Jamal Yaqoob",
  avatar_url: "https://avatars.githubusercontent.com/u/150429791?v=4",
  html_url: `https://github.com/${GITHUB_USER}`,
  bio: "Accounting, finance and systems.",
  location: "Karachi, Pakistan",
  public_repos: 2,
  followers: 0,
  following: 0,
};

const fallbackRepos: GitHubRepo[] = [
  {
    id: 1269849875,
    name: "Jamals-finance",
    full_name: `${GITHUB_USER}/Jamals-finance`,
    html_url: `https://github.com/${GITHUB_USER}/Jamals-finance`,
    homepage: "https://jamals-finance-sable.vercel.app",
    description: "A privacy-minded personal finance workspace built with modern web technologies.",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    archived: false,
    updated_at: "2026-07-01T00:00:00Z",
    pushed_at: "2026-07-01T00:00:00Z",
    topics: ["finance", "nextjs", "supabase"],
  },
  {
    id: 1300849584,
    name: "jamal-portfolio",
    full_name: `${GITHUB_USER}/jamal-portfolio`,
    html_url: `https://github.com/${GITHUB_USER}/jamal-portfolio`,
    homepage: null,
    description: "Animated accounting, finance and systems portfolio.",
    language: "TypeScript",
    stargazers_count: 0,
    forks_count: 0,
    fork: false,
    archived: false,
    updated_at: "2026-07-14T00:00:00Z",
    pushed_at: "2026-07-14T00:00:00Z",
    topics: ["portfolio", "nextjs", "motion"],
  },
];

function GitHubMark({ size = 22 }: { size?: number }) {
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.23c0 4.52 2.87 8.35 6.84 9.71.5.1.68-.22.68-.49 0-.24-.01-1.05-.01-1.9-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.89 1.56 2.34 1.11 2.91.85.09-.66.35-1.11.64-1.37-2.22-.26-4.56-1.14-4.56-5.06 0-1.12.39-2.03 1.03-2.75-.1-.26-.45-1.3.1-2.71 0 0 .84-.28 2.75 1.05A9.3 9.3 0 0 1 12 6.66c.85 0 1.71.12 2.51.34 1.91-1.33 2.75-1.05 2.75-1.05.55 1.41.2 2.45.1 2.71.64.72 1.03 1.63 1.03 2.75 0 3.93-2.34 4.8-4.57 5.05.36.32.68.95.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.24 10.24 0 0 0 22 12.23C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

function readCache(): GitHubSnapshot | null {
  try {
    const raw = window.localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as GitHubSnapshot;
    if (!parsed.profile || !Array.isArray(parsed.repos) || !parsed.fetchedAt) return null;
    return parsed;
  } catch {
    return null;
  }
}

function formatUpdated(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return "Recently updated";
  return `Updated ${new Intl.DateTimeFormat("en", { month: "short", day: "numeric", year: "numeric" }).format(date)}`;
}

function normalizeRepos(repos: GitHubRepo[]) {
  return repos
    .filter((repo) => !repo.fork && !repo.archived)
    .sort((a, b) => new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime());
}

export default function GitHubLive() {
  const [snapshot, setSnapshot] = useState<GitHubSnapshot>({
    profile: fallbackProfile,
    repos: fallbackRepos,
    fetchedAt: 0,
  });
  const [state, setState] = useState<LoadState>("loading");
  const [refreshing, setRefreshing] = useState(false);

  const load = useCallback(async (force = false) => {
    const cached = readCache();
    if (!force && cached && Date.now() - cached.fetchedAt < CACHE_TTL) {
      setSnapshot({ ...cached, repos: normalizeRepos(cached.repos) });
      setState("cached");
      return;
    }

    setRefreshing(true);
    try {
      const headers = { Accept: "application/vnd.github+json" };
      const [profileResponse, reposResponse] = await Promise.all([
        fetch(`https://api.github.com/users/${GITHUB_USER}`, { headers, cache: "no-store" }),
        fetch(`https://api.github.com/users/${GITHUB_USER}/repos?sort=pushed&direction=desc&per_page=100`, {
          headers,
          cache: "no-store",
        }),
      ]);

      if (!profileResponse.ok || !reposResponse.ok) throw new Error("GitHub request failed");
      const profile = (await profileResponse.json()) as GitHubProfile;
      const repos = normalizeRepos((await reposResponse.json()) as GitHubRepo[]);
      const nextSnapshot = { profile, repos, fetchedAt: Date.now() };
      setSnapshot(nextSnapshot);
      setState("live");
      window.localStorage.setItem(CACHE_KEY, JSON.stringify(nextSnapshot));
    } catch {
      if (cached) {
        setSnapshot({ ...cached, repos: normalizeRepos(cached.repos) });
        setState("cached");
      } else {
        setSnapshot({ profile: fallbackProfile, repos: fallbackRepos, fetchedAt: 0 });
        setState("fallback");
      }
    } finally {
      setRefreshing(false);
    }
  }, []);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      void load(false);
    });
    return () => window.cancelAnimationFrame(frame);
  }, [load]);

  const statusCopy = useMemo(() => {
    if (state === "live") return "Live from GitHub";
    if (state === "cached") return "Recently synced";
    if (state === "fallback") return "Reliable saved snapshot";
    return "Syncing public work";
  }, [state]);

  return (
    <section className="section github-live-section" id="github" aria-labelledby="github-live-title">
      <div className="section-heading">
        <div className="section-kicker"><span>05</span><span>Live GitHub</span></div>
        <h2 id="github-live-title">Public work that stays current without rebuilding the portfolio.</h2>
      </div>

      <div className="github-live-shell">
        <motion.article
          className="github-profile-card"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-12%" }}
          transition={{ duration: 0.65 }}
        >
          <div className="github-profile-topline">
            <span className={`github-sync-state is-${state}`}><i />{statusCopy}</span>
            <button type="button" onClick={() => void load(true)} disabled={refreshing} aria-label="Refresh GitHub information">
              <RefreshCw size={16} className={refreshing ? "is-spinning" : ""} />
              Refresh
            </button>
          </div>

          <div className="github-profile-main">
            <Image
              src={snapshot.profile.avatar_url}
              alt={`${snapshot.profile.name ?? snapshot.profile.login} on GitHub`}
              width={164}
              height={164}
              sizes="82px"
              unoptimized
            />
            <div>
              <span>@{snapshot.profile.login}</span>
              <h3>{snapshot.profile.name ?? "Jamal Yaqoob"}</h3>
              <p>{snapshot.profile.bio ?? "Accounting, finance and systems."}</p>
            </div>
          </div>

          <div className="github-profile-meta">
            <span><BookOpenText size={17} /><strong>{snapshot.profile.public_repos}</strong> public repositories</span>
            <span><Users size={17} /><strong>{snapshot.profile.followers}</strong> followers</span>
            <span><MapPin size={17} />{snapshot.profile.location ?? "Karachi, Pakistan"}</span>
          </div>

          <a className="github-profile-link" href={snapshot.profile.html_url} target="_blank" rel="noreferrer">
            <GitHubMark size={19} /> Open full GitHub profile <ArrowUpRight size={17} />
          </a>
        </motion.article>

        <div className="github-repo-grid" aria-live="polite">
          {snapshot.repos.map((repo, index) => (
            <motion.article
              className="github-repo-card"
              key={repo.id}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-8%" }}
              transition={{ duration: 0.55, delay: Math.min(index, 5) * 0.06 }}
            >
              <div className="github-repo-head">
                <span><GitHubMark size={18} /> Public repository</span>
                <a href={repo.html_url} target="_blank" rel="noreferrer" aria-label={`Open ${repo.name} on GitHub`}>
                  <ArrowUpRight size={18} />
                </a>
              </div>
              <h3>{repo.name}</h3>
              <p>{repo.description ?? "Public source code and project history available on GitHub."}</p>
              <div className="github-repo-topics">
                {repo.language ? <span>{repo.language}</span> : null}
                {(repo.topics ?? []).slice(0, 3).map((topic) => <span key={topic}>{topic}</span>)}
              </div>
              <div className="github-repo-foot">
                <span><Star size={15} />{repo.stargazers_count}</span>
                <span><GitFork size={15} />{repo.forks_count}</span>
                <time dateTime={repo.updated_at}>{formatUpdated(repo.updated_at)}</time>
              </div>
              <div className="github-repo-actions">
                <a href={repo.html_url} target="_blank" rel="noreferrer">Source <ArrowUpRight size={16} /></a>
                {repo.homepage ? <a href={repo.homepage} target="_blank" rel="noreferrer">Live project <ArrowUpRight size={16} /></a> : null}
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      <p className="github-sync-note">
        Public profile changes and public repository additions or removals are reflected automatically. Private repositories stay private.
      </p>
    </section>
  );
}
