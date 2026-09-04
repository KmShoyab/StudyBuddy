"use client";

import { useState } from "react";
import Link from "next/link";

const subjects = [
  "Data Structures",
  "Algorithms",
  "Database Systems",
  "Theory of Computing",
];

const goals = ["Exam Preparation", "Accountability", "Discussion"];

const preferences = [
  { label: "Study Mode", value: "Focused" },
  { label: "Session Length", value: "45–60 minutes" },
  { label: "Preferred Time", value: "Evening" },
  { label: "Group Size", value: "1-on-1" },
];

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false);

  const [name, setName] = useState("KM Shoyabur Rahman");
  const [bio, setBio] = useState(
    "CSE student looking for focused and consistent study partners.",
  );

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setIsEditing(false);
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] theme-transition">
      <div className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6">
          <Link
            href="/dashboard"
            className="mb-4 inline-flex items-center text-sm text-[var(--text-muted)] transition hover:text-violet-400"
          >
            ← Back to Dashboard
          </Link>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">My Profile</h1>

              <p className="mt-2 text-sm text-[var(--text-secondary)]">
                Manage your StudyBuddy profile and study preferences.
              </p>
            </div>

            <Link
              href="/settings"
              className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-medium transition hover:border-violet-500/30 hover:bg-violet-500/10"
            >
              ⚙️ Account Settings
            </Link>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Main Profile */}
          <div className="space-y-6">
            {/* Profile Header */}
            <section className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-lg">
              <div className="h-32 bg-gradient-to-r from-violet-500/30 via-blue-500/20 to-cyan-400/20" />

              <div className="px-5 pb-6 sm:px-6">
                <div className="-mt-12 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                  <div className="flex flex-col items-start gap-3 sm:flex-row sm:items-end">
                    <div className="flex h-24 w-24 items-center justify-center rounded-3xl border-4 border-[var(--surface)] bg-violet-500 text-2xl font-bold text-white shadow-xl">
                      KS
                    </div>

                    <div className="pb-1">
                      <div className="flex flex-wrap items-center gap-2">
                        <h2 className="text-xl font-bold">{name}</h2>

                        <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-[10px] font-semibold text-emerald-400">
                          Active
                        </span>
                      </div>

                      <p className="mt-1 text-sm text-[var(--text-muted)]">
                        Computer Science & Engineering Student
                      </p>
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      if (isEditing) {
                        handleSave();
                      } else {
                        setIsEditing(true);
                      }
                    }}
                    className="rounded-xl bg-violet-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-violet-600"
                  >
                    {isEditing ? "Save Profile" : "Edit Profile"}
                  </button>
                </div>
              </div>
            </section>

            {/* About */}
            <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-lg sm:p-6">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <h2 className="text-lg font-semibold">About</h2>
                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    Tell other students a little about yourself.
                  </p>
                </div>
              </div>

              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="profile-name"
                      className="mb-2 block text-sm font-medium"
                    >
                      Full name
                    </label>

                    <input
                      id="profile-name"
                      value={name}
                      onChange={(event) => setName(event.target.value)}
                      className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="profile-bio"
                      className="mb-2 block text-sm font-medium"
                    >
                      Bio
                    </label>

                    <textarea
                      id="profile-bio"
                      value={bio}
                      onChange={(event) => setBio(event.target.value)}
                      rows={4}
                      className="w-full resize-none rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10"
                    />
                  </div>
                </div>
              ) : (
                <p className="text-sm leading-7 text-[var(--text-secondary)]">
                  {bio}
                </p>
              )}
            </section>

            {/* Subjects */}
            <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-lg sm:p-6">
              <div className="mb-5">
                <h2 className="text-lg font-semibold">Subjects</h2>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Subjects you are currently studying.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {subjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-2 text-xs font-medium text-violet-300"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </section>

            {/* Preferences */}
            <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-lg sm:p-6">
              <div className="mb-5">
                <h2 className="text-lg font-semibold">Study Preferences</h2>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Your preferred way to study.
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
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
            </section>

            {/* Goals */}
            <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-lg sm:p-6">
              <div className="mb-5">
                <h2 className="text-lg font-semibold">Study Goals</h2>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  What you want to achieve with StudyBuddy.
                </p>
              </div>

              <div className="flex flex-wrap gap-2">
                {goals.map((goal) => (
                  <span
                    key={goal}
                    className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 text-xs font-medium text-cyan-300"
                  >
                    {goal}
                  </span>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Completion */}
            <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-lg">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="font-semibold">Profile Completion</h2>

                  <p className="mt-1 text-xs text-[var(--text-muted)]">
                    Your profile is looking good.
                  </p>
                </div>

                <span className="text-xl font-bold text-violet-400">85%</span>
              </div>

              <div className="mt-5 h-2 overflow-hidden rounded-full bg-[var(--surface-soft)]">
                <div
                  className="h-full rounded-full bg-violet-500"
                  style={{ width: "85%" }}
                />
              </div>

              <p className="mt-3 text-xs text-[var(--text-muted)]">
                Add a profile picture to reach 100%.
              </p>
            </section>

            {/* Quick Stats */}
            <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-lg">
              <h2 className="font-semibold">StudyBuddy Stats</h2>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <StatCard value="3" label="Connections" />
                <StatCard value="12" label="Sessions" />
                <StatCard value="6" label="Subjects" />
                <StatCard value="94%" label="Best Match" />
              </div>
            </section>

            {/* Account */}
            <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-lg">
              <h2 className="font-semibold">Account</h2>

              <div className="mt-4 space-y-2">
                <Link
                  href="/settings"
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
                >
                  <span>⚙️ Settings</span>
                  <span>→</span>
                </Link>

                <Link
                  href="/notifications"
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
                >
                  <span>🔔 Notifications</span>
                  <span>→</span>
                </Link>

                <Link
                  href="/messages"
                  className="flex items-center justify-between rounded-xl px-3 py-3 text-sm text-[var(--text-secondary)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
                >
                  <span>💬 Messages</span>
                  <span>→</span>
                </Link>
              </div>
            </section>
          </aside>
        </div>

        {/* Saved Message */}
        {saved && (
          <div className="fixed bottom-5 right-5 z-50 rounded-xl border border-emerald-500/20 bg-[var(--surface)] px-5 py-3 text-sm font-medium text-emerald-400 shadow-2xl">
            ✓ Profile updated successfully
          </div>
        )}
      </div>
    </main>
  );
}

function StatCard({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 text-center">
      <p className="text-xl font-bold text-violet-400">{value}</p>

      <p className="mt-1 text-[10px] text-[var(--text-muted)]">{label}</p>
    </div>
  );
}
