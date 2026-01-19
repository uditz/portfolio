/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a', // Almost black
        primary: '#ef4444', // Red-500
        secondary: '#dc2626', // Red-600
        accent: '#fca5a5', // Red-300
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['"VT323"', 'monospace'], // Pixel/Minecraft style
      },
      dropShadow: {
        'glow': '0 0 10px rgba(239, 68, 68, 0.5)', // Red glow
      },
    },
  },
  plugins: [],
}
