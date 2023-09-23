/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        useShadow: '0 1px 11px rgba(168, 168, 168, 0.27);'
      },
      flex: {
        'flex-1/3': '33.33333333%'
      },
      screens: {
        mobile: '375px',
        tablet: '768px',
        // max
        destop: '1200px',
        //min
        use400: '400px',
        use600: '600px',
        use700: '700px',
        use800: '800px',
        use900: '900px',
        use1000: '1000px'
      }
    }
  },
  plugins: []
}
