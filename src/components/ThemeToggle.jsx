import { Moon, Sun } from 'lucide-react';

export default function ThemeToggle({ isDark, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 right-6 z-50 p-4 rounded-full bg-[var(--bg-card)] border border-[var(--border-card)] backdrop-blur-md shadow-lg hover:scale-110 hover:border-accent active:scale-95 transition-all duration-300 group flex items-center justify-center overflow-hidden"
      aria-label="Toggle theme"
    >
      <div className="relative w-6 h-6 flex items-center justify-center">
        <Sun 
          className={`absolute text-accent transition-all duration-500 transform ${isDark ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0'}`} 
          size={24} 
        />
        <Moon 
          className={`absolute text-accent transition-all duration-500 transform ${!isDark ? 'opacity-0 scale-50 -rotate-90' : 'opacity-100 scale-100 rotate-0'}`} 
          size={24} 
        />
      </div>
    </button>
  );
}
