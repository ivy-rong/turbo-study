/** @type {import('tailwindcss'Config} */
const sharedConfig = require('@repo/tailwind-config')

module.exports = {
  ...sharedConfig,
  content: ['./*/**/*.{js,ts,jsx,tsx}']
}
