"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light" | "system";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => {
    const savedTheme = localStorage.getItem("studybuddy-theme") as Theme | null;

    if (
      savedTheme === "dark" ||
      savedTheme === "light" ||
      savedTheme === "system"
    ) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;

    const applyTheme = (selectedTheme: Theme) => {
      const isDark =
        selectedTheme === "dark" ||
        (selectedTheme === "system" &&
          window.matchMedia("(prefers-color-scheme: dark)").matches);

      root.classList.toggle("dark", isDark);
      root.classList.toggle("light", !isDark);
    };

    applyTheme(theme);

    localStorage.setItem("studybuddy-theme", theme);

    if (theme === "system") {
      const mediaQuery = window.matchMedia(
        "(prefers-color-scheme: dark)"
      );

      const handleChange = () => applyTheme("system");

      mediaQuery.addEventListener("change", handleChange);

      return () => {
        mediaQuery.removeEventListener("change", handleChange);
      };
    }
  }, [theme]);

  return (
    <div className="flex items-center rounded-full border border-[var(--border)] bg-[var(--surface-soft)] p-1 shadow-sm">
      <ThemeButton
        active={theme === "system"}
        label="System theme"
        onClick={() => setTheme("system")}
      >
        🖥️
      </ThemeButton>

      <ThemeButton
        active={theme === "light"}
        label="Light theme"
        onClick={() => setTheme("light")}
      >
        ☀️
      </ThemeButton>

      <ThemeButton
        active={theme === "dark"}
        label="Dark theme"
        onClick={() => setTheme("dark")}
      >
        🌙
      </ThemeButton>
    </div>
  );
}

function ThemeButton({
  active,
  label,
  onClick,
  children,
}: {
  active: boolean;
  label: string;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      aria-label={label}
      aria-pressed={active}
      onClick={onClick}
      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm transition-all duration-300 ${
        active
          ? "bg-violet-500/20 text-violet-300 shadow-sm"
          : "text-[var(--text-muted)] hover:bg-black/5 hover:text-[var(--text-primary)] dark:hover:bg-white/5"
      }`}
    >
      {children}
    </button>
  );
}