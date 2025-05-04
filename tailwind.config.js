/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderColor: {
        DEFAULT: 'var(--border)',
      },
      outlineColor: {
        DEFAULT: 'var(--ring)',
      },
      colors: {
        border: 'var(--border)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        ring: 'var(--ring)',
        light: {
          100: 'var(--color-light-100)',
          400: 'var(--color-light-400)',
          600: 'var(--color-light-600)',
          800: 'var(--color-light-800)'
        },
        dark: {
          100: 'var(--color-dark-100)',
          200: 'var(--color-dark-200)',
          300: 'var(--color-dark-300)'
        },
        primary: {
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)'
        },
        success: {
          100: 'var(--color-success-100)',
          200: 'var(--color-success-200)'
        },
        destructive: {
          100: 'var(--color-destructive-100)',
          200: 'var(--color-destructive-200)'
        }
      }
    },
  },
  plugins: [],
} 