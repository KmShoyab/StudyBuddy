"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type Connection = {
  id: number;
  name: string;
  initials: string;
  match: number;
  subjects: string[];
  mode: string;
  status: "connected" | "incoming" | "sent";
};

const initialConnections: Connection[] = [
  {
    id: 1,
    name: "Abid Abdullah",
    initials: "AA",
    match: 94,
    subjects: ["Python", "Data Structures"],
    mode: "Focused",
    status: "connected",
  },
  {
    id: 2,
    name: "Imzamamul Haque",
    initials: "IH",
    match: 89,
    subjects: ["Algorithms", "Database"],
    mode: "Discussion",
    status: "connected",
  },
  {
    id: 3,
    name: "Jihad Mia",
    initials: "JM",
    match: 86,
    subjects: ["Java", "Theory of Computing"],
    mode: "Balanced",
    status: "incoming",
  },
  {
    id: 4,
    name: "Nafis Ahmed",
    initials: "NA",
    match: 84,
    subjects: ["C++", "Algorithms"],
    mode: "Focused",
    status: "sent",
  },
];

export default function ConnectionsPage() {
  const [connections, setConnections] =
    useState<Connection[]>(initialConnections);

  const [activeTab, setActiveTab] = useState<
    "connected" | "incoming" | "sent"
  >("connected");

  const filteredConnections = connections.filter(
    (connection) => connection.status === activeTab
  );

  const acceptRequest = (id: number) => {
    setConnections((current) =>
      current.map((connection) =>
        connection.id === id
          ? { ...connection, status: "connected" }
          : connection
      )
    );
  };

  const declineRequest = (id: number) => {
    setConnections((current) =>
      current.filter((connection) => connection.id !== id)
    );
  };

  const cancelRequest = (id: number) => {
    setConnections((current) =>
      current.filter((connection) => connection.id !== id)
    );
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />

      <main className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Page Header */}
        <section className="mb-8">
          <div className="mb-2 inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400">
            Your Study Network
          </div>

          <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Connections
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
            Manage your study partners, incoming requests, and connection
            invitations.
          </p>
        </section>

        {/* Tabs */}
        <div className="mb-8 overflow-x-auto">
          <div className="flex min-w-max gap-2 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-2">
            <button
              type="button"
              onClick={() => setActiveTab("connected")}
              className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                activeTab === "connected"
                  ? "bg-violet-500 text-white"
                  : "text-[var(--text-secondary)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
              }`}
            >
              My Connections
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("incoming")}
              className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                activeTab === "incoming"
                  ? "bg-violet-500 text-white"
                  : "text-[var(--text-secondary)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
              }`}
            >
              Incoming Requests
            </button>

            <button
              type="button"
              onClick={() => setActiveTab("sent")}
              className={`rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                activeTab === "sent"
                  ? "bg-violet-500 text-white"
                  : "text-[var(--text-secondary)] hover:bg-[var(--surface-soft)] hover:text-[var(--text-primary)]"
              }`}
            >
              Sent Requests
            </button>
          </div>
        </div>

        {/* Connection Grid */}
        {filteredConnections.length > 0 ? (
          <section className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredConnections.map((connection) => (
              <article
                key={connection.id}
                className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-violet-500/30 hover:shadow-lg"
              >
                {/* Profile */}
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500/20 to-cyan-500/20 text-sm font-bold text-violet-400">
                    {connection.initials}
                  </div>

                  <div className="min-w-0 flex-1">
                    <h2 className="truncate text-base font-semibold">
                      {connection.name}
                    </h2>

                    <div className="mt-1 flex items-center gap-2">
                      <span className="text-xs text-[var(--text-muted)]">
                        Compatibility
                      </span>

                      <span className="text-xs font-semibold text-emerald-400">
                        {connection.match}%
                      </span>
                    </div>
                  </div>
                </div>

                {/* Subjects */}
                <div className="mt-5">
                  <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--text-muted)]">
                    Subjects
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {connection.subjects.map((subject) => (
                      <span
                        key={subject}
                        className="rounded-full border border-[var(--border)] bg-[var(--surface-soft)] px-2.5 py-1 text-xs text-[var(--text-secondary)]"
                      >
                        {subject}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Study Mode */}
                <div className="mt-5 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-3">
                  <p className="text-xs text-[var(--text-muted)]">
                    Study Mode
                  </p>

                  <p className="mt-1 text-sm font-medium">
                    {connection.mode}
                  </p>
                </div>

                {/* Actions */}
                <div className="mt-5">
                  {connection.status === "connected" && (
                    <button
                      type="button"
                      className="w-full rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold transition hover:bg-[var(--surface-soft)]"
                    >
                      Open Profile
                    </button>
                  )}

                  {connection.status === "incoming" && (
                    <div className="grid grid-cols-2 gap-2">
                      <button
                        type="button"
                        onClick={() => acceptRequest(connection.id)}
                        className="rounded-xl bg-emerald-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-emerald-400"
                      >
                        Accept
                      </button>

                      <button
                        type="button"
                        onClick={() => declineRequest(connection.id)}
                        className="rounded-xl border border-[var(--border)] px-4 py-2.5 text-sm font-semibold transition hover:bg-[var(--surface-soft)]"
                      >
                        Decline
                      </button>
                    </div>
                  )}

                  {connection.status === "sent" && (
                    <button
                      type="button"
                      onClick={() => cancelRequest(connection.id)}
                      className="w-full rounded-xl border border-rose-500/20 bg-rose-500/10 px-4 py-2.5 text-sm font-semibold text-rose-400 transition hover:bg-rose-500/20"
                    >
                      Cancel Request
                    </button>
                  )}
                </div>
              </article>
            ))}
          </section>
        ) : (
          <section className="rounded-2xl border border-dashed border-[var(--border-strong)] bg-[var(--surface)] px-6 py-16 text-center">
            <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-500/10 text-2xl">
              🤝
            </div>

            <h2 className="mt-5 text-xl font-semibold">
              Nothing here yet
            </h2>

            <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[var(--text-secondary)]">
              You don't have any connections in this section yet. Find
              students who match your study style and start learning
              together.
            </p>

            <a
              href="/find"
              className="mt-6 inline-flex rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
            >
              Find StudyBuddies
            </a>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
}