module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.js',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
      'image': "url('../storage/image.jpg')",
      
     })},
  },
  variants: {
    extend: {
      visibility: ['hover','focus'],
    },
  },
  plugins: [],
}
