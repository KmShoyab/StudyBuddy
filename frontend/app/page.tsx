import Button from "@/components/Button";
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/20">
            ✦
          </span>

          <span className="text-lg font-semibold tracking-tight">
            StudyBuddy
          </span>
        </a>

        {/* Navigation links */}
        <div className="hidden items-center gap-8 text-sm text-zinc-400 md:flex">
          <a href="#features" className="transition hover:text-white">
            Features
          </a>

          <a href="#how-it-works" className="transition hover:text-white">
            How it works
          </a>

          <a href="#about" className="transition hover:text-white">
            About
          </a>
        </div>

        {/* CTA */}
        <button className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm font-medium transition hover:border-violet-400/30 hover:bg-white/10">
          Sign in
        </button>
      </nav>

      {/* Hero */}
      <section className="relative mx-auto flex min-h-[calc(100vh-100px)] max-w-7xl items-center justify-center overflow-hidden px-6 py-20 text-center">
        {/* Glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

        <div className="max-w-4xl">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
            <span className="h-2 w-2 rounded-full bg-violet-400 shadow-lg shadow-violet-400/80" />
            Built for better learning
          </div>

          {/* Heading */}
          <h1 className="text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Find your people.
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Learn together.
            </span>
          </h1>

          {/* Description */}
          <p className="mx-auto mt-7 max-w-2xl text-base leading-8 text-zinc-400 sm:text-lg">
            StudyBuddy helps students discover compatible study partners based
            on what they study, when they study, and how they learn.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button>
              Find My StudyBuddy
              <span className="ml-2">→</span>
            </Button>

            <Button variant="secondary">See How It Works</Button>
          </div>
        </div>
      </section>
    </main>
  );
}
