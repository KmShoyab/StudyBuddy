"use client";

import { useState } from "react";
import Link from "next/link";

const studyModes = [
  {
    id: "focused",
    title: "Deep Focus",
    description: "Quiet sessions with minimal distractions.",
    icon: "◉",
  },
  {
    id: "discussion",
    title: "Discussion",
    description: "Learn through questions, explanations, and conversation.",
    icon: "◌",
  },
  {
    id: "balanced",
    title: "Balanced",
    description: "A mix of focused work and active discussion.",
    icon: "◈",
  },
];

const sessionLengths = [
  "30–45 minutes",
  "45–60 minutes",
  "1–2 hours",
  "2+ hours",
];

const studyTimes = [
  "Early morning",
  "Morning",
  "Afternoon",
  "Evening",
  "Late night",
];

const groupSizes = [
  {
    id: "one",
    title: "1-on-1",
    description: "Just me and one StudyBuddy",
  },
  {
    id: "small",
    title: "Small group",
    description: "2–4 students",
  },
  {
    id: "large",
    title: "Larger group",
    description: "5+ students",
  },
];

export default function PreferencesPage() {
  const [studyMode, setStudyMode] = useState("");
  const [sessionLength, setSessionLength] = useState("");
  const [studyTime, setStudyTime] = useState("");
  const [groupSize, setGroupSize] = useState("");

  const isComplete =
    studyMode && sessionLength && studyTime && groupSize;

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-10 sm:px-6 sm:py-14">
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[450px] w-[750px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[160px]" />

      <div className="pointer-events-none absolute bottom-0 left-0 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[130px]" />

      <div className="mx-auto w-full max-w-4xl">
        {/* Header */}
        <div className="mb-10 flex items-center justify-between">
          <Link
            href="/"
            className="group inline-flex items-center gap-3"
          >
            <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 shadow-lg shadow-violet-500/20 transition-transform duration-300 group-hover:scale-105">
              <div className="absolute h-4 w-4 rounded-full border-2 border-white/90" />
              <div className="absolute h-1.5 w-1.5 rounded-full bg-white" />
            </div>

            <span className="theme-text-primary text-lg font-bold tracking-tight">
              StudyBuddy
            </span>
          </Link>

          <span className="text-xs font-medium text-[var(--text-muted)]">
            Step 3 of 4
          </span>
        </div>

        {/* Progress */}
        <div className="mb-10">
          <div className="h-1.5 overflow-hidden rounded-full bg-[var(--surface-soft)]">
            <div className="h-full w-3/4 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-500" />
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <span className="inline-flex rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-xs font-medium text-cyan-300">
            Your learning style
          </span>

          <h1 className="theme-text-primary mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            How do you like to study?
          </h1>

          <p className="theme-text-secondary mt-3 max-w-2xl text-sm leading-7 sm:text-base">
            Tell us how you prefer to learn. StudyBuddy will use these
            preferences to find students whose study habits work well with
            yours.
          </p>
        </div>

        {/* Main card */}
        <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8">
          <div className="space-y-10">
            {/* Study mode */}
            <div>
              <div className="mb-5">
                <h2 className="text-base font-semibold text-[var(--text-primary)]">
                  Preferred study style
                </h2>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  What kind of learning environment helps you most?
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {studyModes.map((mode) => {
                  const selected = studyMode === mode.id;

                  return (
                    <button
                      key={mode.id}
                      type="button"
                      onClick={() => setStudyMode(mode.id)}
                      className={`group rounded-2xl border p-5 text-left transition-all duration-300 ${
                        selected
                          ? "border-violet-400/50 bg-violet-500/10 shadow-lg shadow-violet-500/10"
                          : "border-[var(--border)] bg-[var(--surface-soft)] hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-[var(--surface-elevated)]"
                      }`}
                    >
                      <div
                        className={`mb-4 flex h-10 w-10 items-center justify-center rounded-xl text-lg transition-all duration-300 ${
                          selected
                            ? "bg-violet-500 text-white shadow-lg shadow-violet-500/30"
                            : "bg-[var(--surface-elevated)] text-[var(--text-secondary)] group-hover:text-violet-300"
                        }`}
                      >
                        {mode.icon}
                      </div>

                      <div className="flex items-center justify-between gap-2">
                        <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                          {mode.title}
                        </h3>

                        {selected && (
                          <span className="text-xs text-violet-300">
                            ✓
                          </span>
                        )}
                      </div>

                      <p className="mt-2 text-xs leading-5 text-[var(--text-muted)]">
                        {mode.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Session length */}
            <div>
              <div className="mb-5">
                <h2 className="text-base font-semibold text-[var(--text-primary)]">
                  Typical study session
                </h2>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  How long do you usually study at one time?
                </p>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {sessionLengths.map((length) => {
                  const selected = sessionLength === length;

                  return (
                    <button
                      key={length}
                      type="button"
                      onClick={() => setSessionLength(length)}
                      className={`rounded-xl border px-4 py-4 text-sm font-medium transition-all duration-300 ${
                        selected
                          ? "border-blue-400/50 bg-blue-500/10 text-blue-300 shadow-lg shadow-blue-500/10"
                          : "border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text-secondary)] hover:border-blue-400/30 hover:bg-[var(--surface-elevated)]"
                      }`}
                    >
                      <span className="flex items-center justify-between gap-3">
                        {length}

                        {selected && (
                          <span className="text-xs">
                            ✓
                          </span>
                        )}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Preferred time */}
            <div>
              <div className="mb-5">
                <h2 className="text-base font-semibold text-[var(--text-primary)]">
                  When do you study best?
                </h2>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Choose the time when you are usually most available.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                {studyTimes.map((time) => {
                  const selected = studyTime === time;

                  return (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setStudyTime(time)}
                      className={`rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                        selected
                          ? "border-cyan-400/50 bg-cyan-500/10 text-cyan-300 shadow-lg shadow-cyan-500/10"
                          : "border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text-secondary)] hover:border-cyan-400/30 hover:bg-[var(--surface-elevated)]"
                      }`}
                    >
                      {time}

                      {selected && (
                        <span className="ml-2 text-xs">
                          ✓
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Group size */}
            <div>
              <div className="mb-5">
                <h2 className="text-base font-semibold text-[var(--text-primary)]">
                  Ideal study group
                </h2>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  What size of study group feels comfortable to you?
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {groupSizes.map((group) => {
                  const selected = groupSize === group.id;

                  return (
                    <button
                      key={group.id}
                      type="button"
                      onClick={() => setGroupSize(group.id)}
                      className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                        selected
                          ? "border-violet-400/50 bg-violet-500/10 shadow-lg shadow-violet-500/10"
                          : "border-[var(--border)] bg-[var(--surface-soft)] hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-[var(--surface-elevated)]"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                          {group.title}
                        </h3>

                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs transition-all duration-300 ${
                            selected
                              ? "border-violet-400 bg-violet-500 text-white"
                              : "border-[var(--border-strong)] text-transparent"
                          }`}
                        >
                          ✓
                        </span>
                      </div>

                      <p className="mt-2 text-xs text-[var(--text-muted)]">
                        {group.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Summary */}
            {isComplete && (
              <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/5 p-5">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-500/10 text-sm text-emerald-400">
                    ✓
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-emerald-300">
                      Your study preferences are ready
                    </h3>

                    <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
                      These preferences will help StudyBuddy rank potential
                      study partners based on compatibility.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-[var(--border)] pt-7 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/onboarding/subjects"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-[var(--border)] px-5 text-sm font-medium text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
              >
                Back
              </Link>

              <button
                type="button"
                disabled={!isComplete}
                className="group inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
              >
                Continue

                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs leading-5 text-[var(--text-muted)]">
          You can update your study preferences anytime from your profile.
        </p>
      </div>
    </main>
  );
}