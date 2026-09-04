"use client";

import { useState } from "react";
import Link from "next/link";
import ThemeToggle from "@/components/ThemeToggle";

export default function SettingsPage() {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [connectionNotifications, setConnectionNotifications] =
    useState(true);
  const [messageNotifications, setMessageNotifications] = useState(true);
  const [profileVisibility, setProfileVisibility] = useState(true);

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
    }, 2500);
  };

  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--text-primary)] theme-transition">
      <div className="mx-auto w-full max-w-5xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/dashboard"
            className="mb-4 inline-flex items-center text-sm text-[var(--text-muted)] transition hover:text-violet-400"
          >
            ← Back to Dashboard
          </Link>

          <h1 className="text-3xl font-bold tracking-tight">
            Settings
          </h1>

          <p className="mt-2 text-sm text-[var(--text-secondary)]">
            Manage your StudyBuddy account and preferences.
          </p>
        </div>

        <div className="space-y-6">
          {/* Account */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-lg sm:p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold">Account</h2>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Your basic account information.
              </p>
            </div>

            <div className="space-y-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-medium"
                >
                  Full name
                </label>

                <input
                  id="name"
                  type="text"
                  defaultValue="KM Shoyabur Rahman"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium"
                >
                  Email address
                </label>

                <input
                  id="email"
                  type="email"
                  defaultValue="student@example.com"
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm outline-none transition focus:border-violet-500/50 focus:ring-2 focus:ring-violet-500/10"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="mb-2 block text-sm font-medium"
                >
                  Password
                </label>

                <button
                  type="button"
                  className="rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] px-4 py-3 text-sm font-medium transition hover:border-violet-500/30 hover:bg-violet-500/10"
                >
                  Change password
                </button>
              </div>
            </div>
          </section>

          {/* Appearance */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-lg sm:p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold">Appearance</h2>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Choose how StudyBuddy looks for you.
              </p>
            </div>

            <div className="flex flex-col gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-sm font-medium">Theme</p>
                <p className="mt-1 text-xs text-[var(--text-muted)]">
                  Choose dark, light, or system theme.
                </p>
              </div>

              <ThemeToggle />
            </div>
          </section>

          {/* Notifications */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-lg sm:p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold">Notifications</h2>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Control which notifications you receive.
              </p>
            </div>

            <div className="space-y-4">
              <SettingToggle
                title="Email notifications"
                description="Receive important updates through email."
                enabled={emailNotifications}
                onChange={() =>
                  setEmailNotifications((current) => !current)
                }
              />

              <SettingToggle
                title="Connection requests"
                description="Get notified when someone wants to connect with you."
                enabled={connectionNotifications}
                onChange={() =>
                  setConnectionNotifications((current) => !current)
                }
              />

              <SettingToggle
                title="New messages"
                description="Get notified when a StudyBuddy sends you a message."
                enabled={messageNotifications}
                onChange={() =>
                  setMessageNotifications((current) => !current)
                }
              />
            </div>
          </section>

          {/* Privacy */}
          <section className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-5 shadow-lg sm:p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold">Privacy</h2>
              <p className="mt-1 text-sm text-[var(--text-muted)]">
                Control how other students can discover you.
              </p>
            </div>

            <SettingToggle
              title="Profile visibility"
              description="Allow other students to find your profile and send connection requests."
              enabled={profileVisibility}
              onChange={() =>
                setProfileVisibility((current) => !current)
              }
            />
          </section>

          {/* Danger Zone */}
          <section className="rounded-2xl border border-red-500/20 bg-[var(--surface)] p-5 shadow-lg sm:p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold text-red-400">
                Danger Zone
              </h2>

              <p className="mt-1 text-sm text-[var(--text-muted)]">
                These actions can permanently affect your account.
              </p>
            </div>

            <button
              type="button"
              className="rounded-xl border border-red-500/30 bg-red-500/5 px-4 py-3 text-sm font-medium text-red-400 transition hover:bg-red-500/10"
              onClick={() => {
                alert(
                  "Account deletion will be connected to the backend later."
                );
              }}
            >
              Delete account
            </button>
          </section>

          {/* Save */}
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-end">
            {saved && (
              <p className="text-sm text-emerald-400">
                ✓ Settings saved
              </p>
            )}

            <button
              type="button"
              onClick={handleSave}
              className="rounded-xl bg-violet-500 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition hover:-translate-y-0.5 hover:bg-violet-600"
            >
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}

function SettingToggle({
  title,
  description,
  enabled,
  onChange,
}: {
  title: string;
  description: string;
  enabled: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-xl border border-[var(--border)] bg-[var(--surface-soft)] p-4">
      <div className="min-w-0">
        <p className="text-sm font-medium">{title}</p>

        <p className="mt-1 text-xs leading-5 text-[var(--text-muted)]">
          {description}
        </p>
      </div>

      <button
        type="button"
        role="switch"
        aria-checked={enabled}
        aria-label={title}
        onClick={onChange}
        className={`relative h-6 w-11 shrink-0 rounded-full transition ${
          enabled
            ? "bg-violet-500"
            : "bg-[var(--surface-elevated)]"
        }`}
      >
        <span
          className={`absolute top-1 h-4 w-4 rounded-full bg-white transition ${
            enabled ? "left-6" : "left-1"
          }`}
        />
      </button>
    </div>
  );
}