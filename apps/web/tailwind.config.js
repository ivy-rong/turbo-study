// eslint-disable-next-line @typescript-eslint/no-var-requires
/** @type {import('tailwindcss').Config} */
const sharedConfig = require('@repo/tailwind-config')

module.exports = {
  ...sharedConfig,
  content: ['./*/**/*.{js,ts,jsx,tsx}', './index.html']
}
