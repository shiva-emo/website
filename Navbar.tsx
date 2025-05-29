import ThemeToggle from './ThemeToggle';

export default function Navbar() {
  return (
    <nav className="flex justify-between items-center p-4 bg-white/70 dark:bg-gray-900/80 shadow-md sticky top-0 z-10 backdrop-blur-md">
      <h1 className="text-2xl font-bold text-violet-700 dark:text-violet-300">Daily Office Tools 🚀</h1>
      <ThemeToggle />
    </nav>
  );
}