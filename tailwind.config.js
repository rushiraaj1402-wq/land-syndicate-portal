/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: {
          50: '#FAF9F6',
          100: '#F4F2EE',
          200: '#EAE7E0',
          300: '#DDD8CE',
        },
        corporate: {
          charcoal: '#0F172A',
          navy: '#1E293B',
          slate: '#334155',
          muted: '#64748B',
          subtle: '#94A3B8',
          border: '#E2DFD7',
          borderLight: '#ECE9E2',
          surface: '#FFFFFF',
          surfaceWarm: '#FAF9F6',
          surfaceMuted: '#F4F2EE',
          racingGreen: '#064E3B',
          racingGreenBg: '#F0FDF4',
          racingGreenBorder: '#BBF7D0',
        },
        bronze: {
          50: '#FDF8F3',
          100: '#FAECDC',
          200: '#F5D5B8',
          500: '#D97706',
          600: '#B45309',
          700: '#92400E',
          800: '#78350F',
          900: '#451A03',
        }
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Cinzel', 'Georgia', 'serif'],
        cinzel: ['Cinzel', 'serif'],
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'Menlo', 'Consolas', 'monospace'],
      }
    },
  },
  plugins: [],
}
