/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Cybersecurity theme — deep dark backgrounds with neon accents
        bg: {
          DEFAULT: '#0a0e14',
          900: '#0a0e14',
          800: '#0d1117',
          700: '#11161f',
          600: '#161c28',
          500: '#1c2330',
        },
        accent: {
          DEFAULT: '#00ff9d',
          400: '#33ffb5',
          500: '#00ff9d',
          600: '#00cc7e',
          700: '#009966',
        },
        cyan: {
          400: '#22d3ee',
          500: '#06b6d4',
        },
        warning: {
          DEFAULT: '#fbbf24',
          500: '#fbbf24',
        },
        danger: {
          DEFAULT: '#ef4444',
          500: '#ef4444',
        },
        slate: {
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
        'blink': 'blink 1s step-end infinite',
        'glow-pulse': 'glowPulse 3s ease-in-out infinite',
        'float': 'float 6s ease-in-out infinite',
        'scan': 'scan 4s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 20px rgba(0, 255, 157, 0.15)' },
          '50%': { boxShadow: '0 0 40px rgba(0, 255, 157, 0.35)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100%)' },
        },
      },
    },
  },
  plugins: [],
};
