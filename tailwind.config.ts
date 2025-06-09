import type { Config } from 'tailwindcss'
// import defaultTheme from 'tailwindcss/defaultTheme' // No longer needed here for basic theming

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      // Extensions for specific one-off utilities or variants can go here,
      // but core theme (colors, fonts, spacing) is now primarily in globals.css via @theme.
    },
  },
  plugins: [
    // Typography plugin is loaded via @plugin in globals.css
  ],
}
export default config 