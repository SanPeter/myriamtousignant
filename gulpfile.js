var 
    spawn = require('child_process').spawn,
    async = require('async'),
    del = require('del'),
    
    gulp = require('gulp'),
    connect = require('gulp-connect'),
    sass = require('gulp-sass'),
    tap = require('gulp-tap'),
    
    Hexo = require('hexo'),
    hexo = new Hexo(process.cwd(), {}),
    
    port = 8082,
    rootPath = 'public',
    backstopTestSuites = 'test/backstop/**/*.json',
    backstopTestBitmaps = 'backstop_data/bitmaps_test*/**',
    backstopTestHtmlReports = 'backstop_data/html_report**/**',
    backstopTestCIReports = 'backstop_data/ci_report**/**';

gulp.task('backstop-clean', function(done) {
    del.sync([backstopTestBitmaps, backstopTestHtmlReports, backstopTestCIReports], function(err) {
        if(err) {
            throw err;
        } 
        done();
    });
});

gulp.task('lftp-sync', ['hexo-generate'], function(cb) {
    const spawn = require('child_process').spawn;
    const lftp = spawn('lftp', ['-f', 'cmd-lftp']);
    
    lftp.stdout.on('data', (data) => {
        console.log(`${data}`);
    });
    
    lftp.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`); 
    });
    
    lftp.on('close', (code) => {
       console.log(`child process exited with code ${code}`) ;
       cb(code);
    });
});

gulp.task('hexo-generate', function(cb) {
    hexo.init().then(function() {
        hexo.call('generate', {watch: false}).then(function() {
            cb();
        });
    }).catch(function(err) {
        hexo.exit(err);
        cb(err);
    });
});

gulp.task('sass', function() {
   return gulp.src('themes/myriamtousignant-com/stylesheets/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('themes/myriamtousignant-com/source/css/')); 
});

gulp.task('test', function(done){
    var 
        files = [],
        
        backstop = function backstop(file, callback){
            spawn('backstop', [
                'test',
                '--configPath=' + file.path
            ], {'stdio' : 'inherit'})
            .on('close', function(code) {
                callback(null, code === 0);
            });
        };
            
    connect.server({ 
        port: port,
        root: rootPath
    });
    
    gulp.src([backstopTestSuites])
        .pipe(tap(function(file){
            files.push(file);
        }))
        .on('end', function() {
            async.rejectSeries(files, function(file, finished) {
                backstop(file, finished); 
            }, function(errors) {
                connect.serverClose();
                if(errors && errors.length > 0) {
                    done('Backstop reported failed tests ' + (errors.map(function(f) {
                     return f.relative;
                    }).join(', ')));
                } else {
                    done();
                }
            });
        });
});