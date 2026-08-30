import Navbar from "@/components/Navbar";
import Button from "@/components/Button";
import TrustStats from "@/components/TrustStats";
import WhyStudyBuddy from "@/components/WhyStudyBuddy";
export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero */}
      <section className="relative mx-auto flex min-h-screen max-w-7xl items-center justify-center overflow-hidden px-6 pb-20 pt-36 text-center">
        {/* Main glow */}
        <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[140px]" />

        {/* Secondary glow */}
        <div className="pointer-events-none absolute left-[20%] top-[20%] -z-10 h-[250px] w-[250px] rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="max-w-4xl">
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-200">
            <span className="h-2 w-2 rounded-full bg-violet-400 shadow-lg shadow-violet-400/80" />
            Built for better learning
          </div>

          {/* Heading */}
          <h1 className="theme-text-primary text-5xl font-extrabold leading-tight tracking-tight sm:text-6xl md:text-7xl">
            Find your people.
            <br />
            <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Learn together.
            </span>
          </h1>

          {/* Description */}
          <p className="theme-text-secondary mx-auto mt-7 max-w-2xl text-base leading-8 sm:text-lg">
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

      {/* Trust Stats */}
      <TrustStats />
      <WhyStudyBuddy />
    </main>
  );
}
