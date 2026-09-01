import Link from "next/link";

export default function RegisterPage() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-12 sm:px-6">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[120px] sm:h-[550px] sm:w-[550px] sm:blur-[150px]" />

      <div className="pointer-events-none absolute right-0 top-0 -z-10 h-72 w-72 rounded-full bg-cyan-500/5 blur-[120px]" />

      <div className="relative w-full max-w-lg">
        {/* Brand */}
        <div className="mb-8 flex justify-center">
          <Link
            href="/"
            className="group inline-flex items-center gap-3"
          >
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-105">
              <div className="absolute h-4 w-4 rounded-full border-2 border-white/90" />
              <div className="absolute h-1.5 w-1.5 rounded-full bg-white" />
            </div>

            <span className="theme-text-primary text-xl font-bold tracking-tight">
              StudyBuddy
            </span>
          </Link>
        </div>

        {/* Registration card */}
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8">
          {/* Heading */}
          <div className="text-center">
            <div className="mx-auto mb-4 inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300">
              Start your StudyBuddy profile
            </div>

            <h1 className="theme-text-primary text-3xl font-bold tracking-tight">
              Create your account
            </h1>

            <p className="theme-text-secondary mt-3 text-sm leading-6">
              Tell us a little about yourself so we can build a better
              learning experience for you.
            </p>
          </div>

          {/* Registration form */}
          <form className="mt-8 space-y-5">
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
              >
                Full name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                autoComplete="name"
                placeholder="Your full name"
                className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm text-[var(--text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--text-muted)] focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
              >
                Email address
              </label>

              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm text-[var(--text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--text-muted)] focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* Password row */}
            <div className="grid gap-5 sm:grid-cols-2">
              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                >
                  Password
                </label>

                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Create password"
                  className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm text-[var(--text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--text-muted)] focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              {/* Confirm password */}
              <div>
                <label
                  htmlFor="confirmPassword"
                  className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
                >
                  Confirm password
                </label>

                <input
                  id="confirmPassword"
                  name="confirmPassword"
                  type="password"
                  autoComplete="new-password"
                  placeholder="Repeat password"
                  className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm text-[var(--text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--text-muted)] focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>
            </div>

            {/* University */}
            <div>
              <label
                htmlFor="university"
                className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
              >
                University / Institution
              </label>

              <input
                id="university"
                name="university"
                type="text"
                placeholder="Your university or institution"
                className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm text-[var(--text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--text-muted)] focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* Department */}
            <div>
              <label
                htmlFor="department"
                className="mb-2 block text-sm font-medium text-[var(--text-primary)]"
              >
                Department / Field
              </label>

              <input
                id="department"
                name="department"
                type="text"
                placeholder="e.g. Computer Science"
                className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm text-[var(--text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--text-muted)] focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3 pt-1">
              <input
                id="terms"
                name="terms"
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-[var(--border-strong)] bg-[var(--surface-soft)] accent-violet-500"
              />

              <label
                htmlFor="terms"
                className="text-xs leading-5 text-[var(--text-muted)]"
              >
                I agree to the StudyBuddy{" "}
                <a
                  href="#"
                  className="text-violet-400 transition-colors hover:text-violet-300"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-violet-400 transition-colors hover:text-violet-300"
                >
                  Privacy Policy
                </a>
                .
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 active:translate-y-0"
            >
              Create account

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-[var(--border)]" />

            <span className="text-xs text-[var(--text-muted)]">
              OR
            </span>

            <div className="h-px flex-1 bg-[var(--border)]" />
          </div>

          {/* Google */}
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-5 text-sm font-medium text-[var(--text-primary)] transition-all duration-300 hover:border-violet-400/30 hover:bg-[var(--surface-elevated)]"
          >
            <span className="text-base font-bold">G</span>

            Continue with Google
          </button>

          {/* Login */}
          <p className="mt-7 text-center text-sm text-[var(--text-muted)]">
            Already have an account?{" "}
            <Link
              href="/auth/login"
              className="font-medium text-violet-400 transition-colors hover:text-violet-300"
            >
              Sign in
            </Link>
          </p>
        </div>

        {/* Back */}
        <div className="mt-6 text-center">
          <Link
            href="/"
            className="text-xs text-[var(--text-muted)] transition-colors hover:text-[var(--text-secondary)]"
          >
            ← Back to StudyBuddy
          </Link>
        </div>
      </div>
    </main>
  );
}