# Modulist CSS

The Modulist is a CSS design system


## Install
```sh
$ npm install --save @modulist/css
```

## Usage
import in your js:
```js
import "@modulist/css/dist/modulist.css";
```

## Development
The included source files are written in CSS but needed to be compiled using postcss. 

Create **postcss.config.js** in root folder:
```javascript
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
```

import in your js:
```js
import "@modulist/css/main.css";
```

## License
MIT
