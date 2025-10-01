/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Primary color palette
        'mocha-mousse': '#A89078',
        'deep-navy': '#1A3C5E',
        'ruby-red': '#D1495B',
        'honey-gold': '#F4A261',
        'soft-cream': '#F8F1E9',
        
        // Secondary color palette
        'serene-teal': '#4ABDAC',
        'vibrant-green': '#52B788',
        'soft-lavender': '#A8A4FF',
        'light-gray': '#F0F0F0',
        'charcoal': '#333333',
      },
      fontFamily: {
        'vazir': ['var(--font-vazir)', 'sans-serif'],
        'sans': ['var(--font-vazir)', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #4ABDAC 0%, #52B788 100%)',
        'gradient-secondary': 'linear-gradient(135deg, #A89078 0%, #4ABDAC 100%)',
        'gradient-accent': 'linear-gradient(135deg, #D1495B 0%, #F4A261 100%)',
        'gradient-soft': 'linear-gradient(135deg, #F8F1E9 0%, #FFFFFF 50%, #F0F0F0 100%)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'fade-in-left': 'fadeInLeft 0.6s ease-out',
        'fade-in-right': 'fadeInRight 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'bounce-slow': 'bounce 2s infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        fadeInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        float: {
          '0%, 100%': {
            transform: 'translateY(0px)',
          },
          '50%': {
            transform: 'translateY(-20px)',
          },
        },
        glow: {
          '0%': {
            boxShadow: '0 0 5px #4ABDAC, 0 0 10px #4ABDAC, 0 0 15px #4ABDAC',
          },
          '100%': {
            boxShadow: '0 0 10px #4ABDAC, 0 0 20px #4ABDAC, 0 0 30px #4ABDAC',
          },
        },
      },
      boxShadow: {
        'custom': '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'custom-lg': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'glow': '0 0 20px rgba(74, 189, 172, 0.3)',
        'glow-lg': '0 0 40px rgba(74, 189, 172, 0.4)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      screens: {
        'xs': '475px',
        '3xl': '1600px',
      },
      zIndex: {
        '60': '60',
        '70': '70',
        '80': '80',
        '90': '90',
        '100': '100',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
