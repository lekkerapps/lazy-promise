var gulp = require('gulp');
var del = require('del');
var vinylPaths = require('vinyl-paths');
var paths = require('../paths');

gulp.task('clean', () => {
  return gulp.src([paths.distDir, paths.buildDir])
    .pipe(vinylPaths(del));
});
