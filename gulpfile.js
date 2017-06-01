var gulp = require('gulp'),
    shell = require('gulp-shell'),
    del = require('del'),
    runSequence = require('run-sequence');

var buildDir = 'build';

gulp.task('server', shell.task('npm run server'));

gulp.task('build', function(cb) {
    runSequence(
        'build:clean',
        'build:app',
        'build:assets',
        cb
    );
})

gulp.task('build:clean', function() {
    return del(buildDir);
});

gulp.task('build:app', shell.task('npm run build'));

gulp.task('build:assets', function() {
    return gulp.src('src/assets/**/*')
        .pipe(gulp.dest(buildDir + '/assets'));
});