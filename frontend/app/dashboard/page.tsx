"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { useEffect, useState } from "react";

const recommendedBuddies = [
  {
    name: "Abid Abdullah",
    initials: "AA",
    match: 94,
    subjects: ["Data Structures", "Algorithms", "Database"],
    mode: "Focused",
    availability: "Evening",
    session: "45–60 min",
  },
  {
    name: "Imzamamul haque",
    initials: "IH",
    match: 89,
    subjects: ["Algorithms", "Operating Systems", "Theory of Computing"],
    mode: "Balanced",
    availability: "Afternoon",
    session: "1–2 hours",
  },
  {
    name: "Jihad Mia",
    initials: "JM",
    match: 86,
    subjects: ["Database", "Web Development", "Software Engineering"],
    mode: "Discussion",
    availability: "Late night",
    session: "45–60 min",
  },
];

const stats = [
  {
    label: "Study Sessions",
    value: "12",
    detail: "This month",
    icon: "📚",
  },
  {
    label: "Study Hours",
    value: "18.5",
    detail: "This month",
    icon: "⏱️",
  },
  {
    label: "Connections",
    value: "8",
    detail: "Total",
    icon: "🤝",
  },
  {
    label: "Match Score",
    value: "92%",
    detail: "Profile compatibility",
    icon: "✨",
  },
];

const quickActions = [
  {
    title: "Find a StudyBuddy",
    description: "Discover students who match your study style.",
    icon: "🔎",
  },
  {
    title: "Update Preferences",
    description: "Keep your availability and study style fresh.",
    icon: "⚙️",
  },
  {
    title: "View My Profile",
    description: "See how other students discover you.",
    icon: "👤",
  },
];

const recentActivities = [
  {
    title: "Connected with Abid Abdullah",
    time: "2 hours ago",
    icon: "🤝",
  },
  {
    title: "Updated your study preferences",
    time: "Yesterday",
    icon: "⚙️",
  },
  {
    title: "Completed your learner profile",
    time: "2 days ago",
    icon: "✅",
  },
];

export default function Dashboard() {
  const [connectionRequests, setConnectionRequests] = useState<string[]>([]);

  const [selectedBuddy, setSelectedBuddy] = useState<
    (typeof recommendedBuddies)[number] | null
  >(null);

  const [isLoading, setIsLoading] = useState(true);

  const [hasRecommendations, setHasRecommendations] = useState(true);
  const [hasActivity, setHasActivity] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleConnect = (name: string) => {
    setConnectionRequests((current) => {
      if (current.includes(name)) {
        return current.filter((item) => item !== name);
      }

      return [...current, name];
    });
  };

  const testNormalState = () => {
    setHasRecommendations(true);
    setHasActivity(true);
    setHasError(false);
  };

  const testEmptyState = () => {
    setHasRecommendations(false);
    setHasActivity(false);
    setHasError(false);
  };

  const testErrorState = () => {
    setHasError(true);
  };

  const toggleActivity = () => {
    setHasActivity((current) => !current);
  };

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] theme-transition">
        {isLoading ? (
          <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
            <div className="animate-pulse space-y-8">
              <div className="h-8 w-72 rounded-lg bg-[var(--surface-soft)]" />

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {Array.from({ length: 4 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-32 rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
                  />
                ))}
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div
                    key={index}
                    className="h-56 rounded-2xl border border-[var(--border)] bg-[var(--surface)]"
                  />
                ))}
              </div>
            </div>
          </section>
        ) : (
          <>
            {/* Welcome Section */}
            <section className="border-b border-[var(--border)]">
              <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div>
                    <p className="mb-2 text-sm font-medium text-violet-500">
                      Welcome back 👋
                    </p>

                    <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
                      Your learning space.
                    </h1>

                    <p className="mt-3 max-w-2xl text-[var(--text-secondary)]">
                      Find the right people, build meaningful study connections,
                      and make every study session count.
                    </p>
                  </div>

                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-violet-500/10 text-2xl ring-1 ring-violet-500/20">
                    🎓
                  </div>
                </div>
              </div>
            </section>

            {/* Main Content */}
            <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
              {/* Profile Overview */}
              <div className="mb-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-sm theme-transition">
                <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-4">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-cyan-400 text-lg font-bold text-white shadow-lg shadow-violet-500/20">
                     
                    </div>

                    <div>
                      <p className="text-xl font-semibold text-[var(--text-primary)]">
                        KM Shoyabur Rahman
                      </p>

                      <p className="mt-1 text-sm text-[var(--text-secondary)]">
                        Computer Science • 3rd Year
                      </p>

                      <div className="mt-2 flex flex-wrap gap-2">
                        <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-medium text-violet-500">
                          Focused
                        </span>

                        <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-500">
                          Evening
                        </span>
                      </div>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="rounded-xl border border-[var(--border-strong)] bg-[var(--surface-soft)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition hover:border-violet-500/40 hover:bg-violet-500/10"
                  >
                    Edit Profile
                  </button>
                </div>
              </div>

              {/* Stats */}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm theme-transition"
                  >
                    <div className="flex items-start justify-between">
                      <div>
                        <p className="text-sm text-[var(--text-secondary)]">
                          {stat.label}
                        </p>

                        <p className="mt-2 text-3xl font-bold text-[var(--text-primary)]">
                          {stat.value}
                        </p>

                        <p className="mt-1 text-xs text-[var(--text-muted)]">
                          {stat.detail}
                        </p>
                      </div>

                      <div className="text-xl">{stat.icon}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mt-10">
                <div className="mb-5">
                  <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                    Quick Actions
                  </h2>

                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    Jump straight into what you need.
                  </p>
                </div>

                <div className="grid gap-4 md:grid-cols-3">
                  {quickActions.map((action) => (
                    <button
                      key={action.title}
                      type="button"
                      className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 text-left shadow-sm transition hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-lg hover:shadow-violet-500/5"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10 text-xl transition group-hover:bg-violet-500/15">
                        {action.icon}
                      </div>

                      <h3 className="mt-4 font-semibold text-[var(--text-primary)]">
                        {action.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-[var(--text-secondary)]">
                        {action.description}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Recommendations */}
              <div className="mt-10">
                <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                      Recommended StudyBuddies
                    </h2>

                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      Students whose study preferences closely match yours.
                    </p>
                  </div>

                  <button
                    type="button"
                    className="text-sm font-medium text-violet-500 hover:text-violet-400"
                  >
                    View all →
                  </button>
                </div>

                <div className="mt-6">
                  {hasError ? (
                    <div className="rounded-2xl border border-rose-500/20 bg-rose-500/5 p-8 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-rose-500/10 text-2xl">
                        ⚠️
                      </div>

                      <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                        We couldn't load your recommendations
                      </h3>

                      <p className="mx-auto mt-2 max-w-md text-sm text-[var(--text-secondary)]">
                        Something went wrong while finding StudyBuddies. Please
                        try again.
                      </p>

                      <button
                        type="button"
                        onClick={testNormalState}
                        className="mt-5 rounded-xl bg-violet-600 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-violet-500"
                      >
                        Try Again
                      </button>
                    </div>
                  ) : !hasRecommendations ? (
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center theme-transition">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/10 text-2xl">
                        🔎
                      </div>

                      <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                        No StudyBuddies found yet
                      </h3>

                      <p className="mx-auto mt-2 max-w-md text-sm text-[var(--text-secondary)]">
                        We don't have a strong match for you right now. Try
                        updating your subjects or preferences to improve your
                        matches.
                      </p>

                      <button
                        type="button"
                        onClick={testNormalState}
                        className="mt-5 rounded-xl border border-[var(--border-strong)] bg-[var(--surface-soft)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition hover:border-violet-500/40 hover:bg-violet-500/10"
                      >
                        Update Preferences
                      </button>
                    </div>
                  ) : (
                    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                      {recommendedBuddies.map((buddy) => {
                        const isConnected = connectionRequests.includes(
                          buddy.name,
                        );

                        return (
                          <div
                            key={buddy.name}
                            className="group rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-xl hover:shadow-violet-500/5 theme-transition"
                          >
                            <div className="flex items-start justify-between">
                              <button
                                type="button"
                                onClick={() => setSelectedBuddy(buddy)}
                                className="flex items-center gap-3 text-left"
                              >
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-400/20 text-sm font-bold text-violet-500 ring-1 ring-violet-500/20">
                                  {buddy.initials}
                                </div>

                                <div>
                                  <p className="font-semibold text-[var(--text-primary)]">
                                    {buddy.name}
                                  </p>

                                  <p className="mt-1 text-xs text-[var(--text-secondary)]">
                                    StudyBuddy
                                  </p>
                                </div>
                              </button>

                              <span className="rounded-full bg-emerald-500/10 px-2.5 py-1 text-xs font-semibold text-emerald-500">
                                {buddy.match}%
                              </span>
                            </div>

                            <div className="mt-5">
                              <p className="text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                                Subjects
                              </p>

                              <div className="mt-2 flex flex-wrap gap-2">
                                {buddy.subjects.map((subject) => (
                                  <span
                                    key={subject}
                                    className="rounded-full bg-[var(--surface-soft)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                                  >
                                    {subject}
                                  </span>
                                ))}
                              </div>
                            </div>

                            <div className="mt-5 grid grid-cols-2 gap-3">
                              <div className="rounded-xl bg-[var(--surface-soft)] p-3">
                                <p className="text-xs text-[var(--text-muted)]">
                                  Style
                                </p>
                                <p className="mt-1 text-sm font-medium text-[var(--text-primary)]">
                                  {buddy.mode}
                                </p>
                              </div>

                              <div className="rounded-xl bg-[var(--surface-soft)] p-3">
                                <p className="text-xs text-[var(--text-muted)]">
                                  Time
                                </p>
                                <p className="mt-1 text-sm font-medium text-[var(--text-primary)]">
                                  {buddy.availability}
                                </p>
                              </div>
                            </div>

                            <button
                              type="button"
                              onClick={() => handleConnect(buddy.name)}
                              className={`mt-5 w-full rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                                isConnected
                                  ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-500"
                                  : "bg-violet-600 text-white hover:bg-violet-500"
                              }`}
                            >
                              {isConnected ? "Request Sent ✓" : "Connect"}
                            </button>
                          </div>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>

              {/* Activity + Consistency */}
              <div className="mt-10 grid gap-6 lg:grid-cols-3">
                <div className="lg:col-span-2">
                  <div className="mb-5">
                    <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                      Recent Activity
                    </h2>

                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      A quick look at what's happening in your StudyBuddy
                      journey.
                    </p>
                  </div>

                  {!hasActivity ? (
                    <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-8 text-center theme-transition">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-cyan-500/10 text-2xl">
                        📝
                      </div>

                      <h3 className="mt-4 text-lg font-semibold text-[var(--text-primary)]">
                        No recent activity
                      </h3>

                      <p className="mt-2 text-sm text-[var(--text-secondary)]">
                        Your latest study actions will appear here.
                      </p>

                      <button
                        type="button"
                        onClick={toggleActivity}
                        className="mt-5 rounded-xl border border-[var(--border-strong)] bg-[var(--surface-soft)] px-5 py-2.5 text-sm font-medium text-[var(--text-primary)] transition hover:border-cyan-500/40 hover:bg-cyan-500/10"
                      >
                        Show Activity
                      </button>
                    </div>
                  ) : (
                    <div className="overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] theme-transition">
                      {recentActivities.map((activity, index) => (
                        <div
                          key={activity.title}
                          className={`flex items-center gap-4 p-5 ${
                            index !== recentActivities.length - 1
                              ? "border-b border-[var(--border)]"
                              : ""
                          }`}
                        >
                          <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--surface-soft)] text-lg">
                            {activity.icon}
                          </div>

                          <div className="min-w-0">
                            <p className="truncate font-medium text-[var(--text-primary)]">
                              {activity.title}
                            </p>

                            <p className="mt-1 text-sm text-[var(--text-muted)]">
                              {activity.time}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Study Consistency */}
                <div>
                  <div className="mb-5">
                    <h2 className="text-xl font-semibold text-[var(--text-primary)]">
                      Study Consistency
                    </h2>

                    <p className="mt-1 text-sm text-[var(--text-secondary)]">
                      Keep building your learning habit.
                    </p>
                  </div>

                  <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 theme-transition">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-[var(--text-secondary)]">
                          Current streak
                        </p>

                        <p className="mt-2 text-4xl font-bold text-[var(--text-primary)]">
                          5
                        </p>

                        <p className="mt-1 text-sm text-[var(--text-muted)]">
                          days
                        </p>
                      </div>

                      <div className="text-4xl">🔥</div>
                    </div>

                    <div className="mt-6">
                      <div className="mb-2 flex justify-between text-xs">
                        <span className="text-[var(--text-muted)]">
                          Weekly goal
                        </span>

                        <span className="font-medium text-[var(--text-primary)]">
                          4 / 5 sessions
                        </span>
                      </div>

                      <div className="h-2 overflow-hidden rounded-full bg-[var(--surface-soft)]">
                        <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />
                      </div>
                    </div>

                    <p className="mt-5 text-sm leading-6 text-[var(--text-secondary)]">
                      One more focused session this week and you'll hit your
                      goal.
                    </p>
                  </div>
                </div>
              </div>

              {/* Temporary Developer Testing Controls */}
              <div className="mt-12 rounded-2xl border border-amber-500/20 bg-amber-500/5 p-5">
                <div className="flex flex-col gap-4">
                  <div>
                    <p className="text-sm font-semibold text-amber-500">
                      Developer Testing Controls
                    </p>

                    <p className="mt-1 text-xs text-[var(--text-secondary)]">
                      Temporary controls for testing dashboard states. Remove
                      this section before production.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <button
                      type="button"
                      onClick={testNormalState}
                      className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:border-emerald-500/40 hover:bg-emerald-500/10"
                    >
                      Normal State
                    </button>

                    <button
                      type="button"
                      onClick={testEmptyState}
                      className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:border-violet-500/40 hover:bg-violet-500/10"
                    >
                      Test Empty State
                    </button>

                    <button
                      type="button"
                      onClick={testErrorState}
                      className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:border-rose-500/40 hover:bg-rose-500/10"
                    >
                      Test Error State
                    </button>

                    <button
                      type="button"
                      onClick={toggleActivity}
                      className="rounded-lg border border-[var(--border)] bg-[var(--surface)] px-4 py-2 text-sm font-medium text-[var(--text-primary)] transition hover:border-cyan-500/40 hover:bg-cyan-500/10"
                    >
                      Toggle Activity
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Buddy Profile Modal */}
      {selectedBuddy && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 px-4 py-6 backdrop-blur-sm"
          onClick={() => setSelectedBuddy(null)}
        >
          <div
            className="w-full max-w-lg rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-6 shadow-2xl theme-transition"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-500/20 to-cyan-400/20 font-bold text-violet-500 ring-1 ring-violet-500/20">
                  {selectedBuddy.initials}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-[var(--text-primary)]">
                    {selectedBuddy.name}
                  </h3>

                  <p className="mt-1 text-sm text-[var(--text-secondary)]">
                    {selectedBuddy.match}% compatibility
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setSelectedBuddy(null)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-[var(--surface-soft)] text-[var(--text-secondary)] transition hover:bg-rose-500/10 hover:text-rose-500"
                aria-label="Close profile"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Study Mode
                </p>

                <p className="mt-2 font-medium text-[var(--text-primary)]">
                  {selectedBuddy.mode}
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Availability
                </p>

                <p className="mt-2 font-medium text-[var(--text-primary)]">
                  {selectedBuddy.availability}
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Session Length
                </p>

                <p className="mt-2 font-medium text-[var(--text-primary)]">
                  {selectedBuddy.session}
                </p>
              </div>

              <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
                <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                  Match
                </p>

                <p className="mt-2 font-medium text-emerald-500">
                  {selectedBuddy.match}%
                </p>
              </div>
            </div>

            <div className="mt-6">
              <p className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                Subjects
              </p>

              <div className="mt-3 flex flex-wrap gap-2">
                {selectedBuddy.subjects.map((subject) => (
                  <span
                    key={subject}
                    className="rounded-full bg-violet-500/10 px-3 py-1.5 text-sm text-violet-500"
                  >
                    {subject}
                  </span>
                ))}
              </div>
            </div>

            <button
              type="button"
              onClick={() => {
                handleConnect(selectedBuddy.name);
                setSelectedBuddy(null);
              }}
              className={`mt-7 w-full rounded-xl px-4 py-3 text-sm font-medium transition ${
                connectionRequests.includes(selectedBuddy.name)
                  ? "border border-emerald-500/30 bg-emerald-500/10 text-emerald-500"
                  : "bg-violet-600 text-white hover:bg-violet-500"
              }`}
            >
              {connectionRequests.includes(selectedBuddy.name)
                ? "Request Sent ✓"
                : "Connect with StudyBuddy"}
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
