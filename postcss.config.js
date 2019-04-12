const pkg = require('./package');
const banner = `Modulist CSS v${pkg.version} \n(c) 2019 SimplyStack \nReleased under the MIT License.`;

module.exports = {
  plugins: [
    require('autoprefixer'),
    require('postcss-import'),
    require('postcss-nested'),
    require('postcss-preset-env')({
      features: {
        'custom-media-queries': true,
        'custom-properties': false,
      },
    }),
    require('cssnano')({ preset: 'default' }),
    require('postcss-banner')({ banner: banner, important: true }),
  ]
};
