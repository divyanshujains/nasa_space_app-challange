import { Sun } from "lucide-react";
import { useEffect } from "react";

export const ThemeToggle = () => {
  useEffect(() => {
    // Always set dark mode and never change
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }, []);

  return (
    <button
      disabled
      className="fixed max-sm:hidden top-8 right-4 z-50 p-2 rounded-full bg-black/40 cursor-not-allowed"
    >
      <Sun className="h-6 w-6 text-yellow-300" />
    </button>
  );
};
