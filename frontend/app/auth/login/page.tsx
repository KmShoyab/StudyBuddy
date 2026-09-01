import Link from "next/link";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-4 py-12 sm:px-6">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[350px] w-[350px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[120px] sm:h-[500px] sm:w-[500px] sm:blur-[150px]" />

      {/* Secondary glow */}
      <div className="pointer-events-none absolute left-0 top-0 -z-10 h-64 w-64 rounded-full bg-blue-500/5 blur-[100px]" />

      {/* Authentication card */}
      <div className="relative w-full max-w-md">
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

        {/* Card */}
        <div className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8">
          {/* Heading */}
          <div className="text-center">
            <h1 className="theme-text-primary text-3xl font-bold tracking-tight">
              Welcome back
            </h1>

            <p className="theme-text-secondary mt-3 text-sm leading-6">
              Sign in to continue your StudyBuddy journey.
            </p>
          </div>

          {/* Login form */}
          <form className="mt-8 space-y-5">
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

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-[var(--text-primary)]"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="text-xs font-medium text-violet-400 transition-colors hover:text-violet-300"
                >
                  Forgot password?
                </button>
              </div>

              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                placeholder="Enter your password"
                className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 text-sm text-[var(--text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--text-muted)] focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/10"
              />
            </div>

            {/* Remember me */}
            <div className="flex items-center gap-3">
              <input
                id="remember"
                name="remember"
                type="checkbox"
                className="h-4 w-4 rounded border-[var(--border-strong)] bg-[var(--surface-soft)] accent-violet-500"
              />

              <label
                htmlFor="remember"
                className="text-sm text-[var(--text-secondary)]"
              >
                Remember me
              </label>
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="group flex h-12 w-full items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 active:translate-y-0"
            >
              Sign in

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

          {/* Google login */}
          <button
            type="button"
            className="flex h-12 w-full items-center justify-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-5 text-sm font-medium text-[var(--text-primary)] transition-all duration-300 hover:border-violet-400/30 hover:bg-[var(--surface-elevated)]"
          >
            <span className="text-base font-bold">G</span>
            Continue with Google
          </button>

          {/* Register */}
          <p className="mt-7 text-center text-sm text-[var(--text-muted)]">
            Don't have an account?{" "}
            <Link
              href="/auth/register"
              className="font-medium text-violet-400 transition-colors hover:text-violet-300"
            >
              Create one
            </Link>
          </p>
        </div>

        {/* Back to website */}
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