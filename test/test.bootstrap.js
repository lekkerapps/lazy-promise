(function() {
  var specFiles = [];
  var SPEC_REGEX = /(test|spec)\.js$/i;

  var pathToModule = function(path) {
    return path.replace(/^\/base\build\//, '');
  }

  Object.keys(window.__karma__.files).forEach(function(file) {
    if (SPEC_REGEX.test(file)) {
      // Normalize paths to RequireJS module names.
      console.log('Spec: ' + file);
      specFiles.push(pathToModule(file));
    }
  });

  requirejs.config({
    baseUrl: '/base/build',
    deps: specFiles,
    callback: window.__karma__.start
  });

} ());
