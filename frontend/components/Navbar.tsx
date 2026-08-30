"use client";

import { useState } from "react";
import ThemeToggle from "@/components/ThemeToggle";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
        <nav className="theme-transition flex items-center justify-between rounded-2xl border bg-[var(--surface)]/80 px-4 py-3 shadow-2xl shadow-black/10 backdrop-blur-xl">
          {/* Logo */}
          <a
            href="/"
            className="group flex items-center gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="relative flex h-9 w-9 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-violet-500 via-blue-500 to-cyan-400 text-white shadow-lg shadow-violet-500/25">
              <span className="text-lg">✦</span>

              <span className="absolute inset-0 -translate-x-full bg-white/20 transition-transform duration-500 group-hover:translate-x-full" />
            </span>

            <span className="theme-text-primary text-lg font-bold tracking-tight">
              Study<span className="text-violet-400">Buddy</span>
            </span>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-1 md:flex">
            <NavLink href="#features">Features</NavLink>
            <NavLink href="#how-it-works">How it works</NavLink>
            <NavLink href="#about">About</NavLink>
          </div>

          {/* Desktop actions */}
          {/* Desktop actions */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />

            <button className="rounded-full px-4 py-2 text-sm font-medium text-zinc-400 transition hover:bg-white/5 hover:text-white">
              Sign in
            </button>

            <button className="rounded-full bg-gradient-to-r from-violet-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/20 transition duration-300 hover:-translate-y-0.5 hover:shadow-violet-600/40">
              Get started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileMenuOpen}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-zinc-300 transition hover:bg-white/10 md:hidden"
          >
            {mobileMenuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile navigation */}
        <div
          className={`theme-transition mt-2 overflow-hidden rounded-2xl border bg-[var(--surface)]/95 backdrop-blur-xl transition-all duration-300 md:hidden ${
            mobileMenuOpen
              ? "max-h-[500px] translate-y-0 opacity-100"
              : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
          }`}
        >
          <div className="flex flex-col p-3">
            <MobileNavLink
              href="#features"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </MobileNavLink>

            <MobileNavLink
              href="#how-it-works"
              onClick={() => setMobileMenuOpen(false)}
            >
              How it works
            </MobileNavLink>

            <MobileNavLink
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </MobileNavLink>

            <div className="my-2 h-px bg-white/10" />

            <button className="rounded-xl px-4 py-3 text-left text-sm font-medium text-zinc-300 transition hover:bg-white/5 hover:text-white">
              Sign in
            </button>

            <button className="mt-1 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-4 py-3 text-sm font-semibold text-white">
              Get started
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}

function NavLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      className="theme-text-muted rounded-full px-4 py-2 text-sm transition hover:bg-black/5 hover:text-[var(--text-primary)] dark:hover:bg-white/5"
    >
      {children}
    </a>
  );
}

function MobileNavLink({
  href,
  children,
  onClick,
}: {
  href: string;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <a
      href={href}
      onClick={onClick}
      className="theme-text-secondary rounded-xl px-4 py-3 text-sm transition hover:bg-black/5 hover:text-[var(--text-primary)] dark:hover:bg-white/5"
    >
      {children}
    </a>
  );
}
