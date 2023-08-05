import LocaleProvider from "../src/core/contexts/LocaleContext/LocaleProvider"
import ThemeProvider from "../src/core/contexts/ThemeContext/ThemeProvider"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider>
      <LocaleProvider>
        <Story />
      </LocaleProvider>
    </ThemeProvider>)
]