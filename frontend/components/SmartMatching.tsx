const preferences = [
  {
    label: "Primary subject",
    value: "Computer Science",
  },
  {
    label: "Preferred schedule",
    value: "Evening",
  },
  {
    label: "Learning style",
    value: "Visual & collaborative",
  },
];

const matches = [
  {
    initials: "MB",
    name: "Mobi",
    subject: "Computer Science",
    score: 96,
  },
  {
    initials: "KS",
    name: "Km Shoyab",
    subject: "Software Engineering",
    score: 91,
  },
  {
    initials: "IH",
    name: "Imzamamul Haque",
    subject: "Data Structures",
    score: 87,
  },
];

export default function SmartMatching() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">

        {/* Product narrative */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
            Intelligent matching
          </p>

          <h2 className="theme-text-primary mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
            Meet people who{" "}
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              fit your study style.
            </span>
          </h2>

          <p className="theme-text-secondary mt-5 max-w-xl text-base leading-8 sm:text-lg">
            StudyBuddy considers the things that actually matter when you
            study together — your subjects, schedule, learning preferences,
            and academic goals.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Subject and academic interests",
              "Compatible study schedules",
              "Learning preferences and goals",
            ].map((item, index) => (
              <div
                key={item}
                className="flex items-center gap-3"
              >
                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-xs text-violet-300">
                  {index + 1}
                </div>

                <p className="theme-text-secondary text-sm">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Matching interface */}
        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px]" />

          <div className="relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/80 p-5 shadow-2xl backdrop-blur-xl sm:p-7">

            {/* Interface header */}
            <div className="flex items-center justify-between border-b border-[var(--border)] pb-5">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                  Match profile
                </p>

                <h3 className="theme-text-primary mt-1 font-semibold">
                  Your study preferences
                </h3>
              </div>

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-violet-500/10 text-sm text-violet-300">
                ✦
              </div>
            </div>

            {/* Preference matrix */}
            <div className="mt-5 space-y-3">
              {preferences.map((preference) => (
                <div
                  key={preference.label}
                  className="flex items-center justify-between gap-4 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3"
                >
                  <span className="text-xs text-[var(--text-muted)]">
                    {preference.label}
                  </span>

                  <span className="text-right text-sm font-medium text-[var(--text-primary)]">
                    {preference.value}
                  </span>
                </div>
              ))}
            </div>

            {/* Match results */}
            <div className="mt-6">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[var(--text-primary)]">
                  Compatible students
                </p>

                <span className="text-xs text-cyan-400">
                  Live preview
                </span>
              </div>

              <div className="mt-3 space-y-3">
                {matches.map((match, index) => (
                  <div
                    key={match.name}
                    className="group flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-3 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:shadow-lg hover:shadow-violet-500/5"
                    style={{
                      animationDelay: `${index * 120}ms`,
                    }}
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-xs font-bold text-violet-300 ring-1 ring-white/5">
                      {match.initials}
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-semibold text-[var(--text-primary)]">
                        {match.name}
                      </p>

                      <p className="mt-0.5 truncate text-xs text-[var(--text-muted)]">
                        {match.subject}
                      </p>
                    </div>

                    <div className="text-right">
                      <p className="text-sm font-bold text-emerald-400">
                        {match.score}%
                      </p>

                      <p className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
                        compatibility
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Matching status */}
            <div className="mt-5 flex items-center gap-3 rounded-2xl border border-cyan-400/10 bg-cyan-400/5 px-4 py-3">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-60" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-cyan-400" />
              </span>

              <p className="text-xs text-cyan-300">
                Finding compatible study partners
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}