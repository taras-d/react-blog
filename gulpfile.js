var gulp = require('gulp'),
    shell = require('gulp-shell'),
    del = require('del'),
    processhtml = require('gulp-processhtml'),
    runSequence = require('run-sequence');

var buildDir = 'build';

gulp.task('server', shell.task('npm run server'));

gulp.task('build', function(cb) {
    runSequence(
        'build:clean',
        'build:app',
        'build:assets',
        'build:index',
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

gulp.task('build:index', function() {
    return gulp.src('src/index.html')
        .pipe(processhtml({
            data: { buildDate: new Date() }
        }))
        .pipe(gulp.dest(buildDir))
});