module.exports = {
  purge: [],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    colors: {
      primary: 'var(--primary-color)',
      'primary-lighten': 'var(--primary-color-lighten)',
      'primary-darken': 'var(--primary-color-darken)',
      secondary: 'var(--secondary-color)',
      'secondary-lighten': 'var(--secondary-color-lighten)',
      'secondary-darken': 'var(--secondary-color-darken)',
      success: 'var(--success-color)',
      danger: 'var(--danger-color)',
      warning: 'var(--warning-color)',
    },
    fontFamily: {
      sans: ['Space Grotesk', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
