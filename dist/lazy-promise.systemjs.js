'use strict';

System.register([], function (_export, _context) {
  "use strict";

  var _createClass, LazyPromise;

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

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

  return {
    setters: [],
    execute: function () {
      _createClass = function () {
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

      _export('LazyPromise', LazyPromise = function (_Promise) {
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
      }(Promise));

      _export('LazyPromise', LazyPromise);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhenktcHJvbWlzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQWdCYSxXOzs7QUFDWCw2QkFBWSxFQUFaLEVBQWdCO0FBQUE7O0FBQUEscUdBQ1IsWUFBSSxDQUFFLENBREU7O0FBRWQsY0FBSSxPQUFPLEVBQVAsS0FBYyxVQUFsQixFQUE4QjtBQUM1QixrQkFBTSxJQUFJLFNBQUosQ0FBYywyQ0FBZCxDQUFOO0FBQ0Q7QUFDRCxnQkFBSyxHQUFMLEdBQVcsRUFBWDtBQUxjO0FBTWY7Ozs7aUNBRU07QUFDTCxpQkFBSyxPQUFMLEdBQWUsS0FBSyxPQUFMLElBQWdCLElBQUksT0FBSixDQUFZLEtBQUssR0FBakIsQ0FBL0I7QUFDQSxtQkFBTyxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLEtBQWxCLENBQXdCLEtBQUssT0FBN0IsRUFBc0MsU0FBdEMsQ0FBUDtBQUNEOzs7O1FBWjhCLE8iLCJmaWxlIjoibGF6eS1wcm9taXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQcm9qZWN0OiBsYXp5LXByb21pc2VcbiAqIENvcHlyaWdodCAyMDE2IEFzaGxleSBHIFJhbWRhc3MgPGFncmFtZGFzc0BnbWFpbC5jb20+XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgY2xhc3MgTGF6eVByb21pc2UgZXh0ZW5kcyBQcm9taXNlIHtcbiAgY29uc3RydWN0b3IoZm4pIHtcbiAgICBzdXBlcigoKT0+e30pO1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgZnVuY3Rpb24gc2hvdWxkIGJlIHVzZWQgZm9yIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH1cblxuICB0aGVuKCkge1xuICAgIHRoaXMucHJvbWlzZSA9IHRoaXMucHJvbWlzZSB8fCBuZXcgUHJvbWlzZSh0aGlzLl9mbik7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZS50aGVuLmFwcGx5KHRoaXMucHJvbWlzZSwgYXJndW1lbnRzKTtcbiAgfVxufVxuIl19