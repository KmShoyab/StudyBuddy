const studyModes = [
  {
    number: "01",
    icon: "◉",
    title: "Focus Study",
    description:
      "Stay accountable while working through your own study plan alongside compatible students.",
    tag: "Deep focus",
    accent:
      "from-violet-500/20 via-violet-500/5 to-transparent",
  },
  {
    number: "02",
    icon: "◎",
    title: "Group Study",
    description:
      "Build focused study groups around shared subjects, courses, projects, or academic goals.",
    tag: "Collaborative",
    accent:
      "from-blue-500/20 via-blue-500/5 to-transparent",
  },
  {
    number: "03",
    icon: "△",
    title: "Exam Preparation",
    description:
      "Connect with students preparing for the same exams and turn preparation into a shared mission.",
    tag: "Exam ready",
    accent:
      "from-cyan-500/20 via-cyan-500/5 to-transparent",
  },
  {
    number: "04",
    icon: "✦",
    title: "Peer Learning",
    description:
      "Exchange knowledge, explain difficult concepts, and learn faster through meaningful peer interaction.",
    tag: "Learn together",
    accent:
      "from-pink-500/20 via-pink-500/5 to-transparent",
  },
];

export default function StudyModes() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      {/* Ambient visual field */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[150px]" />

      {/* Section introduction */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Study your way
        </p>

        <h2 className="theme-text-primary mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          One platform.
          <br />
          <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            Different ways to learn.
          </span>
        </h2>

        <p className="theme-text-secondary mt-5 text-base leading-8 sm:text-lg">
          Whether you need deep focus, collaborative learning, or exam
          preparation, StudyBuddy adapts to the way you want to study.
        </p>
      </div>

      {/* Study mode matrix */}
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {studyModes.map((mode, index) => (
          <article
            key={mode.number}
            className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/70 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/20 hover:shadow-2xl hover:shadow-violet-500/10 sm:p-8"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Dynamic illumination layer */}
            <div
              className={`pointer-events-none absolute -right-24 -top-24 h-64 w-64 rounded-full bg-gradient-to-br ${mode.accent} blur-3xl transition-transform duration-700 group-hover:scale-150`}
            />

            {/* Metadata */}
            <div className="relative flex items-center justify-between">
              <span className="text-xs font-bold tracking-[0.2em] text-[var(--text-muted)]">
                {mode.number}
              </span>

              <span className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-1 text-[10px] font-medium uppercase tracking-wider text-[var(--text-muted)]">
                {mode.tag}
              </span>
            </div>

            {/* Icon */}
            <div className="relative mt-8 flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] text-xl text-violet-300 shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
              {mode.icon}
            </div>

            {/* Content */}
            <div className="relative mt-7">
              <h3 className="theme-text-primary text-2xl font-semibold">
                {mode.title}
              </h3>

              <p className="theme-text-secondary mt-3 max-w-xl text-sm leading-7">
                {mode.description}
              </p>
            </div>

            {/* Interaction affordance */}
            <div className="relative mt-8 flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] transition-colors duration-300 group-hover:text-violet-300">
              <span>Explore study mode</span>

              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </div>

            {/* Lower edge illumination */}
            <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </section>
  );
}