import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const [dark, setDark] = useState(
    localStorage.getItem('theme') === 'dark'
  );

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      className="bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-3 py-1 rounded transition"
    >
      {dark ? '🌙' : '☀️'}
    </button>
  );
};

export default ThemeToggle;
