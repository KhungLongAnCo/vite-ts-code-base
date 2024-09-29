const COLORS = {
  primary: 'var(--primary)',
  baseBackground: 'var(--baseBackground)'
}

/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: COLORS,
    extend: {}
  },
  plugins: []
}
