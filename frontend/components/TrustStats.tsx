export default function TrustStats() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 pb-24">
      <div className="relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]/70 p-8 backdrop-blur-xl sm:p-10">

        {/* Background glow */}
        <div className="pointer-events-none absolute left-1/2 top-0 h-40 w-72 -translate-x-1/2 rounded-full bg-violet-500/10 blur-3xl" />

        {/* Heading */}
        <div className="relative text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-violet-400">
            Built for better learning
          </p>

          <p className="theme-text-secondary mx-auto mt-3 max-w-xl text-sm leading-7 sm:text-base">
            StudyBuddy helps students find the right people to learn,
            collaborate, and grow with.
          </p>
        </div>

        {/* Stats */}
        <div className="relative mt-10 grid grid-cols-1 divide-y divide-[var(--border)] sm:grid-cols-3 sm:divide-x sm:divide-y-0">

          {/* Stat 1 */}
          <div className="px-4 py-6 text-center">
            <p className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              10K+
            </p>

            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Students
            </p>
          </div>

          {/* Stat 2 */}
          <div className="px-4 py-6 text-center">
            <p className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              50+
            </p>

            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Study communities
            </p>
          </div>

          {/* Stat 3 */}
          <div className="px-4 py-6 text-center">
            <p className="text-3xl font-extrabold tracking-tight text-[var(--text-primary)] sm:text-4xl">
              95%
            </p>

            <p className="mt-2 text-sm text-[var(--text-muted)]">
              Better matching
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}