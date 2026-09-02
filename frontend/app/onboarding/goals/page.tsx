"use client";

import { useState } from "react";
import Link from "next/link";

const goals = [
  {
    id: "exam",
    title: "Prepare for exams",
    description: "Find someone to revise, practice, and prepare with.",
    icon: "◇",
  },
  {
    id: "assignment",
    title: "Work on assignments",
    description: "Collaborate with someone on coursework and projects.",
    icon: "◫",
  },
  {
    id: "learn",
    title: "Learn something new",
    description: "Explore a topic and learn alongside another student.",
    icon: "✦",
  },
  {
    id: "accountability",
    title: "Stay accountable",
    description: "Keep each other focused and consistent.",
    icon: "◎",
  },
  {
    id: "discussion",
    title: "Discuss ideas",
    description: "Exchange knowledge and understand difficult concepts.",
    icon: "◌",
  },
  {
    id: "community",
    title: "Build a study community",
    description: "Meet students and build meaningful academic connections.",
    icon: "♢",
  },
];

const commitmentLevels = [
  {
    id: "casual",
    title: "Casual",
    description: "I study when I have time.",
  },
  {
    id: "regular",
    title: "Regular",
    description: "I want a consistent study routine.",
  },
  {
    id: "serious",
    title: "Serious",
    description: "I want someone who is highly committed.",
  },
];

export default function GoalsPage() {
  const [selectedGoals, setSelectedGoals] = useState<string[]>([]);
  const [commitment, setCommitment] = useState("");

  const toggleGoal = (goal: string) => {
    setSelectedGoals((current) => {
      if (current.includes(goal)) {
        return current.filter((item) => item !== goal);
      }

      if (current.length >= 3) {
        return current;
      }

      return [...current, goal];
    });
  };

  const isComplete = selectedGoals.length > 0 && commitment !== "";

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-10 sm:px-6 sm:py-14">
      {/* Ambient background */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[450px] w-[750px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[160px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[130px]" />

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
            Step 4 of 4
          </span>
        </div>

        {/* Progress */}
        <div className="mb-10">
          <div className="h-1.5 overflow-hidden rounded-full bg-[var(--surface-soft)]">
            <div className="h-full w-full rounded-full bg-gradient-to-r from-violet-500 via-blue-500 to-cyan-400" />
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <span className="inline-flex rounded-full border border-violet-400/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-300">
            One final step
          </span>

          <h1 className="theme-text-primary mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            What do you want to achieve?
          </h1>

          <p className="theme-text-secondary mt-3 max-w-2xl text-sm leading-7 sm:text-base">
            Your goals help StudyBuddy understand what kind of partner you
            need and what you want to accomplish together.
          </p>
        </div>

        {/* Main card */}
        <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8">
          <div className="space-y-10">
            {/* Goals */}
            <div>
              <div className="mb-5 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h2 className="text-base font-semibold text-[var(--text-primary)]">
                    Your study goals
                  </h2>

                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    Select up to 3 things that matter most to you.
                  </p>
                </div>

                <span className="text-xs font-medium text-violet-400">
                  {selectedGoals.length} / 3 selected
                </span>
              </div>

              {/* Goal cards */}
              <div className="grid gap-3 sm:grid-cols-2">
                {goals.map((goal) => {
                  const selected = selectedGoals.includes(goal.id);
                  const disabled =
                    !selected && selectedGoals.length >= 3;

                  return (
                    <button
                      key={goal.id}
                      type="button"
                      onClick={() => toggleGoal(goal.id)}
                      disabled={disabled}
                      className={`group relative rounded-2xl border p-5 text-left transition-all duration-300 ${
                        selected
                          ? "border-violet-400/50 bg-violet-500/10 shadow-lg shadow-violet-500/10"
                          : "border-[var(--border)] bg-[var(--surface-soft)] hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-[var(--surface-elevated)]"
                      } ${
                        disabled
                          ? "cursor-not-allowed opacity-40 hover:translate-y-0"
                          : ""
                      }`}
                    >
                      <div className="flex items-start justify-between gap-4">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg transition-all duration-300 ${
                            selected
                              ? "bg-violet-500 text-white shadow-lg shadow-violet-500/30"
                              : "bg-[var(--surface-elevated)] text-[var(--text-secondary)] group-hover:text-violet-300"
                          }`}
                        >
                          {goal.icon}
                        </div>

                        <span
                          className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs transition-all duration-300 ${
                            selected
                              ? "border-violet-400 bg-violet-500 text-white"
                              : "border-[var(--border-strong)] text-transparent"
                          }`}
                        >
                          ✓
                        </span>
                      </div>

                      <h3 className="mt-4 text-sm font-semibold text-[var(--text-primary)]">
                        {goal.title}
                      </h3>

                      <p className="mt-2 text-xs leading-5 text-[var(--text-muted)]">
                        {goal.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Commitment */}
            <div>
              <div className="mb-5">
                <h2 className="text-base font-semibold text-[var(--text-primary)]">
                  How committed are you?
                </h2>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  This helps us match you with students who have a similar
                  level of commitment.
                </p>
              </div>

              <div className="grid gap-3 md:grid-cols-3">
                {commitmentLevels.map((level) => {
                  const selected = commitment === level.id;

                  return (
                    <button
                      key={level.id}
                      type="button"
                      onClick={() => setCommitment(level.id)}
                      className={`rounded-2xl border p-5 text-left transition-all duration-300 ${
                        selected
                          ? "border-cyan-400/50 bg-cyan-500/10 shadow-lg shadow-cyan-500/10"
                          : "border-[var(--border)] bg-[var(--surface-soft)] hover:-translate-y-0.5 hover:border-cyan-400/30 hover:bg-[var(--surface-elevated)]"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                          {level.title}
                        </h3>

                        <span
                          className={`flex h-6 w-6 items-center justify-center rounded-full border text-xs transition-all duration-300 ${
                            selected
                              ? "border-cyan-400 bg-cyan-500 text-white"
                              : "border-[var(--border-strong)] text-transparent"
                          }`}
                        >
                          ✓
                        </span>
                      </div>

                      <p className="mt-2 text-xs leading-5 text-[var(--text-muted)]">
                        {level.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Compatibility preview */}
            {isComplete && (
              <div className="relative overflow-hidden rounded-2xl border border-violet-400/20 bg-gradient-to-br from-violet-500/10 via-blue-500/5 to-cyan-500/5 p-5">
                <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-violet-500/10 blur-3xl" />

                <div className="relative flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-violet-500 to-blue-500 text-white shadow-lg shadow-violet-500/20">
                    ✦
                  </div>

                  <div>
                    <h3 className="text-sm font-semibold text-[var(--text-primary)]">
                      Your StudyBuddy profile is taking shape
                    </h3>

                    <p className="mt-1 text-xs leading-6 text-[var(--text-muted)]">
                      We&apos;ll combine your academic interests, study habits,
                      availability, goals, and commitment level to identify
                      compatible study partners.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="flex flex-col-reverse gap-3 border-t border-[var(--border)] pt-7 sm:flex-row sm:items-center sm:justify-between">
              <Link
                href="/onboarding/preferences"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-[var(--border)] px-5 text-sm font-medium text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
              >
                Back
              </Link>

              <button
                type="button"
                disabled={!isComplete}
                className="group inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 via-blue-600 to-cyan-500 px-7 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
              >
                Complete Profile

                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </button>
            </div>
          </div>
        </section>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs leading-5 text-[var(--text-muted)]">
          You can change your goals and preferences later from your profile.
        </p>
      </div>
    </main>
  );
}