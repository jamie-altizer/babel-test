var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    babel = require('gulp-babel'),
    server = require('gulp-server-livereload'),
    sequence = require('run-sequence');


var Files = {
    es6: ['./es6/*.js']
};

gulp.task('babel', function () {
    return gulp.src(Files.es6)
            .pipe(plumber())
            .pipe(babel())
            .pipe(gulp.dest('./www/'));
});

gulp.task('watch', function () {
    gulp.watch(Files.es6, ['babel']);
});

gulp.task('server', function () {
    return gulp.src('www')
            .pipe(server({
                port: 9000,
                livereload: true,
                directoryListing: false,
                open: true
            }));
});

gulp.task('default', function (cb) {
    sequence('babel', 'watch', 'server');
});
