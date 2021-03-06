var gulp = require('gulp'),
    plumber = require('gulp-plumber'),
    babel = require('gulp-babel'),
    server = require('gulp-server-livereload'),
    sequence = require('run-sequence'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch');


var Files = {
    es6: ['./es6/**/*.js'],
    es5: ['./es5/**/*.js']
};
Files.all = Files.es6.concat(Files.es5);

function run_babel () {
    return gulp.src(Files.all)
            .pipe(plumber())
            .pipe(babel())
            .pipe(concat('babel-app.js'))
            .pipe(gulp.dest('./www/'));
}

gulp.task('babel', run_babel);

gulp.task('watch', function () {
    watch(Files.all, run_babel);
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
