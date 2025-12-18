import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  content: [
    './app/components/**/*.{js,vue,ts}',
    './app/layouts/**/*.vue',
    './app/pages/**/*.vue',
    './app/plugins/**/*.{js,ts}',
    './app/app.vue',
    './app/error.vue'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#4299f0',
        'background-light': '#f6f7f8',
        'background-dark': '#101922',
        'surface-dark': '#111a22',
        'card-dark': '#192633',
        'border-dark': '#233648',
        'text-secondary': '#92adc9'
      },
      fontFamily: {
        display: ['Newsreader', 'serif'],
        sans: ['Noto Sans', 'sans-serif']
      },
      borderRadius: {
        DEFAULT: '0.25rem',
        lg: '0.5rem',
        xl: '0.75rem',
        full: '9999px'
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
} satisfies Config
