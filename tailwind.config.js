/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        warmBlack: '#0D0F10',
        deepBlack: '#08090A',
        warmSand: '#E3DAB3',
        softSand: '#CABBA8',
        terracotta: '#AC4526',
        deepTerracotta: '#7E301D',
        offWhite: '#F5F1E7',
        warmWhite: '#FFFDF7',
        borderMuted: 'rgba(13, 15, 16, 0.08)',
        borderSubtle: 'rgba(13, 15, 16, 0.15)',
      },
      fontFamily: {
        sans: [
          'var(--font-geist)',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          'sans-serif',
        ],
      },
      letterSpacing: {
        tracked: '0.14em',
        widestLg: '0.24em',
      },
      borderRadius: {
        xs: '4px',
        sm: '6px',
        DEFAULT: '8px',
        md: '10px',
        lg: '14px',
        xl: '18px',
        '2xl': '24px',
      },
      boxShadow: {
        subtle: '0 1px 2px 0 rgba(13, 15, 16, 0.04)',
        card: '0 16px 36px -16px rgba(13, 15, 16, 0.07)',
        floating: '0 24px 50px -18px rgba(13, 15, 16, 0.12)',
      },
    },
  },
  plugins: [],
};
