module.exports = {
  purge: {
    enabled: true,
    content: ['../../Sources/**/Theme*.swift'],
  },
  theme: {
    extend: {
        colors: {
          'casper-blue': '#3eb0ef',
        }
    },
  },
  variants: {},
  plugins: [
    require('@tailwindcss/typography')
  ],
}
