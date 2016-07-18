module.exports = {
  'src': {
    'es5': {
      'type': 'es5',
      'output': 'lazy-promise.es5.js',
      'options': {
        'presets': ['es2015'],
        'sourceMaps': 'inline'
      }
    }, 'es5_min': {
      'type': 'es5',
      'output': 'lazy-promise.es5.min.js',
      'options': {
        'presets': ['es2015'],
        'comments': false,
        'compact': true
      }
    }, 'es6': {
      'type': 'es2015',
      'output': 'lazy-promise.es6.js',
      'options': {
        'presets': ['es2016'],
        'sourceMaps': 'inline'
      }
    }, 'es6_min': {
      'type': 'es2015',
      'output': 'lazy-promise.es6.min.js',
      'options': {
        'presets': ['es2016'],
        'comments': false,
        'compact': true
      }
    }, 'amd': {
      'type': 'amd',
      'output': 'lazy-promise.amd.js',
      'options': {
        'presets': ['es2015'],
        'plugins': ['transform-es2015-modules-amd'],
        'sourceMaps': 'inline'
      }
    }, 'amd_min': {
      'type': 'amd',
      'output': 'lazy-promise.amd.min.js',
      'options': {
        'presets': ['es2015'],
        'plugins': ['transform-es2015-modules-amd'],
        'comments': false,
        'compact': true
      }
    }, 'commonjs': {
      'type': 'commonjs',
      'output': 'lazy-promise.commonjs.js',
      'options': {
        'presets': ['es2015'],
        'plugins': ['transform-es2015-modules-commonjs'],
        'sourceMaps': 'inline'
      }
    }, 'commonjs_min': {
      'type': 'commonjs',
      'output': 'lazy-promise.commonjs.min.js',
      'options': {
        'presets': ['es2015'],
        'plugins': ['transform-es2015-modules-commonjs'],
        'comments': false,
        'compact': true
      }
    }, 'systemjs': {
      'type': 'systemjs',
      'output': 'lazy-promise.systemjs.js',
      'options': {
        'presets': ['es2015'],
        'plugins': ['transform-es2015-modules-systemjs'],
        'sourceMaps': 'inline'
      }
    }, 'systemjs_min': {
      'type': 'systemjs',
      'output': 'lazy-promise.systemjs.min.js',
      'options': {
        'presets': ['es2015'],
        'plugins': ['transform-es2015-modules-systemjs'],
        'comments': false,
        'compact': true
      }
    }, 'umd': {
      'type': 'umd',
      'output': 'lazy-promise.umd.js',
      'options': {
        'presets': ['es2015'],
        'plugins': ['transform-es2015-modules-umd'],
        'sourceMaps': 'inline'
      }
    }, 'umd_min': {
      'type': 'umd',
      'output': 'lazy-promise.umd.min.js',
      'options': {
        'presets': ['es2015'],
        'plugins': ['transform-es2015-modules-umd'],
        'comments': false,
        'compact': true
      }
    }
  }, 'test': {
    'type': 'amd',
    'output': 'lazy-promise.amd.js',
    'options': {
      'presets': ['es2015'],
      'plugins': ['transform-es2015-modules-amd', 'syntax-async-functions', 'transform-regenerator'],
      'sourceMaps': 'inline'
    }
  }
}
