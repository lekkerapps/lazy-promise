var gulp = require('gulp');
var karma = require('karma');
var runSequence = require('run-sequence');

gulp.task('karma-test', (done) => {
  var server = new karma.Server({
    configFile: __dirname + '/../../karma.conf.js',
    singleRun: true
  });

  server.on('run_complete', (browsers, results) => {
    done(results.error ? 'There are test failures: ' + JSON.stringify(results) : null);
  });

  server.start();
});

gulp.task('test', (callback) => {
  return runSequence('compile-test', 'karma-test', callback);
});
