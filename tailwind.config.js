/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Vlastní neonové barvy
        'pulse-blue': '#00F0FF', // Neonově modrá
        'pulse-green': '#39FF14', // Neonově zelená
        // Základní tmavé pozadí
        'dark-bg': '#0F172A', // Tmavá modř
        'dark-card': '#1E293B', // Tmavší karta
      },
      fontFamily: {
        // Moderní bezpatkový font
        sans: ['Inter', 'sans-serif'], 
      },
      // Stíny pro neonový efekt
      boxShadow: {
        'neon-blue': '0 0 10px rgba(0, 240, 255, 0.7)',
        'neon-green': '0 0 10px rgba(57, 255, 20, 0.7)',
      }
    },
  },
  plugins: [],
}