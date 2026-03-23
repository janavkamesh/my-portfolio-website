/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        manrope: ['Manrope', 'sans-serif'],
        jakarta: ['"Plus Jakarta Sans"', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      keyframes: {
        'scroll-left': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      animation: {
        'scroll-left': 'scroll-left 30s linear infinite',
      },
      colors: {
        bgMain: '#F9F9F9',
        navBg: 'rgba(255, 255, 255, 0.7)',
        navBorder: 'rgba(229, 229, 229, 0.15)',
        textDark: 'rgba(23, 23, 23, 0.84)',
        emerald: {
          600: '#059669',
          700: '#047857',
        },
        darkBtn: '#1B1B1B',
        lightBtnText: '#FAF7F6',
        heading: '#2D3435',
        muted: '#596061',
        mutedLight: '#737373',
        grayBg: '#EAE7E7',
        brandBlack: '#1C1B1B',
        brandDarkMuted: '#3C4A42',
        cardBg: '#F6F3F2',
        pureWhite: '#FFFFFF',
        brandGreen: '#006D47',
        brandGreenDark: '#006C49',
        darkSection: '#0C0F0F',
        darkFooter: '#030712',
        zinc400: '#A1A1AA',
        zinc300: '#D4D4D8',
        zinc500: '#71717A',
        zinc800: '#27272A',
        zinc900: '#18181B',
      }
    },
  },
  plugins: [],
}
