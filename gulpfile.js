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

    lftpParams = ['-f', 'cmd-lftp'],
    
    //backstopTestSuites = 'test/backstop/**/*.json',
    backstopTestSuites = 'test/backstop/backstop-pages.json',
    backstopTestBitmaps = 'backstop_data/bitmaps_test*/**',
    backstopTestHtmlReports = 'backstop_data/html_report**/**',
    backstopTestCIReports = 'backstop_data/ci_report**/**',
    
    sassFiles = {
        src: 'themes/myriamtousignant-com/stylesheets/main.scss',    
        dest: 'themes/myriamtousignant-com/source/css/'
    };


/* Tasks exposed to the CLI */
gulp.task('clean', clean);
gulp.task('sass', compile);
gulp.task('generate', ['sass'], generate);
gulp.task('deploy', ['generate'], deploy);
gulp.task('test', ['clean', 'generate'], test);

gulp.task('reference', function(done){
    backstopRunner('reference', done);
});

/* Helper methods */

/* BackstopJS wrapper */
function backstop(task, file, done){
    spawn('backstop', [
        task,
        '--configPath=' + file.path
    ], {'stdio' : 'inherit'})
    .on('close', function(code) {
        done(code === 1);
    });
};

function backstopRunner(task, done) {
    var files = [];
        
    /* TODO: need to move the server initialization into another task */
    connect.server({ 
        port: port,
        root: rootPath
    });
    /* TODO */
    
    gulp.src([backstopTestSuites])
        .pipe(tap(function(file){
            files.push(file);
        }))
        .on('end', function() {
            async.rejectSeries(files, function(file, finished) {
                backstop(task, file, finished); 
            }, function(errors) {
                connect.serverClose();
                done(errors);
            });
        });
} 

/* Cleans the backstop working files */
function clean() {
    return del([backstopTestBitmaps, backstopTestHtmlReports, backstopTestCIReports]);
};

/* Compile resources */
function compile() {
   return gulp.src(sassFiles.src)
    .pipe(sass())
    .pipe(gulp.dest(sassFiles.dest)); 
};

/* Generate the Hexo site */
function generate(done) {
    hexo.init().then(function() {
        hexo.call('generate', {watch: false}).then(function() {
            done();
        });
    }).catch(function(err) {
        hexo.exit(err);
        done(err);
    });
};

/* Deploy the site using lftp-sync */
function deploy(done) {
    const spawn = require('child_process').spawn;
    const lftp = spawn('lftp', lftpParams);
    
    lftp.stdout.on('data', (data) => {
        console.log(`${data}`);
    });
    
    lftp.stderr.on('data', (data) => {
        console.log(`stderr: ${data}`); 
    });
    
    lftp.on('close', (code) => {
       console.log(`child process exited with code ${code}`) ;
       done(code);
    });
};

/* Regression tests */
function test(){
    backstopRunner('test', function(errors) {
        if(errors) {
            process.exit(1);
        }
    });
};
