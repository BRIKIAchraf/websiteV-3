/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'surface-container-low': '#f6f3ef',
        'on-error-container': '#93000a',
        'tertiary-container': '#97b0ff',
        'on-surface-variant': '#a68a2d',
        'surface-container': '#f0ede9',
        'on-primary-fixed': '#241a00',
        'surface-container-high': '#eae8e4',
        'on-primary-fixed-variant': '#574500',
        'surface-container-lowest': '#ffffff',
        'error-container': '#ffdad6',
        'primary-fixed-dim': '#e9c349',
        'error': '#ba1a1a',
        'surface-container-highest': '#e5e2de',
        'primary-fixed': '#ffe088',
        'on-secondary-container': '#a68a2d',
        'on-tertiary-container': '#254188',
        'on-surface': '#735c00',
        'secondary': '#a68a2d',
        'on-secondary': '#ffffff',
        'outline-variant': '#d4af37',
        'secondary-fixed': '#e5e2e1',
        'on-tertiary-fixed': '#00174b',
        'surface': '#fcf9f5',
        'on-primary-container': '#554300',
        'surface-bright': '#fcf9f5',
        'secondary-container': '#e2dfde',
        'inverse-primary': '#e9c349',
        'tertiary': '#415ba4',
        'inverse-surface': '#31302e',
        'surface-tint': '#d4af37',
        'primary': '#d4af37',
        'outline': '#a68a2d',
        'on-background': '#735c00',
        'tertiary-fixed': '#dbe1ff',
        'background': '#fcf9f5',
        'primary-container': '#d4af37',
        'on-primary': '#ffffff',
        'surface-dim': '#dcdad6',
        'surface-variant': '#e5e2de',
        'on-secondary-fixed-variant': '#a68a2d',
        'on-tertiary': '#ffffff',
        'tertiary-fixed-dim': '#b4c5ff',
        'on-error': '#ffffff',
        'on-tertiary-fixed-variant': '#27438a',
        'on-secondary-fixed': '#735c00',
        'inverse-on-surface': '#f3f0ec',
        'secondary-fixed-dim': '#c8c6c5',
        'gold': {
          DEFAULT: '#d4af37',
          light: '#f1e5ac',
          dark: '#a68a2d',
        },
        'charcoal': {
          DEFAULT: '#1c1c1a',
          light: '#2a2a2a',
          dark: '#121212',
        }
      },
      fontFamily: {
        'headline': ['Cinzel', 'serif'],
        'body': ['Cormorant Garamond', 'serif'],
        'label': ['Manrope', 'sans-serif'],
        'interface': ['Manrope', 'sans-serif'],
        'calligraphy': ['"Aref Ruqaa"', 'serif']
      },
      borderRadius: {
        'DEFAULT': '0.25rem',
        'lg': '0.5rem',
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
        'full': '9999px'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-33.33%)' }
        }
      },
      animation: {
        marquee: 'marquee 20s linear infinite'
      }
    },
  },
  plugins: [],
};
