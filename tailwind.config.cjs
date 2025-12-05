module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'neon-yellow': '#CCFF00',
        'dark-charcoal': '#1a1a1a',
        'light-bg': '#f8f8f8',
      },
      backgroundImage: {
        'diagonal-stripe': 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)',
        'diagonal-stripe-yellow': 'repeating-linear-gradient(45deg, transparent, transparent 10px, #CCFF00 10px, #CCFF00 20px)',
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: [],
}
