import Link from "next/link";

const footerGroups = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "How It Works", href: "/#how-it-works" },
      { label: "Study Modes", href: "/#study-modes" },
      { label: "Find a StudyBuddy", href: "/auth/register" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Study Guide", href: "/#study-guide" },
      { label: "Community", href: "/#community" },
      { label: "Help Center", href: "/#help" },
      { label: "Learning Tips", href: "/#learning-tips" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Our Mission", href: "/#mission" },
      { label: "Contact", href: "mailto:hello@studybuddy.com" },
      { label: "Careers", href: "/#careers" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/#privacy" },
      { label: "Terms", href: "/#terms" },
      { label: "Cookies", href: "/#cookies" },
      { label: "Safety", href: "/#safety" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="relative mt-16 overflow-hidden border-t border-[var(--border)]">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[350px] w-[700px] -translate-x-1/2 rounded-full bg-violet-500/5 blur-[140px]" />

      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_2fr]">
          <div className="max-w-md">
            <Link
              href="/"
              className="group inline-flex items-center gap-3"
              aria-label="StudyBuddy home"
            >
              <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-105">
                <div className="absolute h-4 w-4 rounded-full border-2 border-white/90" />
                <div className="absolute h-1.5 w-1.5 rounded-full bg-white" />
              </div>

              <span className="theme-text-primary text-xl font-bold tracking-tight">
                StudyBuddy
              </span>
            </Link>

            <p className="theme-text-secondary mt-6 text-sm leading-7">
              A smarter way for students to find compatible study partners,
              build meaningful connections, and learn better together.
            </p>

            <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-3 py-2 text-xs text-[var(--text-muted)] backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-lg shadow-emerald-400/60" />
              StudyBuddy is building the future of collaborative learning
            </div>

            <div className="mt-7 flex items-center gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs font-semibold text-[var(--text-muted)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:text-[var(--text-primary)]"
              >
                GH
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs font-semibold text-[var(--text-muted)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:text-[var(--text-primary)]"
              >
                in
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)] text-xs font-semibold text-[var(--text-muted)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:text-[var(--text-primary)]"
              >
                IG
              </a>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-4">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h3 className="theme-text-primary text-sm font-semibold">
                  {group.title}
                </h3>

                <ul className="mt-5 space-y-3">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-sm text-[var(--text-muted)] transition-colors duration-200 hover:text-violet-300"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 border-t border-[var(--border)] pt-7">
          <div className="flex flex-col gap-4 text-xs text-[var(--text-muted)] sm:flex-row sm:items-center sm:justify-between">
            <p>
              © {new Date().getFullYear()} StudyBuddy. All rights reserved.
            </p>

            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              <span>Built for better learning.</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}