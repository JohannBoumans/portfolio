const plugin = require(`tailwindcss/plugin`);
const defaultTheme = require(`tailwindcss/defaultTheme`);

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/**/*.{js,ts,jsx,tsx}`],
  theme: {
    extend: {
      boxShadow: {
        'button-disabled': `0px 0px 0px 3px rgba(7, 161, 197, 0.10)`,
      },
      container: {
        center: true,
        // padding: `32px`,
        screens: {
          '2xl': `1280px`,
        },
      },
      colors: {
        primary: `#000000`,
        secondary: `#86868B`,
        red: `#ff4912`,
        // red: `#fe9474`,
        teal: {
          50: `#EBFBFE`,
          75: `#B5EFFC`,
          100: `#4FD1C5`,
          300: `#07A1C5`,
          400: `#068CAC`,
          500: `#057894`,
        },
        gray: {
          5: `#e2e8f0`,
          10: `#F7FAFC`,
          25: `#FAFAFA`,
          30: `#EDF2F7`,
          50: `#E2E8F0`,
          100: `#E5E5E6`,
          200: `#EAEAEB`,
          400: `#BBBBBE`,
        },
        green: {
          500: `#38A169`,
        },
        purple: {
          100: `#FAF5FF`,
          200: `#E9D8FD`,
          600: `#9F7AEA`,
        },
      },
      screens: {
        sm: `32em`,
        md: `48em`,
        lg: `64em`,
        xl: `80em`,
        '2xl': `96em`,
      },
      fontSize: {
        xs: `0.75rem`,
        sm: `0.875rem`,
        md: `1rem`,
        lg: `1.125rem`,
        xl: `1.25rem`,
        '2xl': `1.5rem`,
        '3xl': `2rem`,
        '4xl': `2.5rem`,
        '5xl': `3rem`,
        '6xl': `4rem`,
        '7xl': `5rem`,
        '8xl': `6rem`,
        '9xl': `7rem`,
      },
      fontFamily: {
        sans: [`Inter var, sans-serif`, ...defaultTheme.fontFamily.sans],
        helvetica: [`Helvetica Neue`],
      },
      animation: {
        enter: `enter 3s ease-in-out forwards`,
        exit: `exit 3s ease-in-out forwards`,
      },
      keyframes: {
        enter: {
          '0%': { transform: `translateY(100%)` },
          '100%': { transform: `translateY(0)` },
        },
        exit: {
          '0%': { transform: `translateY(0)` },
          '100%': { transform: `translateY(-100%)` },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [
    require(`@tailwindcss/container-queries`),
    require(`@tailwindcss/typography`),
    plugin(({ matchUtilities, theme }) => {
      matchUtilities(
        {
          'animation-delay': (value) => {
            return {
              'animation-delay': value,
            };
          },
        },
        {
          values: theme(`transitionDelay`),
        },
      );
    }),
  ],
};
