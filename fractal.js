'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

const mandelbrot = require('@frctl/mandelbrot'); // require the Mandelbrot theme module

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot({
    skin: "orange",
    "nav": ["docs", "components"]
    // any other theme configuration values here
});

fractal.web.theme(myCustomisedTheme); // tell Fractal to use the configured theme by default

/* Set the title of the project */
fractal.set('project.title', 'MyriamTousignant.com Style Guide');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/spress-site/src');

/* Tell Fractal where the static build will be generated */
fractal.web.set('builder.dest', __dirname + '/spress-site/build/styleguide');

/* Tell Fractal where the static assests are stored */
fractal.web.set('static.path', __dirname + '/spress-site/src/assets');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/styleguide/docs');

const twigAdapter = require('@frctl/twig');
fractal.components.engine(twigAdapter);
fractal.components.set('ext', '.twig');
fractal.components.set('default.preview', '@preview');

fractal.web.set('server.port', 8081); // default is null