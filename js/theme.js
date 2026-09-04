(function () {
  const root = document.documentElement;
  const buttons = document.querySelectorAll('.theme-toggle');
  const savedTheme = localStorage.getItem('theme');
  const initialTheme = savedTheme === 'light' ? 'light' : 'dark';

  function updateTheme(theme) {
    const isLight = theme === 'light';
    root.dataset.theme = theme;
    buttons.forEach(function (button) {
      button.setAttribute('aria-pressed', String(isLight));
      button.setAttribute(
        'aria-label',
        isLight ? 'Activer le thème sombre' : 'Activer le thème clair'
      );
      button.title = isLight ? 'Activer le thème sombre' : 'Activer le thème clair';
    });
  }

  updateTheme(initialTheme);

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      const nextTheme = root.dataset.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', nextTheme);
      updateTheme(nextTheme);
    });
  });
})();
