const elementRefs = {
  main: "main",
  themeToggleIcon: "#theme-icon",
  themeToggleButton: "#theme-toggle"
};

const state = {
  image: null,
  imageUrl: null,
  gridCols: 2,
  gridRows: 2,
  paperSize: 'a4',
  orientation: 'portrait',
  margins: 10,
  overlap: 5,
  showNumbers: true,
  showCutLines: true,
  theme: 'light'
};

const paperSizes = {
  a4: { width: 210, height: 297 },
  a3: { width: 297, height: 420 },
  letter: { width: 216, height: 279 },
  legal: { width: 216, height: 356 }
};


const getDeviceTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

const initializeTheme = () => {
  const savedTheme = localStorage.getItem('theme') || getDeviceTheme();
  state.theme = savedTheme;
  document.documentElement.classList.toggle('dark', savedTheme === 'dark');
  updateThemeIcon();
}

const updateThemeIcon = () => {
  const icon = document.querySelector(elementRefs.themeToggleIcon);
  if (state.theme === 'dark') {
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />';
  } else {
    icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />';
  }
}

const toggleTheme = () => {
  state.theme = state.theme === 'light' ? 'dark' : 'light';
  document.documentElement.classList.toggle('dark');
  localStorage.setItem('theme', state.theme);
  updateThemeIcon();
}

const addListeners = () => {
  document.querySelector(elementRefs.themeToggleButton).addEventListener('click', toggleTheme);
};

const init = () => {

  initializeTheme();
  includeEditorSection();
  addListeners();
};


document.addEventListener("DOMContentLoaded", init);
