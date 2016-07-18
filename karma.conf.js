module.exports = function (config) {
  config.set({

    basePath: '.',

    frameworks: ['jasmine', 'requirejs', 'es6-shim'],

    plugins: [
      'karma-es6-shim',
      'karma-jasmine',
      'karma-requirejs',
      'karma-phantomjs-launcher',
      'karma-spec-reporter'
    ],

    files: [
      'test/test.bootstrap.js',
      'node_modules/babel-polyfill/dist/polyfill.min.js',
      {
        pattern: 'build/**.js',
        included: false,
        autoWatch: true
      }
    ],

    reporters: ['spec'],
    specReporter: {
      maxLogLines: 3,
      suppressErrorSummary: true,
      suppressFailed: false,
      suppressPassed: false,
      suppressSkipped: true,
      showSpecTiming: false
    },

    // web server port
    port: 9876,

    // enable / disable colors in the output (reporters and logs)
    colors: true,

    // level of logging
    // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: true,

    // start these browsers
    // available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
    browsers: ['PhantomJS'],

    // Continuous Integration mode
    // if true, Karma captures browsers, runs the tests and exits
    singleRun: false
  });
};
