module.exports = function(grunt){
    grunt.initConfig({
        copy: {
          main: {
            expand: true,
            cwd: 'spress-site/src/assets/',
            src: '**',
            dest: 'spress-site/build/'
          },
          deploy: {
              expand: true,
              cwd: 'spress-site/build/',
              src: '**',
              dest: 'docs/'
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
                    'spress-site/src/assets/css/main.css' : 'spress-site/src/stylesheets/main.styl' 
                }
            }
        },
        
        shell: {
           spress_generate: {
                command: 'spress-site/vendor/bin/spress site:build --source="spress-site/"'
            }
        }
    });
    
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    
    grunt.registerTask('default', function() {
        grunt.log.writeln('default Grunt task');
    });
    
    grunt.registerTask('generate', ['shell:spress_generate', 'stylus', 'copy:main']);
    grunt.registerTask('deploy', ['shell:spress_generate', 'stylus', 'copy:main', 'copy:deploy']);
};