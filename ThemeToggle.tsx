import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      className="px-4 py-2 rounded-full bg-violet-200 dark:bg-gray-600 text-violet-900 dark:text-violet-100 font-semibold shadow hover:scale-110 transition"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "🌞 Light Mode" : "🌚 Dark Mode"}
    </button>
  );
}