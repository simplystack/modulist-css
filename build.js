const fs = require('fs');
const postcss = require('postcss');
const { plugins } = require('./postcss.config');

fs.readFile('./main.css', (err, css) => {
  postcss(plugins)
    .process(css, {from: './main.css', to: 'dist/modulist.css', map: { inline: false }})
    .then(result => {
      fs.writeFile('dist/modulist.css', result.css, () => true);
      if (result.map) {
        fs.writeFile('dist/modulist.css.map', result.map, () => true);
      }

      console.log('Succeeded');
    })
    .catch(err => console.log(err));
});
