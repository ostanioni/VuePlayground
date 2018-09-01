const devMode = process.env.NODE_ENV !== 'production';
const GridKissParams = {
  grid: true,
  optimize: true,
  sourceMap: true
}
const plugins = [
  require('postcss-grid-kiss'),
  require('autoprefixer'),
  require('cssnano')
]
module.exports = {
  plugins
}
