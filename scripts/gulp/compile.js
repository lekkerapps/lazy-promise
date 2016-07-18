var gulp = require('gulp');
var babel = require('gulp-babel');
var rename = require('gulp-rename');
var gulpif = require('gulp-if');
var paths = require('../paths');
var compileOptions = require('../compileOptions');

function compileWithOption(src, output, options) {
  return gulp.src(src)
    .pipe(babel(options))
    .pipe(gulpif(output !== '', rename(output)))
    .pipe(gulp.dest(paths.buildDir));
}

function compile() {
  var ret = gulp.src(paths.src);
  Object.keys(compileOptions.src).forEach((option) => {
    ret = ret && compileWithOption(paths.src, compileOptions.src[option].output, compileOptions.src[option].options);
  });
  return ret;
}

gulp.task('compile', () => {
  return compile();
});

gulp.task('compile-test', () => {
  return compileWithOption(paths.src, compileOptions.src.amd.output, compileOptions.src.amd.options) &&
    compileWithOption(paths.test, '', compileOptions.test.options);
});
