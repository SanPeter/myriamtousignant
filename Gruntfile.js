module.exports = function(grunt){
    grunt.initConfig({
        clean: ['backstop_data/bitmaps_test*/**', 'backstop_data/html_report*/**', 'backstop_data/ci_report*/**'],
        
        connect: {
            server: {
                options: {
                    port: 8082,
                    base: 'public'
                }
            }
        },
        
        stylus: {
            compile: {
                options: {
                  'include css': true,
                  compress: false,
                  linenos: true,
                  paths: ['themes/myriamtousignant-com/source/']
                },
                files: {
                    'themes/myriamtousignant-com/source/css/main.css' : 'themes/myriamtousignant-com/stylesheets/main.styl' 
                }
            }
        },
        
        shell: {
            hexo_clean: {
                command: 'hexo clean'
            },
            hexo_generate: {
                command: 'hexo generate'
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
    
    grunt.registerTask('clean-all', ['clean', 'shell:hexo_clean']);
    
    grunt.registerTask('reference', [
        'connect:server',
        'shell:reference:test/backstop/backstop-pages.json', 
        'shell:reference:test/backstop/backstop-posts.json',
        'shell:reference:test/backstop/backstop-projets.json'
    ]);
    grunt.registerTask('test', [
        'connect:server',
        'shell:test:test/backstop/backstop-pages.json', 
        'shell:test:test/backstop/backstop-posts.json',
        'shell:test:test/backstop/backstop-projets.json'
    ]);
};