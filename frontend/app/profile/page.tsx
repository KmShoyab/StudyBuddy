"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const subjects = [
  "Python",
  "Data Structures",
  "Algorithms",
  "Database Systems",
];

const goals = [
  "Prepare for exams",
  "Improve programming skills",
  "Stay accountable",
];

const preferences = [
  {
    label: "Study Mode",
    value: "Focused",
  },
  {
    label: "Session Length",
    value: "45–60 minutes",
  },
  {
    label: "Preferred Time",
    value: "Evening",
  },
  {
    label: "Group Size",
    value: "1-on-1",
  },
];

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("KM Shoyabur Rahman");
  const [bio, setBio] = useState(
    "Computer Science student who enjoys learning through practical projects and collaborative study."
  );

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="mb-8">
          <div className="mb-2 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400">
            Your Learning Identity
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            My Profile
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
            Manage your study identity, interests, goals, and learning
            preferences.
          </p>
        </section>

        {/* Profile Layout */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* Main Profile Card */}
          <section className="lg:col-span-2">
            <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)]">
              {/* Cover */}
              <div className="relative h-32 overflow-hidden bg-gradient-to-r from-violet-600/30 via-blue-500/20 to-cyan-500/20 sm:h-40">
                <div className="absolute -right-10 -top-20 h-48 w-48 rounded-full bg-violet-500/20 blur-3xl" />

                <div className="absolute -bottom-20 left-1/3 h-48 w-48 rounded-full bg-cyan-500/10 blur-3xl" />
              </div>

              {/* Profile Content */}
              <div className="px-5 pb-6 sm:px-8">
                <div className="-mt-12 flex flex-col gap-5 sm:-mt-14 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-end">
                    {/* Avatar */}
                    <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-3xl border-4 border-[var(--surface)] bg-gradient-to-br from-violet-500 to-cyan-500 text-2xl font-bold text-white shadow-xl sm:h-28 sm:w-28">
                      KR
                    </div>

                    <div className="pb-1">
                      {isEditing ? (
                        <input
                          value={name}
                          onChange={(event) => setName(event.target.value)}
                          className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-2 text-xl font-bold outline-none focus:border-violet-500 sm:text-2xl"
                        />
                      ) : (
                        <h2 className="text-2xl font-bold">
                          {name}
                        </h2>
                      )}

                      <p className="mt-1 text-sm text-[var(--text-muted)]">
                        Computer Science Student
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsEditing((current) => !current)}
                    className={`rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      isEditing
                        ? "bg-emerald-500 text-white hover:bg-emerald-400"
                        : "border border-[var(--border)] bg-[var(--surface-soft)] hover:border-violet-500/30 hover:bg-violet-500/10"
                    }`}
                  >
                    {isEditing ? "Save Changes" : "Edit Profile"}
                  </button>
                </div>

                {/* Bio */}
                <div className="mt-8">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-sm font-semibold">
                      About Me
                    </h3>

                    {isEditing && (
                      <span className="text-xs text-violet-400">
                        Editing
                      </span>
                    )}
                  </div>

                  {isEditing ? (
                    <textarea
                      value={bio}
                      onChange={(event) => setBio(event.target.value)}
                      rows={4}
                      className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm leading-6 outline-none transition focus:border-violet-500"
                    />
                  ) : (
                    <p className="text-sm leading-7 text-[var(--text-secondary)]">
                      {bio}
                    </p>
                  )}
                </div>

                {/* Subjects */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold">
                    Subjects I Study
                  </h3>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {subjects.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-400"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Goals */}
                <div className="mt-8">
                  <h3 className="text-sm font-semibold">
                    My Goals
                  </h3>

                  <div className="mt-3 space-y-2">
                    {goals.map((goal) => (
                      <div
                        key={goal}
                        className="flex items-center gap-3 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3"
                      >
                        <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-sm text-emerald-400">
                          ✓
                        </div>

                        <span className="text-sm text-[var(--text-secondary)]">
                          {goal}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Study Preferences */}
            <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-violet-400">
                  Preferences
                </p>

                <h2 className="mt-1 text-lg font-bold">
                  How I Like to Study
                </h2>
              </div>

              <div className="mt-5 space-y-3">
                {preferences.map((preference) => (
                  <div
                    key={preference.label}
                    className="rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4"
                  >
                    <p className="text-xs text-[var(--text-muted)]">
                      {preference.label}
                    </p>

                    <p className="mt-1 text-sm font-semibold">
                      {preference.value}
                    </p>
                  </div>
                ))}
              </div>

              <Link
                href="/onboarding/preferences"
                className="mt-5 block rounded-xl border border-[var(--border)] px-4 py-3 text-center text-sm font-semibold transition hover:border-violet-500/30 hover:bg-violet-500/10"
              >
                Update Preferences
              </Link>
            </section>

            {/* Profile Completion */}
            <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-semibold">
                  Profile Completion
                </h2>

                <span className="text-sm font-bold text-violet-400">
                  85%
                </span>
              </div>

              <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--surface-soft)]">
                <div className="h-full w-[85%] rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
              </div>

              <p className="mt-3 text-xs leading-5 text-[var(--text-muted)]">
                Add a profile photo to make your profile more complete.
              </p>
            </section>

            {/* Find Buddy CTA */}
            <section className="overflow-hidden rounded-3xl border border-violet-500/20 bg-gradient-to-br from-violet-500/10 to-cyan-500/10 p-5 sm:p-6">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-xl">
                ✨
              </div>

              <h2 className="mt-4 text-lg font-bold">
                Ready to study together?
              </h2>

              <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                Find students who match your subjects, schedule, and study
                style.
              </p>

              <Link
                href="/find"
                className="mt-5 block rounded-xl bg-violet-500 px-4 py-3 text-center text-sm font-semibold text-white transition hover:bg-violet-400"
              >
                Find StudyBuddy
              </Link>
            </section>
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}