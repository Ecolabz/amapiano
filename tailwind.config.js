/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './sections/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      scale: {
        98: '0.98',
      },
      colors: {
        AP: {
          blue: {
            10: '#CBD0E7',
            25: ' rgba(151, 162, 208, 0.5)',
            50: '#AAB3D7',
            100: '#97A2D0',
            200: '#8C84FD',
            300: '#5B54B4',
            400: '#5C58A6',
            500: '#4C4C94',
          },
          grey: {
            100: '#434261',
            200: '#231C3B',
            300: '#050707',
          },
        },
      },
      fontFamily: {
        montserat: ['Montserrat', 'sans-serif'],
        sansPro: ['Source Sans Pro', 'sans-serif'],
      },
      backgroundImage: {
        homeHero: "linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/assets/heroBanner.png')",
        'event-lifestyle': "linear-gradient(to bottom, rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url('/assets/events.svg')",
        slider: 'linear-gradient(to bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5))',
        'events-sahdow': "url('/assets/events-shadow_rectangle.svg')",
        'about-sahdow': "url('/assets/about-shadow-rectangle.svg')",
        'home-sahdow': "url('/assets/home-shadow-rectangle.svg')",
        'home-sahdow-2': "url('/assets/home-shadow-rectangle-2.svg')",
      },
      boxShadow: {
        navShadow: '0px 30px 45px rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
