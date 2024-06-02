module.exports = {
  mode: 'jit',
  theme: {
    extend: {
      screens: {
        'sm': '600px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
      },
    },
  },
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  plugins: [],
}
