import { ref } from 'vue';

const darkMode = () => {
  const isDark = ref(false);

  const currentTheme = localStorage.getItem('theme');
  const prefersDarkScheme = window.matchMedia('(prefers-color-scheme: dark)');

  if (currentTheme === 'dark' || (!currentTheme && prefersDarkScheme.matches)) {
    isDark.value = true;
    document.body.classList.add('dark-theme');
  } else {
    isDark.value = false;
    document.body.classList.remove('dark-theme');
  }

  const toggleDarkMode = () => {
    isDark.value = !isDark.value;
    if (isDark.value === true) {
      document.body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  };

  return { isDark, toggleDarkMode };
};

export default darkMode;
