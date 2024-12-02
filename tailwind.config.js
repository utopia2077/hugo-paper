/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./layouts/**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'wenkai': ['LXGW WenKai', 'sans-serif'],
        'wenkai-mono': ['LXGW WenKai Mono', 'monospace'],
      },
      typography: ({ theme }) => ({
        DEFAULT: {
          css: {
            code: {
              /** FIXME 颜色也太丑了 */
              backgroundColor: theme('colors.slate.100'),
              borderRadius: theme('borderRadius.sm'),
              paddingTop: theme('padding[1]'),
              paddingRight: theme('padding[1.5]'),
              paddingBottom: theme('padding[1]'),
              paddingLeft: theme('padding[1.5]'),
            },
            'code::before': {
              content: 'normal',
            },
            'code::after': {
              content: 'normal',
            },
          },
        },
      }),
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
