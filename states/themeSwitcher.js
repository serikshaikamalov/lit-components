export const THEME_NAME = {
  dark: 'dark',
  light: 'light',
}

export const isDarkMode = () =>
  window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches

const getSystemTheme = () => (isDarkMode() ? THEME_NAME.dark : THEME_NAME.light)

class ThemeSwitcher extends EventTarget {
  constructor() {
    super()
    this.set(localStorage.getItem('theme'))
  }
  set(_theme) {
    this.theme = _theme
    if (!this.theme) {
      this.theme = "auto"
    }
    localStorage.setItem('theme', this.theme)
    if (this.theme === "auto") {
      const systemTheme = getSystemTheme()
      document.documentElement.setAttribute('data-theme', systemTheme)
    } else {
      document.documentElement.setAttribute('data-theme', this.theme)
    }

    // Displatch the current state
    this.dispatchEvent(
      new CustomEvent('updated', {
        detail: { theme: this.theme },
      })
    )
  }
  toggle() {
    if (this.theme === THEME_NAME.dark) {
      this.set(THEME_NAME.light)
    } else {
      this.set(THEME_NAME.dark)
    }
  }
}
const themeSwithcherState = new ThemeSwitcher()

if (window.matchMedia) {
  var colorSchemeQuery = window.matchMedia('(prefers-color-scheme: dark)')
  colorSchemeQuery.addEventListener('change', () => {
    themeSwithcherState.set(getSystemTheme())
  })
}

export { themeSwithcherState }
