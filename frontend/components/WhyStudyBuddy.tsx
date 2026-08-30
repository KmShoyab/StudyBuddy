const benefits = [
  {
    icon: "🎯",
    title: "Smart Matching",
    description:
      "Find study partners based on your subjects, schedule, learning style, and goals.",
    gradient: "from-violet-500/20 to-blue-500/10",
  },
  {
    icon: "🧠",
    title: "Better Learning",
    description:
      "Turn solo study sessions into focused learning experiences with people who understand your goals.",
    gradient: "from-blue-500/20 to-cyan-500/10",
  },
  {
    icon: "🤝",
    title: "Real Support",
    description:
      "Stay motivated, exchange ideas, solve problems, and keep each other accountable.",
    gradient: "from-cyan-500/20 to-violet-500/10",
  },
];

export default function WhyStudyBuddy() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[140px]" />

      {/* Section heading */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
          Why StudyBuddy?
        </p>

        <h2 className="theme-text-primary mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Studying is better{" "}
          <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            together.
          </span>
        </h2>

        <p className="theme-text-secondary mt-5 text-base leading-8 sm:text-lg">
          You don't have to study alone. StudyBuddy helps you find the right
          people and create better learning experiences.
        </p>
      </div>

      {/* Benefit cards */}
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {benefits.map((benefit, index) => (
          <div
            key={benefit.title}
            className="group relative overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]/70 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/20 hover:shadow-2xl hover:shadow-violet-500/10"
            style={{
              animationDelay: `${index * 100}ms`,
            }}
          >
            {/* Card glow */}
            <div
              className={`pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${benefit.gradient} blur-3xl transition-transform duration-500 group-hover:scale-150`}
            />

            {/* Icon */}
            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] text-2xl shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              {benefit.icon}
            </div>

            {/* Content */}
            <div className="relative mt-7">
              <h3 className="theme-text-primary text-xl font-semibold">
                {benefit.title}
              </h3>

              <p className="theme-text-secondary mt-3 text-sm leading-7">
                {benefit.description}
              </p>
            </div>

            {/* Bottom accent */}
            <div className="relative mt-7 h-px w-0 bg-gradient-to-r from-violet-400 to-cyan-300 transition-all duration-500 group-hover:w-full" />
          </div>
        ))}
      </div>
    </section>
  );
}