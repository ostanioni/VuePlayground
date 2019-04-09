
const devMode = process.env.NODE_ENV !== 'production'
let $SOURCEMAP = devMode ? true : false
 
module.exports = {
 sourceMap: $SOURCEMAP,
 ident: 'postcss',
 plugins: [
   require('postcss-import')(),
   require('postcss-flexbugs-fixes')(),
   require('postcss-preset-env')({
     stage: 3,
     autoprefixer: { flexbox: 'no-2009', grid: true, },
     features: {
     'nesting-rules': true,
     'color-mod-function': { unresolved: 'warn', }
     }
   }),
   require('cssnano')( {"preset": ["advanced", { "discardComments": {"removeAll": true,} }], } ),
 ],  
}
/*const devMode = process.env.NODE_ENV !== 'production';
const GridKissParams = {
  grid: true,
  optimize: true,
  sourceMap: true
}
const plugins = [
  require('postcss-grid-kiss')({ grid: true, optimize: true, }),
  require('cssnano')({ preset: [ "advanced", { "discardComments": {"removeAll": true} } ] })
]

module.exports = {
  syntax: 'postcss-scss',
  parser: 'postcss-scss',
  plugins,
}
*/
/**
 * 
 * require('autoprefixer')({grid: true}),
 module.exports = {
   plugins: {
    'postcss-import': {},
    'postcss-preset-env': {},
    'cssnano': { 
      "preset": [ "advanced", { "discardComments": {"removeAll": true} } ]
    }
  }
 }
 */
