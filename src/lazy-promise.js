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
    super(()=>{});
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
