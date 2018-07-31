/*
const postcss  = require('postcss'),
      gridkiss = require('postcss-grid-kiss');

postcss([ gridkiss({ optimize: false }) ])
    .process(css, { from: './TheMainLayout.css', to: './compiled.css' })
    .then(function (result) {
        fs.writeFileSync('compiled.css', result.css);
        if( result.map ) fs.writeFileSync('compiled.css.map', result.map);
    });
*/
//const autoprefixer = require('autoprefixer')
const postcss = require('postcss')
const gridkiss = require('postcss-grid-kiss')
const fs = require('fs')

fs.readFile('./TheMainLayout.css', (err, css) => {
  postcss([gridkiss({ optimize: true })])
    .process(css, { from: './TheMainLayout.css', to: './app.css' })
    .then(result => {
      fs.writeFile('./app.css', result.css, () => true)
      if ( result.map ) {
        fs.writeFile('./app.css.map', result.map, () => true)
      }
    })
})