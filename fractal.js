'use strict';

/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

/* Set the title of the project */
fractal.set('project.title', 'Fractal Test Component Library');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/spress-site/src');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

const twigAdapter = require('@frctl/twig');
fractal.components.engine(twigAdapter);
fractal.components.set('ext', '.twig');
fractal.components.set('default.preview', '@preview');

fractal.web.set('server.port', 8081); // default is null