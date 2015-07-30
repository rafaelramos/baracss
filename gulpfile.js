var gulp = require('gulp'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css');

gulp.task('baraCSS:compress', function () {
  gulp.src('public/_baracss/baracss.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/styles'));
});