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
export class LazyPromise extends Promise {
  constructor(fn) {
    super(() => {});
    if (typeof fn !== 'function') {
      throw new TypeError('A function should be used for constructor');
    }
    this._fn = fn;
  }

  then() {
    this.promise = this.promise || new Promise(this._fn);
    return this.promise.then.apply(this.promise, arguments);
  }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxhenktcHJvbWlzZS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7OztBQWdCQSxPQUFPLE1BQU0sV0FBTixTQUEwQixPQUExQixDQUFrQztBQUN2QyxjQUFZLEVBQVosRUFBZ0I7QUFDZCxVQUFNLE1BQUksQ0FBRSxDQUFaO0FBQ0EsUUFBSSxPQUFPLEVBQVAsS0FBYyxVQUFsQixFQUE4QjtBQUM1QixZQUFNLElBQUksU0FBSixDQUFjLDJDQUFkLENBQU47QUFDRDtBQUNELFNBQUssR0FBTCxHQUFXLEVBQVg7QUFDRDs7QUFFRCxTQUFPO0FBQ0wsU0FBSyxPQUFMLEdBQWUsS0FBSyxPQUFMLElBQWdCLElBQUksT0FBSixDQUFZLEtBQUssR0FBakIsQ0FBL0I7QUFDQSxXQUFPLEtBQUssT0FBTCxDQUFhLElBQWIsQ0FBa0IsS0FBbEIsQ0FBd0IsS0FBSyxPQUE3QixFQUFzQyxTQUF0QyxDQUFQO0FBQ0Q7QUFac0MiLCJmaWxlIjoibGF6eS1wcm9taXNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBQcm9qZWN0OiBsYXp5LXByb21pc2VcbiAqIENvcHlyaWdodCAyMDE2IEFzaGxleSBHIFJhbWRhc3MgPGFncmFtZGFzc0BnbWFpbC5jb20+XG4gKlxuICogTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTtcbiAqIHlvdSBtYXkgbm90IHVzZSB0aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS5cbiAqIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiB0aGUgTGljZW5zZSBhdFxuICpcbiAqICAgICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5leHBvcnQgY2xhc3MgTGF6eVByb21pc2UgZXh0ZW5kcyBQcm9taXNlIHtcbiAgY29uc3RydWN0b3IoZm4pIHtcbiAgICBzdXBlcigoKT0+e30pO1xuICAgIGlmICh0eXBlb2YgZm4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0EgZnVuY3Rpb24gc2hvdWxkIGJlIHVzZWQgZm9yIGNvbnN0cnVjdG9yJyk7XG4gICAgfVxuICAgIHRoaXMuX2ZuID0gZm47XG4gIH1cblxuICB0aGVuKCkge1xuICAgIHRoaXMucHJvbWlzZSA9IHRoaXMucHJvbWlzZSB8fCBuZXcgUHJvbWlzZSh0aGlzLl9mbik7XG4gICAgcmV0dXJuIHRoaXMucHJvbWlzZS50aGVuLmFwcGx5KHRoaXMucHJvbWlzZSwgYXJndW1lbnRzKTtcbiAgfVxufVxuIl19