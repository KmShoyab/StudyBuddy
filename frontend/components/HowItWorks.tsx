const steps = [
  {
    number: "01",
    icon: "👤",
    title: "Create your profile",
    description:
      "Tell StudyBuddy what you study, when you study, your learning style, and what you want to achieve.",
  },
  {
    number: "02",
    icon: "🎯",
    title: "Find your match",
    description:
      "Our matching system looks at your preferences and helps you discover students who fit your study needs.",
  },
  {
    number: "03",
    icon: "🤝",
    title: "Study together",
    description:
      "Connect with your study partners, plan sessions, share knowledge, and keep each other motivated.",
  },
];

export default function HowItWorks() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-500/5 blur-[150px]" />

      {/* Heading */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-400">
          How it works
        </p>

        <h2 className="theme-text-primary mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          From studying alone to{" "}
          <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            learning together.
          </span>
        </h2>

        <p className="theme-text-secondary mt-5 text-base leading-8 sm:text-lg">
          Getting started is simple. Create your profile, find compatible
          students, and start learning together.
        </p>
      </div>

      {/* Steps */}
      <div className="relative mt-16">
        {/* Connection line */}
        <div className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-8 hidden h-px bg-gradient-to-r from-violet-500/0 via-violet-400/40 to-cyan-400/0 md:block" />

        <div className="grid gap-10 md:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={step.number}
              className="group relative text-center"
              style={{
                animationDelay: `${index * 150}ms`,
              }}
            >
              {/* Step icon */}
              <div className="relative mx-auto flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] text-2xl shadow-xl shadow-black/5 transition-all duration-500 group-hover:-translate-y-2 group-hover:border-violet-400/30 group-hover:shadow-violet-500/10">
                {step.icon}

                {/* Number */}
                <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10 text-[10px] font-bold text-violet-300 backdrop-blur-xl">
                  {step.number}
                </span>
              </div>

              {/* Content */}
              <div className="mt-7">
                <h3 className="theme-text-primary text-xl font-semibold">
                  {step.title}
                </h3>

                <p className="theme-text-secondary mx-auto mt-3 max-w-sm text-sm leading-7">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}