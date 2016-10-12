var gulp = require('gulp');
var Hexo = require('hexo');
var hexo = new Hexo(process.cwd(), {});

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
