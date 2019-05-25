const purgecss = require('@fullhuman/postcss-purgecss')({

  // Specify the paths to all of the template files in your project 
  content: [
    './src/**/*.html',
    './src/**/*.jsx',
    // etc.
  ],

  defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
})

module.exports = {
  plugins: [
    require('tailwindcss'),
    purgecss
  ]
}

// module.exports = {
//   plugins: [
//     require('tailwindcss'),
//     ...process.env.NODE_ENV === 'production'
//       ? [purgecss]
//       : []
//   ]
// }