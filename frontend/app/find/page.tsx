"use client";

import { useMemo, useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const studyBuddies = [
  {
    id: 1,
    name: "Abid Abdullah",
    initials: "AA",
    match: 94,
    subjects: ["Python", "Data Structures", "Algorithms"],
    mode: "Focused",
    session: "45–60 min",
    time: "Evening",
    bio: "I like focused study sessions with clear goals and small breaks.",
  },
  {
    id: 2,
    name: "Imzamamul Haque",
    initials: "IH",
    match: 89,
    subjects: ["Java", "OOP", "Database"],
    mode: "Balanced",
    session: "1–2 hours",
    time: "Afternoon",
    bio: "Looking for someone who enjoys learning together and discussing problems.",
  },
  {
    id: 3,
    name: "Jihad Mia",
    initials: "JM",
    match: 86,
    subjects: ["C++", "Algorithms", "Competitive Programming"],
    mode: "Focused",
    session: "30–45 min",
    time: "Late night",
    bio: "Short and productive sessions work best for me.",
  },
  {
    id: 4,
    name: "Fahim Rahat",
    initials: "FR",
    match: 84,
    subjects: ["Web Development", "JavaScript", "React"],
    mode: "Discussion",
    session: "45–60 min",
    time: "Morning",
    bio: "I learn best when I can explain ideas and discuss them with others.",
  },
  {
    id: 5,
    name: "Mehedi Hasan",
    initials: "MH",
    match: 81,
    subjects: ["Python", "Machine Learning", "Statistics"],
    mode: "Balanced",
    session: "1–2 hours",
    time: "Evening",
    bio: "Interested in consistent study sessions and sharing resources.",
  },
  {
    id: 6,
    name: "Km Shoyab",
    initials: "KS",
    match: 78,
    subjects: ["C", "Operating Systems", "Computer Networks"],
    mode: "Discussion",
    session: "45–60 min",
    time: "Late night",
    bio: "I enjoy learning difficult concepts through conversation.",
  },
];

const modes = ["All", "Focused", "Discussion", "Balanced"];
const sessions = ["All", "30–45 min", "45–60 min", "1–2 hours"];
const times = ["All", "Morning", "Afternoon", "Evening", "Late night"];

export default function FindStudyBuddyPage() {
  const [search, setSearch] = useState("");
  const [mode, setMode] = useState("All");
  const [session, setSession] = useState("All");
  const [time, setTime] = useState("All");
  const [selectedBuddy, setSelectedBuddy] = useState<
    (typeof studyBuddies)[number] | null
  >(null);
  const [connectionRequests, setConnectionRequests] = useState<number[]>([]);

  const filteredBuddies = useMemo(() => {
    const query = search.toLowerCase().trim();

    return studyBuddies.filter((buddy) => {
      const matchesSearch =
        query === "" ||
        buddy.name.toLowerCase().includes(query) ||
        buddy.subjects.some((subject) => subject.toLowerCase().includes(query));

      const matchesMode = mode === "All" || buddy.mode === mode;
      const matchesSession = session === "All" || buddy.session === session;
      const matchesTime = time === "All" || buddy.time === time;

      return matchesSearch && matchesMode && matchesSession && matchesTime;
    });
  }, [search, mode, session, time]);
  const sendConnectionRequest = (buddyId: number) => {
    setConnectionRequests((current) => {
      if (current.includes(buddyId)) {
        return current;
      }

      return [...current, buddyId];
    });
  };

  const resetFilters = () => {
    setSearch("");
    setMode("All");
    setSession("All");
    setTime("All");
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />

      <section className="mx-auto w-full max-w-7xl px-4 pb-16 pt-12 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex items-center rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm text-violet-300">
            Find your study partner
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Find your{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              StudyBuddy
            </span>
          </h1>

          <p className="mt-4 text-base leading-7 text-[var(--text-secondary)] sm:text-lg">
            Discover students who match your subjects, study style, schedule,
            and goals.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mt-10 max-w-3xl">
          <div className="flex items-center gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3 shadow-lg">
            <span className="text-xl text-[var(--text-muted)]">⌕</span>

            <input
              type="text"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              placeholder="Search by name or subject..."
              className="min-w-0 flex-1 bg-transparent text-[var(--text-primary)] outline-none placeholder:text-[var(--text-muted)]"
            />

            {search && (
              <button
                type="button"
                onClick={() => setSearch("")}
                className="rounded-lg px-2 py-1 text-sm text-[var(--text-muted)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
              >
                Clear
              </button>
            )}
          </div>
        </div>

        {/* Filters */}
        <div className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-6">
          <div className="flex flex-col gap-6">
            {/* Filter heading */}
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h2 className="text-lg font-semibold">Refine your search</h2>

                <p className="mt-1 text-sm text-[var(--text-muted)]">
                  Find people who fit the way you study.
                </p>
              </div>

              <button
                type="button"
                onClick={resetFilters}
                className="w-fit rounded-lg border border-[var(--border)] px-3 py-2 text-sm text-[var(--text-secondary)] transition hover:border-violet-400/30 hover:bg-violet-500/10 hover:text-violet-300"
              >
                Reset filters
              </button>
            </div>

            {/* Filter controls */}
            <div className="grid gap-5 md:grid-cols-3">
              {/* Study mode */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
                  Study mode
                </label>

                <select
                  value={mode}
                  onChange={(event) => setMode(event.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-violet-400/50"
                >
                  {modes.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Session length */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
                  Session length
                </label>

                <select
                  value={session}
                  onChange={(event) => setSession(event.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-violet-400/50"
                >
                  {sessions.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Study time */}
              <div>
                <label className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
                  Preferred time
                </label>

                <select
                  value={time}
                  onChange={(event) => setTime(event.target.value)}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-3 py-3 text-sm text-[var(--text-primary)] outline-none transition focus:border-violet-400/50"
                >
                  {times.map((item) => (
                    <option key={item} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Results heading */}
        <div className="mt-10 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold">Recommended StudyBuddies</h2>

            <p className="mt-1 text-sm text-[var(--text-muted)]">
              {filteredBuddies.length}{" "}
              {filteredBuddies.length === 1 ? "person" : "people"} found
            </p>
          </div>
        </div>

        {/* Results */}
        {filteredBuddies.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredBuddies.map((buddy) => (
              <article
                key={buddy.id}
                className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 transition duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:shadow-xl hover:shadow-violet-500/5"
              >
                {/* Profile */}
                <div className="flex items-start justify-between gap-4">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-sm font-semibold text-violet-300">
                      {buddy.initials}
                    </div>

                    <div className="min-w-0">
                      <h3 className="truncate font-semibold">{buddy.name}</h3>

                      <p className="mt-1 text-sm text-[var(--text-muted)]">
                        {buddy.mode} learner
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-400">
                    {buddy.match}% match
                  </div>
                </div>

                {/* Bio */}
                <p className="mt-5 text-sm leading-6 text-[var(--text-secondary)]">
                  {buddy.bio}
                </p>

                {/* Subjects */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {buddy.subjects.map((subject) => (
                    <span
                      key={subject}
                      className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                    >
                      {subject}
                    </span>
                  ))}
                </div>

                {/* Details */}
                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-[var(--surface-soft)] p-3">
                    <p className="text-xs text-[var(--text-muted)]">Session</p>

                    <p className="mt-1 text-sm font-medium">{buddy.session}</p>
                  </div>

                  <div className="rounded-xl bg-[var(--surface-soft)] p-3">
                    <p className="text-xs text-[var(--text-muted)]">
                      Best time
                    </p>

                    <p className="mt-1 text-sm font-medium">{buddy.time}</p>
                  </div>
                </div>

                {/* Action */}
                <button
                  type="button"
                  onClick={() => setSelectedBuddy(buddy)}
                  className="mt-5 w-full rounded-xl bg-violet-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-violet-400 active:scale-[0.98]"
                >
                  View Profile
                </button>
              </article>
            ))}
          </div>
        ) : (
          /* Empty state */
          <div className="mt-6 rounded-2xl border border-dashed border-[var(--border-strong)] bg-[var(--surface)] px-6 py-16 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/10 text-2xl">
              🔎
            </div>

            <h3 className="mt-5 text-xl font-semibold">
              No StudyBuddies found
            </h3>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[var(--text-secondary)]">
              Try changing your filters or searching for another subject.
            </p>

            <button
              type="button"
              onClick={resetFilters}
              className="mt-6 rounded-xl border border-[var(--border)] px-5 py-3 text-sm font-medium text-[var(--text-secondary)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
            >
              Reset search
            </button>
          </div>
        )}
      </section>
      {/* Profile Modal */}
      {selectedBuddy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedBuddy(null)}
        >
          <div
            className="max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl sm:p-8"
            onClick={(event) => event.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-start justify-between gap-4">
              <div className="flex min-w-0 items-center gap-4">
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-lg font-bold text-violet-300">
                  {selectedBuddy.initials}
                </div>

                <div className="min-w-0">
                  <h2 className="truncate text-xl font-bold sm:text-2xl">
                    {selectedBuddy.name}
                  </h2>

                  <p className="mt-1 text-sm text-[var(--text-muted)]">
                    {selectedBuddy.mode} learner
                  </p>
                </div>
              </div>

              <button
                type="button"
                aria-label="Close profile"
                onClick={() => setSelectedBuddy(null)}
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-lg text-[var(--text-muted)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
              >
                ×
              </button>
            </div>

            {/* Match */}
            <div className="mt-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-[var(--text-muted)]">
                    Study compatibility
                  </p>

                  <p className="mt-1 text-lg font-semibold text-emerald-400">
                    Excellent match
                  </p>
                </div>

                <div className="text-2xl font-bold text-emerald-400">
                  {selectedBuddy.match}%
                </div>
              </div>
            </div>

            {/* Bio */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                About
              </h3>

              <p className="mt-2 text-sm leading-7 text-[var(--text-secondary)]">
                {selectedBuddy.bio}
              </p>
            </div>

            {/* Subjects */}
            <div className="mt-6">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-[var(--text-muted)]">
                Subjects
              </h3>

              <div className="mt-3 flex flex-wrap gap-2">
                {selectedBuddy.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1.5 text-sm text-violet-300"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            {/* Study Details */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl bg-[var(--surface-soft)] p-4">
                <p className="text-xs text-[var(--text-muted)]">Study mode</p>

                <p className="mt-1 text-sm font-semibold">
                  {selectedBuddy.mode}
                </p>
              </div>

              <div className="rounded-2xl bg-[var(--surface-soft)] p-4">
                <p className="text-xs text-[var(--text-muted)]">Session</p>

                <p className="mt-1 text-sm font-semibold">
                  {selectedBuddy.session}
                </p>
              </div>

              <div className="rounded-2xl bg-[var(--surface-soft)] p-4">
                <p className="text-xs text-[var(--text-muted)]">Best time</p>

                <p className="mt-1 text-sm font-semibold">
                  {selectedBuddy.time}
                </p>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={() => setSelectedBuddy(null)}
                className="flex-1 rounded-xl border border-[var(--border)] px-4 py-3 text-sm font-semibold text-[var(--text-secondary)] transition hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
              >
                Close
              </button>

              <button
                type="button"
                onClick={() => sendConnectionRequest(selectedBuddy.id)}
                disabled={connectionRequests.includes(selectedBuddy.id)}
                className={`flex-1 rounded-xl px-4 py-3 text-sm font-semibold text-white transition active:scale-[0.98] ${
                  connectionRequests.includes(selectedBuddy.id)
                    ? "cursor-not-allowed bg-emerald-500"
                    : "bg-violet-500 hover:bg-violet-400"
                }`}
              >
                {connectionRequests.includes(selectedBuddy.id)
                  ? "✓ Request Sent"
                  : "Send Connection Request"}
              </button>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}
