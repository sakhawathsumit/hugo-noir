/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  darkMode: 'class',
  content: ["./layouts/**/*.html", "./content/**/*.{html,md}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        'bg-primary-light': colors.white,
        'text-primary-light': colors.neutral[800],
        'text-secondary-light': colors.neutral[600],
        'border-primary-light': colors.neutral[300],
        'accent-light': colors.sky[600],

        'bg-primary-dark': '#121212',
        'bg-secondary-dark': '#1a1a1a',
        'bg-tertiary-dark': '#1a1a1a',
        'text-primary-dark': colors.neutral[100],
        'text-secondary-dark': colors.neutral[400],
        'border-primary-dark': colors.neutral[700],
        'accent-dark': colors.sky[500],
      },
    },
  },

  plugins: [
    plugin(function ({ addBase, theme }) {
      addBase({
        // Target ONLY links inside text (paragraphs and lists) to protect the Navbar
        'p a, li a': {
          color: theme('colors.accent-light') + ' !important',
          backgroundColor: theme('colors.sky.50') + ' !important', // Soft blue highlight background
          textDecoration: 'underline !important',
          textDecorationColor: theme('colors.accent-light') + ' !important',
          textDecorationThickness: '2px !important',
          textUnderlineOffset: '4px !important',
          padding: '2px 4px', // Adds a little breathing room around the background
          borderRadius: '4px',
          fontWeight: '500 !important', // Makes the text slightly bolder
          transition: 'all 0.2s ease-in-out',
          '&:hover': {
            backgroundColor: theme('colors.sky.100') + ' !important', // Darkens highlight on hover
            color: theme('colors.sky.800') + ' !important',
          },
        },
        // Dark Mode Highlight for text links
        '.dark p a, .dark li a': {
          color: theme('colors.accent-dark') + ' !important',
          backgroundColor: 'rgba(14, 165, 233, 0.15) !important', // Transparent blue for dark mode
          textDecorationColor: theme('colors.accent-dark') + ' !important',
          '&:hover': {
            backgroundColor: 'rgba(14, 165, 233, 0.25) !important',
            color: theme('colors.sky.200') + ' !important',
          },
        },
      })
    })
  ],
} 