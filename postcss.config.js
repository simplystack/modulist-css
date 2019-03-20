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
  ]
};
