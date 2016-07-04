'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  // place code for your default task here
});

gulp.task('sass', function () {
  return gulp.src(['./bower_components/Materialize/sass/\**/\*.scss', './_sass/\**/\*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./_maps'))
    .pipe(gulp.dest('./_css'));
});

gulp.task('sass:watch', function () {
  gulp.watch(['./_sass/\**/\*.scss'], ['sass']);
});
