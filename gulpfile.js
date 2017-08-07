const config = require('./gulp/config');

const gulp = require('gulp');
const less = require('gulp-less');
const concat = require('gulp-concat');

gulp.task('default', ['less', 'watch']);

gulp.task('watch', function () {
  gulp.watch(config.less.watch, ['less']);
});

gulp.task('less', function () {
  gulp.src(config.less.src)
    .pipe(less())
    .pipe(concat(config.less.out))
    .pipe(gulp.dest(config.less.dest))
});
