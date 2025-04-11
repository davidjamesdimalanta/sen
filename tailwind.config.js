/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      'sans': ['Albert Sans', 'ui-sans-serif', 'system-ui', 'sans-serif'],
    },
    extend: {
      fontWeight: {
        // Explicitly define font weights for Tailwind CSS v4
        'light': '300',
        'normal': '400',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
      },
      colors: {
        // Primary colors
        'primary': {
          'black': '#1e1e1e',
          'royal': '#5728A5',
          'white': '#FFFFFF',
        },
        // Neutral colors
        'neutral': {
          'void-grey': '#1e1e1e',
          'dark-grey': '#333333',
          'grey': '#636566',
          'light-grey': '#DEDBDB',
        },
        // Secondary colors
        'secondary': {
          'sky-blue': '#d4f0fc',
          'baby-blue': '#89d6fb',
          'meta-blue': '#02a9f7',
          'light-denim': '#02577a',
          'dark-denim': '#01303f',
        },
      },
      fontSize: {
        // Desktop typography
        'desktop': {
          'h1': ['36px', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '0' }],
          'h2': ['28px', { lineHeight: '1.3', fontWeight: '700', letterSpacing: '0' }],
          'h3': ['24px', { lineHeight: '1.4', fontWeight: '700', letterSpacing: '0' }],
          'subheading': ['18px', { lineHeight: '1.5', fontWeight: '700', letterSpacing: '0' }],
          'body': ['16px', { lineHeight: '1.6', fontWeight: '400', letterSpacing: '0' }],
        },
        // Mobile typography
        'mobile': {
          'h1': ['30px', { lineHeight: '1.2', fontWeight: '700', letterSpacing: '0' }],
          'h2': ['24px', { lineHeight: '1.3', fontWeight: '700', letterSpacing: '0' }],
          'h3': ['20px', { lineHeight: '1.4', fontWeight: '700', letterSpacing: '0' }],
          'subheading': ['16px', { lineHeight: '1.5', fontWeight: '700', letterSpacing: '0' }],
          'body': ['12px', { lineHeight: '1.6', fontWeight: '400', letterSpacing: '0' }],
        },
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      addUtilities({
        '.sen-gradient': {
          'background-image': 'linear-gradient(to right, #d4f0fc, #02a9f7)',
          'color': 'transparent',
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
          'display': 'inline-block',
          '-webkit-text-fill-color': 'transparent',
        },
      });
    },
  ],
} 