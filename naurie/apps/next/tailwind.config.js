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
        primary: {
          purple: '#6B5B95',
          indigo: '#667eea',
          violet: '#764ba2',
        },
        neutral: {
          black: '#0A0A0A',
          darkGray: '#1A1A1A',
          mediumGray: '#4A4A4A',
          lightGray: '#9CA3AF',
          offWhite: '#F9FAFB',
        },
        semantic: {
          success: '#10B981',
          error: '#EF4444',
          warning: '#F59E0B',
          info: '#3B82F6',
        },
      },
      fontFamily: {
        primary: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      animation: {
        'fadeInUp': 'fadeInUp 0.6s ease-out',
        'scaleIn': 'scaleIn 0.6s ease-out',
        'slideInLeft': 'slideInLeft 0.6s ease-out',
        'slideInRight': 'slideInRight 0.6s ease-out',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        'gradient-hero': 'radial-gradient(ellipse at top, rgba(102, 126, 234, 0.1) 0%, transparent 50%)',
        'gradient-section': 'linear-gradient(180deg, #FFFFFF 0%, #F9FAFB 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)',
      },
      boxShadow: {
        'soft': '0 4px 14px rgba(102, 126, 234, 0.25)',
        'hover': '0 6px 20px rgba(102, 126, 234, 0.35)',
        'card': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 12px 32px rgba(0, 0, 0, 0.15)',
      },
      borderRadius: {
        'xl': '16px',
        '2xl': '20px',
        '3xl': '24px',
      },
    },
  },
  plugins: [],
}