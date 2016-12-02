module.exports = function(grunt){
    grunt.initConfig({
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
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-stylus');
    
    grunt.registerTask('default', function() {
        grunt.log.writeln('default Grunt task');
    });
};