module.exports = {
  content: [
    './index.html',
    './src/**/*.{ts,tsx,js,jsx}'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: '#0b1020',
        card: 'rgba(255,255,255,0.04)'
      },
      backdropBlur: {
        xs: '2px'
      }
    }
  },
  plugins: [],
}
