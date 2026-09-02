import Link from "next/link";

export default function ProfileOnboardingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 lg:px-8">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <header className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-3"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 shadow-lg shadow-violet-500/20">
              <div className="absolute h-4 w-4 rounded-full border-2 border-white/90" />
              <div className="absolute h-1.5 w-1.5 rounded-full bg-white" />
            </div>

            <span className="text-lg font-bold tracking-tight text-[var(--text-primary)]">
              StudyBuddy
            </span>
          </Link>

          <span className="text-sm text-[var(--text-muted)]">
            Step 1 of 3
          </span>
        </header>

        {/* Progress */}
        <div className="mt-8 h-1.5 w-full overflow-hidden rounded-full bg-[var(--surface-elevated)]">
          <div className="h-full w-1/3 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />
        </div>

        {/* Main content */}
        <section className="mx-auto mt-12 max-w-3xl">

          {/* Heading */}
          <div className="text-center">
            <div className="mx-auto mb-5 inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-xs font-medium text-violet-300">
              Let's get to know you
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-[var(--text-primary)] sm:text-5xl">
              Build your student profile
            </h1>

            <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-[var(--text-secondary)] sm:text-base">
              A few details will help StudyBuddy understand who you are
              and create better study connections for you.
            </p>
          </div>

          {/* Profile card */}
          <div className="mt-10 rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8">

            {/* Profile photo */}
            <div className="flex flex-col items-center border-b border-[var(--border)] pb-8 sm:flex-row sm:items-center sm:gap-6">

              <div className="flex h-24 w-24 items-center justify-center rounded-full border border-violet-400/20 bg-gradient-to-br from-violet-500/20 to-blue-500/20 text-3xl font-bold text-violet-300">
                +
              </div>

              <div className="mt-4 text-center sm:mt-0 sm:text-left">
                <h2 className="text-base font-semibold text-[var(--text-primary)]">
                  Add a profile photo
                </h2>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Help your future StudyBuddies recognize you.
                </p>

                <button
                  type="button"
                  className="mt-3 rounded-lg border border-[var(--border)] px-4 py-2 text-xs font-medium text-[var(--text-secondary)] transition-all duration-200 hover:border-violet-400/30 hover:text-violet-300"
                >
                  Upload photo
                </button>
              </div>

            </div>

            {/* Form */}
            <form className="mt-8 space-y-6">

              {/* Username */}
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                >
                  Username
                </label>

                <input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Choose a unique username"
                  className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm text-[var(--text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--text-muted)] focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/10"
                />

                <p className="mt-2 text-xs text-[var(--text-muted)]">
                  This will be visible to other students.
                </p>
              </div>

              {/* University + Department */}
              <div className="grid gap-6 md:grid-cols-2">

                <div>
                  <label
                    htmlFor="university"
                    className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                  >
                    University
                  </label>

                  <input
                    id="university"
                    name="university"
                    type="text"
                    placeholder="Your university"
                    className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm text-[var(--text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--text-muted)] focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/10"
                  />
                </div>

                <div>
                  <label
                    htmlFor="department"
                    className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                  >
                    Department
                  </label>

                  <input
                    id="department"
                    name="department"
                    type="text"
                    placeholder="e.g. Computer Science"
                    className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm text-[var(--text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--text-muted)] focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/10"
                  />
                </div>

              </div>

              {/* Academic level */}
              <div>
                <label
                  htmlFor="academicLevel"
                  className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                >
                  Academic level
                </label>

                <select
                  id="academicLevel"
                  name="academicLevel"
                  defaultValue=""
                  className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm text-[var(--text-primary)] outline-none transition-all duration-200 focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/10"
                >
                  <option value="" disabled>
                    Select your academic level
                  </option>

                  <option value="high-school">
                    High School
                  </option>

                  <option value="undergraduate">
                    Undergraduate
                  </option>

                  <option value="graduate">
                    Graduate
                  </option>

                  <option value="postgraduate">
                    Postgraduate
                  </option>

                  <option value="other">
                    Other
                  </option>
                </select>
              </div>

              {/* Short bio */}
              <div>
                <label
                  htmlFor="bio"
                  className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                >
                  About you
                </label>

                <textarea
                  id="bio"
                  name="bio"
                  rows={4}
                  placeholder="Tell your future StudyBuddies a little about yourself..."
                  className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm leading-6 text-[var(--text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--text-muted)] focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              {/* Navigation */}
              <div className="flex flex-col-reverse gap-3 border-t border-[var(--border)] pt-6 sm:flex-row sm:items-center sm:justify-between">

                <Link
                  href="/auth/register"
                  className="flex h-12 items-center justify-center rounded-xl border border-[var(--border)] px-6 text-sm font-medium text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--surface-elevated)] hover:text-[var(--text-primary)]"
                >
                  Back
                </Link>

                <button
                  type="submit"
                  className="group flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-7 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 active:translate-y-0"
                >
                  Continue

                  <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </button>

              </div>

            </form>
          </div>

          {/* Footer hint */}
          <p className="mt-6 text-center text-xs text-[var(--text-muted)]">
            You can update these details later from your profile settings.
          </p>

        </section>
      </div>
    </main>
  );
}
