/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        base: {
          1: '#090A10',
          2: '#0F1013',
        },
        accent: {
          blue: '#3B44F6',
          purple: '#7B3FF6',
          cyan: '#1CD2FF',
        },
        text: {
          primary: '#E6E9F3',
          muted: '#9AA0AF',
        },
        success: '#1FFF9E',
      },
      fontFamily: {
        heading: ['"Plus Jakarta Sans"', 'sans-serif'],
        body: ['Inter', 'Satoshi', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #3B44F6 0%, #7B3FF6 50%, #1CD2FF 100%)',
        'gradient-radial': 'radial-gradient(circle, var(--tw-gradient-stops))',
      },
      animation: {
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'marquee': 'marquee 30s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 68, 246, 0.5), 0 0 10px rgba(123, 63, 246, 0.3)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 68, 246, 0.8), 0 0 30px rgba(123, 63, 246, 0.6)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}

