"use client";

import { useState } from "react";
import Link from "next/link";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

type Notification = {
  id: number;
  type: "connection" | "accepted" | "recommendation" | "profile";
  title: string;
  message: string;
  time: string;
  read: boolean;
};

const initialNotifications: Notification[] = [
  {
    id: 1,
    type: "connection",
    title: "New connection request",
    message: "Jihad Mia wants to connect with you.",
    time: "10 minutes ago",
    read: false,
  },
  {
    id: 2,
    type: "accepted",
    title: "Connection accepted",
    message: "Imzamamul haque accepted your connection request.",
    time: "1 hour ago",
    read: false,
  },
  {
    id: 3,
    type: "recommendation",
    title: "New StudyBuddy recommendation",
    message: "We found a learner who matches your study preferences.",
    time: "3 hours ago",
    read: true,
  },
  {
    id: 4,
    type: "profile",
    title: "Complete your profile",
    message: "Your profile is 85% complete. Add a little more information.",
    time: "Yesterday",
    read: true,
  },
];

const notificationIcons = {
  connection: "👋",
  accepted: "✓",
  recommendation: "✨",
  profile: "👤",
};

export default function NotificationsPage() {
  const [notifications, setNotifications] = useState(initialNotifications);

  const unreadCount = notifications.filter(
    (notification) => !notification.read,
  ).length;

  const markAsRead = (id: number) => {
    setNotifications((current) =>
      current.map((notification) =>
        notification.id === id ? { ...notification, read: true } : notification,
      ),
    );
  };

  const markAllAsRead = () => {
    setNotifications((current) =>
      current.map((notification) => ({
        ...notification,
        read: true,
      })),
    );
  };

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--text-primary)]">
      <Navbar />

      <main className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <section className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-medium text-violet-400">Stay updated</p>

            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Notifications
            </h1>

            <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--text-secondary)] sm:text-base">
              Keep track of connection requests, recommendations, and important
              StudyBuddy updates.
            </p>
          </div>

          {unreadCount > 0 && (
            <button
              type="button"
              onClick={markAllAsRead}
              className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface)] px-4 py-2.5 text-sm font-semibold text-[var(--text-primary)] transition hover:border-violet-500/30 hover:bg-violet-500/10 sm:w-auto"
            >
              Mark all as read
            </button>
          )}
        </section>

        {/* Notification summary */}
        <section className="mt-8 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-sm">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-sm text-[var(--text-muted)]">
                Notification center
              </p>

              <h2 className="mt-1 text-xl font-semibold">
                {unreadCount === 0
                  ? "You're all caught up"
                  : `${unreadCount} unread ${
                      unreadCount === 1 ? "notification" : "notifications"
                    }`}
              </h2>
            </div>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-500/10 text-xl">
              🔔
            </div>
          </div>
        </section>

        {/* Notifications */}
        <section className="mt-6 space-y-3">
          {notifications.length === 0 ? (
            <div className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-6 py-14 text-center">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-violet-500/10 text-2xl">
                🔔
              </div>

              <h2 className="mt-5 text-xl font-semibold">
                No notifications yet
              </h2>

              <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-[var(--text-secondary)]">
                When something important happens in your StudyBuddy account, you
                will see it here.
              </p>

              <Link
                href="/find"
                className="mt-6 inline-flex rounded-xl bg-violet-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-400"
              >
                Find a StudyBuddy
              </Link>
            </div>
          ) : (
            notifications.map((notification) => (
              <button
                key={notification.id}
                type="button"
                onClick={() => markAsRead(notification.id)}
                className={`group flex w-full items-start gap-4 rounded-2xl border p-4 text-left transition-all duration-300 sm:p-5 ${
                  notification.read
                    ? "border-[var(--border)] bg-[var(--surface)]"
                    : "border-violet-500/20 bg-violet-500/[0.05] shadow-sm shadow-violet-500/5"
                } hover:-translate-y-0.5 hover:border-violet-500/30`}
              >
                {/* Icon */}
                <div
                  className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-lg ${
                    notification.read
                      ? "bg-[var(--surface-soft)]"
                      : "bg-violet-500/10"
                  }`}
                >
                  {notificationIcons[notification.type]}
                </div>

                {/* Content */}
                <div className="min-w-0 flex-1">
                  <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
                    <h3 className="font-semibold text-[var(--text-primary)]">
                      {notification.title}
                    </h3>

                    {!notification.read && (
                      <span className="w-fit rounded-full bg-violet-500/10 px-2.5 py-1 text-xs font-medium text-violet-400">
                        New
                      </span>
                    )}
                  </div>

                  <p className="mt-1 text-sm leading-6 text-[var(--text-secondary)]">
                    {notification.message}
                  </p>

                  <p className="mt-2 text-xs text-[var(--text-muted)]">
                    {notification.time}
                  </p>
                </div>

                {/* Unread indicator */}
                {!notification.read && (
                  <div className="mt-2 h-2.5 w-2.5 shrink-0 rounded-full bg-violet-500" />
                )}
              </button>
            ))
          )}
        </section>
      </main>

      <Footer />
    </div>
  );
}
