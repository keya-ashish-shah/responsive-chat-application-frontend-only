// // postcss.config.js
// module.exports = {
//   plugins: [
//     require('@tailwindcss/postcss'),
//     require('autoprefixer'),
//     // ... other plugins if needed
//   ],
// }
// postcss.config.js
import tailwindcss from '@tailwindcss/postcss'
import autoprefixer from 'autoprefixer'

export default {
  plugins: [
    tailwindcss,
    autoprefixer,
  ],
}