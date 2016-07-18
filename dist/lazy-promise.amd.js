define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var LazyPromise = exports.LazyPromise = function (_Promise) {
    _inherits(LazyPromise, _Promise);

    function LazyPromise(fn) {
      _classCallCheck(this, LazyPromise);

      var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(LazyPromise).call(this, function () {}));

      if (typeof fn !== 'function') {
        throw new TypeError('A function should be used for constructor');
      }
      _this._fn = fn;
      return _this;
    }

    _createClass(LazyPromise, [{
      key: 'then',
      value: function then() {
        this.promise = this.promise || new Promise(this._fn);
        return this.promise.then.apply(this.promise, arguments);
      }
    }]);

    return LazyPromise;
  }(Promise);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhenktcHJvbWlzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01BZ0JhLFcsV0FBQSxXOzs7QUFDWCx5QkFBWSxFQUFaLEVBQWdCO0FBQUE7O0FBQUEsaUdBQ1IsWUFBSSxDQUFFLENBREU7O0FBRWQsVUFBSSxPQUFPLEVBQVAsS0FBYyxVQUFsQixFQUE4QjtBQUM1QixjQUFNLElBQUksU0FBSixDQUFjLDJDQUFkLENBQU47QUFDRDtBQUNELFlBQUssR0FBTCxHQUFXLEVBQVg7QUFMYztBQU1mOzs7OzZCQUVNO0FBQ0wsYUFBSyxPQUFMLEdBQWUsS0FBSyxPQUFMLElBQWdCLElBQUksT0FBSixDQUFZLEtBQUssR0FBakIsQ0FBL0I7QUFDQSxlQUFPLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsS0FBbEIsQ0FBd0IsS0FBSyxPQUE3QixFQUFzQyxTQUF0QyxDQUFQO0FBQ0Q7Ozs7SUFaOEIsTyIsImZpbGUiOiJsYXp5LXByb21pc2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFByb2plY3Q6IGxhenktcHJvbWlzZVxuICogQ29weXJpZ2h0IDIwMTYgQXNobGV5IEcgUmFtZGFzcyA8YWdyYW1kYXNzQGdtYWlsLmNvbT5cbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICAgIGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmVcbiAqIGRpc3RyaWJ1dGVkIHVuZGVyIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUyxcbiAqIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWSBLSU5ELCBlaXRoZXIgZXhwcmVzcyBvciBpbXBsaWVkLlxuICogU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2UgZ292ZXJuaW5nIHBlcm1pc3Npb25zIGFuZFxuICogbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi9cbmV4cG9ydCBjbGFzcyBMYXp5UHJvbWlzZSBleHRlbmRzIFByb21pc2Uge1xuICBjb25zdHJ1Y3Rvcihmbikge1xuICAgIHN1cGVyKCgpPT57fSk7XG4gICAgaWYgKHR5cGVvZiBmbiAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcignQSBmdW5jdGlvbiBzaG91bGQgYmUgdXNlZCBmb3IgY29uc3RydWN0b3InKTtcbiAgICB9XG4gICAgdGhpcy5fZm4gPSBmbjtcbiAgfVxuXG4gIHRoZW4oKSB7XG4gICAgdGhpcy5wcm9taXNlID0gdGhpcy5wcm9taXNlIHx8IG5ldyBQcm9taXNlKHRoaXMuX2ZuKTtcbiAgICByZXR1cm4gdGhpcy5wcm9taXNlLnRoZW4uYXBwbHkodGhpcy5wcm9taXNlLCBhcmd1bWVudHMpO1xuICB9XG59XG4iXX0=