"use client";

import { useState } from "react";
import Link from "next/link";

const subjects = [
  "Computer Science",
  "Programming",
  "Web Development",
  "Data Structures",
  "Algorithms",
  "Database Systems",
  "Software Engineering",
  "Artificial Intelligence",
  "Machine Learning",
  "Mathematics",
  "Physics",
  "Chemistry",
  "Statistics",
  "Theory of Computing",
  "Computer Networks",
  "Operating Systems",
  "Cybersecurity",
  "Cloud Computing",
  "Business",
  "Economics",
  "English",
  "Other",
];

export default function SubjectsPage() {
  const [selectedSubjects, setSelectedSubjects] = useState<string[]>([]);
  const [search, setSearch] = useState("");

  const filteredSubjects = subjects.filter((subject) =>
    subject.toLowerCase().includes(search.toLowerCase())
  );

  const toggleSubject = (subject: string) => {
    setSelectedSubjects((current) => {
      if (current.includes(subject)) {
        return current.filter((item) => item !== subject);
      }

      if (current.length >= 6) {
        return current;
      }

      return [...current, subject];
    });
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-10 sm:px-6 sm:py-14">
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[420px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="pointer-events-none absolute bottom-0 right-0 -z-10 h-[300px] w-[300px] rounded-full bg-cyan-500/5 blur-[120px]" />

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
            Step 2 of 4
          </span>
        </div>

        {/* Progress */}
        <div className="mb-10">
          <div className="h-1.5 overflow-hidden rounded-full bg-[var(--surface-soft)]">
            <div className="h-full w-1/2 rounded-full bg-gradient-to-r from-violet-500 to-blue-500 transition-all duration-500" />
          </div>
        </div>

        {/* Introduction */}
        <div className="mb-8">
          <span className="inline-flex rounded-full border border-blue-400/20 bg-blue-500/10 px-3 py-1.5 text-xs font-medium text-blue-300">
            Your academic interests
          </span>

          <h1 className="theme-text-primary mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            What are you studying?
          </h1>

          <p className="theme-text-secondary mt-3 max-w-2xl text-sm leading-7 sm:text-base">
            Select the subjects you are currently studying or interested in.
            We&apos;ll use them to find students with similar academic goals.
          </p>
        </div>

        {/* Main card */}
        <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)]/80 p-6 shadow-2xl shadow-black/20 backdrop-blur-2xl sm:p-8">
          {/* Search */}
          <div className="relative">
            <label
              htmlFor="subject-search"
              className="sr-only"
            >
              Search subjects
            </label>

            <input
              id="subject-search"
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search subjects..."
              className="h-12 w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 pr-12 text-sm text-[var(--text-primary)] outline-none transition-all duration-200 placeholder:text-[var(--text-muted)] focus:border-violet-400/50 focus:ring-2 focus:ring-violet-500/10"
            />

            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[var(--text-muted)]">
              ⌕
            </div>
          </div>

          {/* Selection information */}
          <div className="mt-6 flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="text-sm font-semibold text-[var(--text-primary)]">
                Select your subjects
              </h2>

              <p className="mt-1 text-xs text-[var(--text-muted)]">
                Choose up to 6 subjects.
              </p>
            </div>

            <div className="text-sm font-medium text-violet-400">
              {selectedSubjects.length} / 6 selected
            </div>
          </div>

          {/* Subject grid */}
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {filteredSubjects.map((subject) => {
              const isSelected = selectedSubjects.includes(subject);
              const isDisabled =
                !isSelected && selectedSubjects.length >= 6;

              return (
                <button
                  key={subject}
                  type="button"
                  onClick={() => toggleSubject(subject)}
                  disabled={isDisabled}
                  className={`group relative min-h-14 rounded-2xl border px-4 py-3 text-left text-sm font-medium transition-all duration-300 ${
                    isSelected
                      ? "border-violet-400/50 bg-violet-500/15 text-violet-200 shadow-lg shadow-violet-500/10"
                      : "border-[var(--border)] bg-[var(--surface-soft)] text-[var(--text-secondary)] hover:-translate-y-0.5 hover:border-violet-400/30 hover:bg-[var(--surface-elevated)]"
                  } ${
                    isDisabled
                      ? "cursor-not-allowed opacity-40 hover:translate-y-0"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <span>{subject}</span>

                    <span
                      className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-xs transition-all duration-300 ${
                        isSelected
                          ? "border-violet-400 bg-violet-500 text-white"
                          : "border-[var(--border-strong)] text-transparent group-hover:border-violet-400/40"
                      }`}
                    >
                      ✓
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* No results */}
          {filteredSubjects.length === 0 && (
            <div className="rounded-2xl border border-dashed border-[var(--border)] py-12 text-center">
              <p className="text-sm font-medium text-[var(--text-secondary)]">
                No subjects found.
              </p>

              <p className="mt-1 text-xs text-[var(--text-muted)]">
                Try searching for another subject.
              </p>
            </div>
          )}

          {/* Selected subjects */}
          {selectedSubjects.length > 0 && (
            <div className="mt-8 border-t border-[var(--border)] pt-6">
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                Your selection
              </p>

              <div className="flex flex-wrap gap-2">
                {selectedSubjects.map((subject) => (
                  <button
                    key={subject}
                    type="button"
                    onClick={() => toggleSubject(subject)}
                    className="inline-flex items-center gap-2 rounded-full border border-violet-400/25 bg-violet-500/10 px-3 py-2 text-xs font-medium text-violet-300 transition-all duration-200 hover:border-violet-400/40 hover:bg-violet-500/15"
                  >
                    {subject}

                    <span className="text-violet-400">
                      ×
                    </span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Actions */}
          <div className="mt-8 flex flex-col-reverse gap-3 border-t border-[var(--border)] pt-7 sm:flex-row sm:items-center sm:justify-between">
            <Link
              href="/onboarding/profile"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-[var(--border)] px-5 text-sm font-medium text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--border-strong)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
            >
              Back
            </Link>

            <button
              type="button"
              disabled={selectedSubjects.length === 0}
              className="group inline-flex h-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:translate-y-0"
            >
              Continue

              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </button>
          </div>
        </section>

        {/* Footer note */}
        <p className="mt-6 text-center text-xs leading-5 text-[var(--text-muted)]">
          You can change your subjects later from your profile settings.
        </p>
      </div>
    </main>
  );
}