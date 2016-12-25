module.exports = function(grunt){
    grunt.initConfig({
        clean: ['backstop_data/bitmaps_test*/**', 'backstop_data/html_report*/**', 'backstop_data/ci_report*/**'],
        
        connect: {
            server: {
                options: {
                    port: 8082,
                    base: 'spress-site/build'
                }
            }
        },
        
        stylus: {
            compile: {
                options: {
                  'include css': true,
                  compress: false,
                  linenos: true,
                  'resolve url': true,
                  paths: ['spress-site/src/content/']
                },
                files: {
                    'spress-site/src/content/css/main.css' : 'spress-site/src/stylesheets/main.styl' 
                }
            }
        },
        
        shell: {
           spress_generate: {
                command: 'spress-site/vendor/bin/spress site:build --source="spress-site/"'
            },
            reference: {
                command: configFile => 'backstop reference --configPath=' + configFile 
            },
            test: {
                command: configFile => 'backstop test --configPath=' + configFile
            }
        }
        
    });
    
    grunt.loadNpmTasks('grunt-shell');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-contrib-stylus');
    
    grunt.registerTask('default', function() {
        grunt.log.writeln('default Grunt task');
    });
    
    grunt.registerTask('clean-all', ['clean']);
    grunt.registerTask('generate', ['stylus', 'shell:spress_generate']);
    
    grunt.registerTask('reference', [
        'generate',
        'connect:server',
        'shell:reference:test/backstop/backstop-pages.json', 
        'shell:reference:test/backstop/backstop-posts.json',
        'shell:reference:test/backstop/backstop-projets.json'
    ]);
    grunt.registerTask('reference-pages', [
        'generate',
        'connect:server',
        'shell:reference:test/backstop/backstop-pages.json'
    ]);
    grunt.registerTask('reference-posts', [
        'generate',
        'connect:server',
        'shell:reference:test/backstop/backstop-posts.json'
    ]);
    grunt.registerTask('reference-projets', [
        'generate',
        'connect:server',
        'shell:reference:test/backstop/backstop-projets.json'
    ]);
    grunt.registerTask('test', [
        'generate',
        'connect:server',
        'shell:test:test/backstop/backstop-pages.json', 
        'shell:test:test/backstop/backstop-posts.json',
        'shell:test:test/backstop/backstop-projets.json'
    ]);
    grunt.registerTask('test-pages', [
        'generate',
        'connect:server',
        'shell:test:test/backstop/backstop-pages.json' 
    ]);
    grunt.registerTask('test-posts', [
        'generate',
        'connect:server',
        'shell:test:test/backstop/backstop-posts.json'
    ]);
    grunt.registerTask('test-projets', [
        'generate',
        'connect:server',
        'shell:test:test/backstop/backstop-projets.json'
    ]);
};