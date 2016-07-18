# lazy-promise
Lazy promise evaluation. Only when 'then' is invoked or 'await' on promise that the promise logic is evaluated.


## Motivation
LazyPromise provides promise with further 'deferred' behavior - only when a 'consumer' of the promise needs the 'asynchronous' 
data from it that the promise evaluation logic is invoked.

This behavior is useful and the library being a promise allows 'clean' code for the implementation of 'dependency' injection
that is 'asynchronous' in nature (a 'provider' that loads data asynchronously).

## Installation

```
  $ npm install lekkerapps-lazy-promise
```

The dist folder contains transpiled versions for the different flavors of module loaders (AMD/UMD/CommonJS/SystemJS) and javascript version (ES5/6)

## Usage

  ```javascript
  var promise = new LazyPromise(function(resolve, reject) {
    ...
  });
  ```
  ### Evaluation
  ```javascript
  promise.then(function(value) {
    ...
  })
  ```

  ```javascript
  promise.then((value) => {
    ...
  })
  ```

  ```javascript
  const value = await promise;
  ```

# License

Copyright &copy; 2016 Ashley G Ramdass <agramdass@gmail.com>
 
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
