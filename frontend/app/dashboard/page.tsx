"use client";

const recommendedBuddies = [
  {
    name: "Abid Abdullah",
    university: "CSE Student",
    compatibility: 94,
    subjects: ["Python", "Algorithms", "Database"],
    studyStyle: "Focused",
    studyTime: "Evening",
    initials: "AA",
  },
  {
    name: "Imzamamul haque",
    university: "Software Engineering",
    compatibility: 89,
    subjects: ["Web Development", "JavaScript", "UI/UX"],
    studyStyle: "Balanced",
    studyTime: "Night",
    initials: "IH",
  },
  {
    name: "Jihad Mia",
    university: "Computer Science",
    compatibility: 86,
    subjects: ["Machine Learning", "Python", "Statistics"],
    studyStyle: "Discussion",
    studyTime: "Afternoon",
    initials: "JM",
  },
];

import { useState } from "react";
import Navbar from "@/components/Navbar";

const stats = [
  {
    label: "Profile strength",
    value: "92%",
    description: "Almost fully optimized",
  },
  {
    label: "Study goals",
    value: "3",
    description: "Active learning goals",
  },
  {
    label: "Subjects",
    value: "6",
    description: "Selected subjects",
  },
];

export default function Dashboard() {
  const [connectionRequests, setConnectionRequests] = useState<string[]>([]);
  const [selectedBuddy, setSelectedBuddy] = useState<
    (typeof recommendedBuddies)[number] | null
  >(null);

  const handleConnect = (name: string) => {
    setConnectionRequests((current) => {
      if (current.includes(name)) {
        return current;
      }

      return [...current, name];
    });
  };
  return (
    <main className="min-h-screen">
      <Navbar />

      <section className="relative mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />
        <div className="pointer-events-none absolute -right-40 top-40 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        {/* Welcome */}
        <div className="relative">
          <p className="text-sm font-medium text-violet-400">
            Your learning space
          </p>

          <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Good evening, Shoyab.
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-zinc-400 sm:text-base">
            Your profile is ready. Now let&apos;s find people who match the way
            you study, learn, and grow.
          </p>
        </div>

        {/* Profile overview */}
        <div className="relative mt-10 grid gap-5 md:grid-cols-[1.4fr_1fr]">
          {/* Compatibility card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
            <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
              <div>
                <p className="text-sm font-medium text-zinc-400">
                  Compatibility readiness
                </p>

                <div className="mt-3 flex items-end gap-2">
                  <span className="text-5xl font-extrabold tracking-tight text-white">
                    92
                  </span>

                  <span className="mb-2 text-xl font-semibold text-violet-400">
                    %
                  </span>
                </div>

                <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-500">
                  Your profile contains enough information to start finding
                  compatible StudyBuddies.
                </p>
              </div>

              {/* Progress ring */}
              <div className="flex h-32 w-32 shrink-0 items-center justify-center rounded-full border-8 border-violet-500/20">
                <div className="flex h-24 w-24 items-center justify-center rounded-full border border-violet-400/20 bg-violet-500/10">
                  <span className="text-2xl font-bold text-violet-300">
                    92%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Profile status */}
          <div className="rounded-3xl border border-white/10 bg-white/[0.035] p-7 backdrop-blur-xl">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-zinc-400">
                Profile status
              </p>

              <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                Ready
              </span>
            </div>

            <h2 className="mt-6 text-xl font-bold text-white">
              You&apos;re ready to discover.
            </h2>

            <p className="mt-2 text-sm leading-6 text-zinc-500">
              Your study preferences and goals are ready to power the matching
              system.
            </p>

            <button className="mt-6 rounded-xl border border-white/10 bg-white/[0.05] px-4 py-2.5 text-sm font-semibold text-white transition hover:border-violet-400/30 hover:bg-violet-500/10">
              Edit profile
            </button>
          </div>
        </div>

        {/* Stats */}
        <div className="relative mt-5 grid gap-5 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-2xl border border-white/10 bg-white/[0.025] p-6 transition hover:-translate-y-1 hover:border-violet-400/20"
            >
              <p className="text-sm text-zinc-500">{stat.label}</p>

              <p className="mt-2 text-3xl font-extrabold tracking-tight text-white">
                {stat.value}
              </p>

              <p className="mt-2 text-xs text-zinc-600">{stat.description}</p>
            </div>
          ))}
        </div>

        {/* Recommended section placeholder */}
        <div className="relative mt-14">
          <div className="flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="text-sm font-medium text-violet-400">
                Intelligent matching
              </p>

              <h2 className="mt-2 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                Recommended StudyBuddies
              </h2>

              <p className="mt-2 text-sm text-zinc-500">
                People who may be a strong match for your learning style.
              </p>
            </div>

            <button className="w-fit text-sm font-semibold text-violet-400 transition hover:text-violet-300">
              View all →
            </button>
          </div>

          {/* Temporary matching placeholders */}
          {/* Recommended StudyBuddies */}
          <div className="mt-6 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {recommendedBuddies.map((buddy) => (
              <article
                key={buddy.name}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/[0.025] p-6 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-white/[0.04]"
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl transition duration-500 group-hover:bg-violet-500/20" />

                {/* Profile */}
                <div className="relative flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 text-lg font-bold text-violet-200 ring-1 ring-white/10">
                      {buddy.initials}
                    </div>

                    <div>
                      <h3 className="font-bold text-white">{buddy.name}</h3>

                      <p className="mt-1 text-xs text-zinc-500">
                        {buddy.university}
                      </p>
                    </div>
                  </div>

                  {/* Compatibility */}
                  <div className="rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-2.5 py-1.5 text-right">
                    <p className="text-sm font-bold text-emerald-300">
                      {buddy.compatibility}%
                    </p>

                    <p className="text-[9px] uppercase tracking-wider text-emerald-400/70">
                      Match
                    </p>
                  </div>
                </div>

                {/* Subjects */}
                <div className="relative mt-6">
                  <p className="text-xs font-medium uppercase tracking-wider text-zinc-600">
                    Common interests
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {buddy.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-lg border border-white/8 bg-white/[0.04] px-2.5 py-1.5 text-xs text-zinc-400"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Study preferences */}
                <div className="relative mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-white/8 bg-black/10 p-3">
                    <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                      Study style
                    </p>

                    <p className="mt-1 text-xs font-medium text-zinc-300">
                      {buddy.studyStyle}
                    </p>
                  </div>

                  <div className="rounded-xl border border-white/8 bg-black/10 p-3">
                    <p className="text-[10px] uppercase tracking-wider text-zinc-600">
                      Study time
                    </p>

                    <p className="mt-1 text-xs font-medium text-zinc-300">
                      {buddy.studyTime}
                    </p>
                  </div>
                </div>

                {/* Actions */}
                <div className="relative mt-6 flex gap-3">
                  <button
                    onClick={() => handleConnect(buddy.name)}
                    disabled={connectionRequests.includes(buddy.name)}
                    className={`flex-1 rounded-xl px-4 py-2.5 text-sm font-semibold transition ${
                      connectionRequests.includes(buddy.name)
                        ? "cursor-default border border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                        : "bg-violet-500 text-white hover:bg-violet-400"
                    }`}
                  >
                    {connectionRequests.includes(buddy.name)
                      ? "Request Sent ✓"
                      : "Connect"}
                  </button>

                  <button
                    onClick={() => setSelectedBuddy(buddy)}
                    className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-semibold text-zinc-200 transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-white"
                  >
                    Profile
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      {selectedBuddy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 backdrop-blur-sm"
          onClick={() => setSelectedBuddy(null)}
        >
          <div
            className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#0b0d14] p-6 shadow-2xl shadow-violet-950/40"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/30 to-cyan-400/20 text-lg font-bold text-white ring-1 ring-white/10">
                  {selectedBuddy.initials}
                </div>

                <div>
                  <h2 className="text-xl font-bold text-white">
                    {selectedBuddy.name}
                  </h2>

                  <p className="mt-1 text-sm text-zinc-400">
                    {selectedBuddy.university}
                  </p>
                </div>
              </div>

              <button
                onClick={() => setSelectedBuddy(null)}
                className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-400 transition hover:bg-white/10 hover:text-white"
                aria-label="Close profile"
              >
                ×
              </button>
            </div>

            <div className="mt-6 rounded-2xl border border-violet-400/10 bg-violet-500/5 p-5">
              <p className="text-sm text-zinc-400">Study compatibility</p>

              <div className="mt-2 flex items-end gap-2">
                <span className="text-4xl font-extrabold text-white">
                  {selectedBuddy.compatibility}%
                </span>

                <span className="mb-1 text-sm text-emerald-300">
                  Strong match
                </span>
              </div>
            </div>

            <div className="mt-5">
              <p className="text-sm font-semibold text-zinc-300">
                Common subjects
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {selectedBuddy.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full border border-violet-400/10 bg-violet-500/10 px-3 py-1.5 text-xs font-medium text-violet-200"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs text-zinc-500">Study style</p>

                <p className="mt-1 font-semibold text-white">
                  {selectedBuddy.studyStyle}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-4">
                <p className="text-xs text-zinc-500">Study time</p>

                <p className="mt-1 font-semibold text-white">
                  {selectedBuddy.studyTime}
                </p>
              </div>
            </div>

            <div className="mt-6 flex gap-3">
              <button
                onClick={() => {
                  handleConnect(selectedBuddy.name);
                }}
                disabled={connectionRequests.includes(selectedBuddy.name)}
                className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold transition ${
                  connectionRequests.includes(selectedBuddy.name)
                    ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                    : "bg-violet-500 text-white hover:bg-violet-400"
                }`}
              >
                {connectionRequests.includes(selectedBuddy.name)
                  ? "Request Sent ✓"
                  : "Connect"}
              </button>

              <button
                onClick={() => setSelectedBuddy(null)}
                className="rounded-xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-zinc-300 transition hover:bg-white/10 hover:text-white"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
