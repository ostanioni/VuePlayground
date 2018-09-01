const devMode = process.env.NODE_ENV !== 'production';
const GridKissParams = {
  grid: true,
  optimize: true,
  sourceMap: true
}
const plugins = [
  require('postcss-grid-kiss')({optimize: true}),
  require('autoprefixer')({grid: true}),
  require('cssnano')({preset: 'default'})
]

module.exports = {
  syntax: 'postcss-scss',
  parser: 'postcss-scss',
  plugins,
}
