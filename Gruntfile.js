module.exports = function (grunt) {
  grunt.initConfig({
    copy: {
      main: {
        expand: true,
        cwd: 'spress-site/src/assets/',
        src: '**',
        dest: 'spress-site/build/'
      },
      deploy: {
        files: [
          { expand: true, cwd: 'spress-site/build/', src: '**', dest: 'docs/' },
          {
            expand: true,
            cwd: 'spress-site/build/',
            src: '**',
            dest: 'static/'
          },
          {
            expand: true,
            cwd: 'spress-site/build/',
            src: 'index.html',
            dest: 'pages/'
          }
        ]
      }
    },
    stylus: {
      compile: {
        options: {
          'include css': true,
          compress: true,
          linenos: false,
          'resolve url': true,
          paths: ['spress-site/src/assets/']
        },
        files: {
          'spress-site/src/assets/css/main.css':
            'spress-site/src/stylesheets/main.styl'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-stylus');

  grunt.registerTask('default', function () {
    grunt.log.writeln('default Grunt task');
  });

  grunt.registerTask('generate', ['stylus', 'copy:main']);
  grunt.registerTask('deploy', ['stylus', 'copy:main', 'copy:deploy']);
};
