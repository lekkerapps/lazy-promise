var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var paths = require('../paths');
var compileOptions = require('../compileOptions');
var runSequence = require('run-sequence');

gulp.task('copy', function() {
  return gulp.src(paths.buildDir + "/**")
    .pipe(gulp.dest(paths.distDir)) &&
    gulp.src(paths.src)
      .pipe(gulp.dest(paths.distDir));
});

gulp.task('dist', function(callback) {
  return runSequence('clean', 'compile', 'copy', callback);
});
