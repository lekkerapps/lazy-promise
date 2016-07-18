'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Project: lazy-promise
 * Copyright 2016 Ashley G Ramdass <agramdass@gmail.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhenktcHJvbWlzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7OztJQWdCYSxXLFdBQUEsVzs7O0FBQ1gsdUJBQVksRUFBWixFQUFnQjtBQUFBOztBQUFBLCtGQUNSLFlBQUksQ0FBRSxDQURFOztBQUVkLFFBQUksT0FBTyxFQUFQLEtBQWMsVUFBbEIsRUFBOEI7QUFDNUIsWUFBTSxJQUFJLFNBQUosQ0FBYywyQ0FBZCxDQUFOO0FBQ0Q7QUFDRCxVQUFLLEdBQUwsR0FBVyxFQUFYO0FBTGM7QUFNZjs7OzsyQkFFTTtBQUNMLFdBQUssT0FBTCxHQUFlLEtBQUssT0FBTCxJQUFnQixJQUFJLE9BQUosQ0FBWSxLQUFLLEdBQWpCLENBQS9CO0FBQ0EsYUFBTyxLQUFLLE9BQUwsQ0FBYSxJQUFiLENBQWtCLEtBQWxCLENBQXdCLEtBQUssT0FBN0IsRUFBc0MsU0FBdEMsQ0FBUDtBQUNEOzs7O0VBWjhCLE8iLCJmaWxlIjoibGF6eS1wcm9taXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQcm9qZWN0OiBsYXp5LXByb21pc2VcbiAqIENvcHlyaWdodCAyMDE2IEFzaGxleSBHIFJhbWRhc3MgPGFncmFtZGFzc0BnbWFpbC5jb20+XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgY2xhc3MgTGF6eVByb21pc2UgZXh0ZW5kcyBQcm9taXNlIHtcbiAgY29uc3RydWN0b3IoZm4pIHtcbiAgICBzdXBlcigoKT0+e30pO1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgZnVuY3Rpb24gc2hvdWxkIGJlIHVzZWQgZm9yIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH1cblxuICB0aGVuKCkge1xuICAgIHRoaXMucHJvbWlzZSA9IHRoaXMucHJvbWlzZSB8fCBuZXcgUHJvbWlzZSh0aGlzLl9mbik7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZS50aGVuLmFwcGx5KHRoaXMucHJvbWlzZSwgYXJndW1lbnRzKTtcbiAgfVxufVxuIl19