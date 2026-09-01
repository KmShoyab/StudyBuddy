const features = [
  {
    icon: "👥",
    title: "Study Groups",
    description:
      "Create or join focused study groups around subjects, courses, exams, and shared academic goals.",
    size: "large",
    accent: "violet",
  },
  {
    icon: "📚",
    title: "Shared Resources",
    description:
      "Keep notes, links, documents, and useful learning materials organized in one collaborative space.",
    size: "small",
    accent: "cyan",
  },
  {
    icon: "⏱️",
    title: "Study Sessions",
    description:
      "Plan focused sessions and build consistent study habits with your partners.",
    size: "small",
    accent: "blue",
  },
  {
    icon: "📈",
    title: "Progress Tracking",
    description:
      "Track your learning activity, completed goals, and study consistency over time.",
    size: "small",
    accent: "emerald",
  },
  {
    icon: "💬",
    title: "Collaboration",
    description:
      "Communicate with your study partners and keep academic conversations connected to your learning journey.",
    size: "large",
    accent: "pink",
  },
];

const accentStyles = {
  violet: "from-violet-500/20 via-violet-500/5 to-transparent",
  cyan: "from-cyan-500/20 via-cyan-500/5 to-transparent",
  blue: "from-blue-500/20 via-blue-500/5 to-transparent",
  emerald: "from-emerald-500/20 via-emerald-500/5 to-transparent",
  pink: "from-pink-500/20 via-pink-500/5 to-transparent",
};

export default function FeatureShowcase() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      {/* Atmospheric visual layer */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-500/5 blur-[150px]" />

      {/* Section introduction */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-400">
          Everything in one place
        </p>

        <h2 className="theme-text-primary mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Built around the way{" "}
          <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            students actually study.
          </span>
        </h2>

        <p className="theme-text-secondary mt-5 text-base leading-8 sm:text-lg">
          StudyBuddy brings discovery, collaboration, organization, and
          accountability into one focused learning experience.
        </p>
      </div>

      {/* Capability matrix */}
      <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => {
          const isLarge = feature.size === "large";

          return (
            <div
              key={feature.title}
              className={`group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/70 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/20 hover:shadow-2xl hover:shadow-violet-500/10 ${
                isLarge ? "md:col-span-2" : "md:col-span-1"
              }`}
              style={{
                animationDelay: `${index * 100}ms`,
              }}
            >
              {/* Dynamic illumination */}
              <div
                className={`pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-gradient-to-br ${
                  accentStyles[feature.accent as keyof typeof accentStyles]
                } blur-3xl transition-transform duration-700 group-hover:scale-150`}
              />

              {/* Feature icon */}
              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] text-2xl shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-3">
                {feature.icon}
              </div>

              {/* Feature content */}
              <div className="relative mt-8">
                <h3 className="theme-text-primary text-xl font-semibold">
                  {feature.title}
                </h3>

                <p className="theme-text-secondary mt-3 max-w-lg text-sm leading-7">
                  {feature.description}
                </p>
              </div>

              {/* Interaction indicator */}
              <div className="relative mt-8 flex items-center gap-2 text-xs font-medium text-[var(--text-muted)] transition-colors duration-300 group-hover:text-violet-300">
                <span>Explore capability</span>

                <span className="transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </div>

              {/* Edge illumination */}
              <div className="pointer-events-none absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </div>
          );
        })}
      </div>
    </section>
  );
}