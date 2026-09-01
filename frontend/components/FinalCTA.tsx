export default function FinalCTA() {
  return (
    <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-24">
      {/* Main atmospheric glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[420px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[140px]" />

      {/* CTA container */}
      <div className="relative overflow-hidden rounded-[2.5rem] border border-violet-400/20 bg-[var(--surface)]/80 px-6 py-16 text-center shadow-2xl shadow-violet-500/10 backdrop-blur-2xl sm:px-10 sm:py-20">
        {/* Decorative glows */}
        <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500/15 blur-3xl" />

        <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl" />

        {/* Decorative grid */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.025]">
          <div
            className="h-full w-full"
            style={{
              backgroundImage:
                "linear-gradient(var(--foreground) 1px, transparent 1px), linear-gradient(90deg, var(--foreground) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-3xl">
          {/* Badge */}
          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-300">
            <span className="h-2 w-2 rounded-full bg-violet-400 shadow-lg shadow-violet-400/80" />

            Your next study session starts here
          </div>

          {/* Heading */}
          <h2 className="theme-text-primary mt-7 text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            Stop studying alone.
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Find your people.
            </span>
          </h2>

          {/* Description */}
          <p className="theme-text-secondary mx-auto mt-6 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8">
            Find students who share your subjects, schedule, goals, and
            learning style. Build meaningful connections and make studying
            better together.
          </p>

          {/* Actions */}
          <div className="mt-9 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <button
              type="button"
              className="group inline-flex min-h-12 w-full items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-7 py-3 text-sm font-semibold text-white shadow-xl shadow-violet-500/20 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-violet-500/30 active:translate-y-0 sm:w-auto"
            >
              Find My StudyBuddy

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>

            <button
              type="button"
              className="min-h-12 w-full rounded-full border border-[var(--border-strong)] bg-[var(--surface-soft)] px-7 py-3 text-sm font-medium text-[var(--text-secondary)] transition-all duration-300 hover:border-violet-400/20 hover:bg-[var(--surface-elevated)] hover:text-[var(--text-primary)] sm:w-auto"
            >
              Explore StudyBuddy
            </button>
          </div>

          {/* Trust statement */}
          <div className="mt-8 flex flex-col items-center justify-center gap-2 text-xs text-[var(--text-muted)] sm:flex-row sm:gap-4">
            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              Built for students
            </span>

            <span className="hidden h-3 w-px bg-[var(--border)] sm:block" />

            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              Focused on meaningful connections
            </span>

            <span className="hidden h-3 w-px bg-[var(--border)] sm:block" />

            <span className="flex items-center gap-2">
              <span className="text-emerald-400">✓</span>
              Designed for better learning
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}