const testimonials = [
  {
    quote:
      "StudyBuddy changed the way I prepare for exams. Finding people with the same goals made studying feel much less overwhelming.",
    name: "Abid Abdullah",
    role: "Computer Science Student",
    initials: "AA",
    rating: 5,
  },
  {
    quote:
      "I used to study alone almost every day. Now I have a small group that keeps me motivated and accountable.",
    name: "Fahim islam Rahat",
    role: "Software Engineering Student",
    initials: "FR",
    rating: 5,
  },
  {
    quote:
      "The idea is simple, but it solves a real problem. Finding students with compatible schedules is much easier now.",
    name: "Mahbuba Akhi",
    role: "Information Systems Student",
    initials: "MA",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-24">
      {/* Atmospheric trust layer */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[450px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-[150px]" />

      {/* Section introduction */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400">
          Student experience
        </p>

        <h2 className="theme-text-primary mt-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
          Better studying starts with{" "}
          <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
            better people.
          </span>
        </h2>

        <p className="theme-text-secondary mt-5 text-base leading-8 sm:text-lg">
          A learning community becomes valuable when the people inside it
          actually help each other grow.
        </p>
      </div>

      {/* Trust metrics */}
      <div className="mx-auto mt-10 flex w-fit flex-col items-center justify-center gap-3 rounded-full border border-[var(--border)] bg-[var(--surface)]/70 px-5 py-3 backdrop-blur-xl sm:flex-row">
        <div className="flex items-center gap-1 text-sm">
          <span className="text-amber-300">★★★★★</span>
          <span className="theme-text-primary ml-1 font-semibold">
            4.9/5
          </span>
        </div>

        <span className="hidden h-4 w-px bg-[var(--border)] sm:block" />

        <span className="text-xs text-[var(--text-muted)]">
          Designed around student collaboration
        </span>
      </div>

      {/* Testimonial matrix */}
      <div className="mt-14 grid gap-5 lg:grid-cols-3">
        {testimonials.map((testimonial, index) => (
          <article
            key={testimonial.name}
            className="group relative overflow-hidden rounded-[2rem] border border-[var(--border)] bg-[var(--surface)]/70 p-7 backdrop-blur-xl transition-all duration-500 hover:-translate-y-2 hover:border-violet-400/20 hover:shadow-2xl hover:shadow-violet-500/10"
            style={{
              animationDelay: `${index * 120}ms`,
            }}
          >
            {/* Card illumination */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl transition-transform duration-700 group-hover:scale-150" />

            {/* Rating */}
            <div className="relative flex items-center justify-between">
              <div className="flex gap-1 text-xs text-amber-300">
                {"★".repeat(testimonial.rating)}
              </div>

              <span className="text-xs text-[var(--text-muted)]">
                Verified experience
              </span>
            </div>

            {/* Quote */}
            <blockquote className="relative mt-7">
              <span className="absolute -left-1 -top-5 text-5xl font-serif text-violet-400/20">
                “
              </span>

              <p className="theme-text-secondary relative text-sm leading-7">
                {testimonial.quote}
              </p>
            </blockquote>

            {/* Student identity */}
            <div className="relative mt-8 flex items-center gap-3 border-t border-[var(--border)] pt-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-xs font-bold text-violet-300 ring-1 ring-white/5">
                {testimonial.initials}
              </div>

              <div>
                <p className="theme-text-primary text-sm font-semibold">
                  {testimonial.name}
                </p>

                <p className="mt-0.5 text-xs text-[var(--text-muted)]">
                  {testimonial.role}
                </p>
              </div>
            </div>

            {/* Interaction accent */}
            <div className="pointer-events-none absolute inset-x-10 bottom-0 h-px bg-gradient-to-r from-transparent via-violet-400/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </article>
        ))}
      </div>
    </section>
  );
}