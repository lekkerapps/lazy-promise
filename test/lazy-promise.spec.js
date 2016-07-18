import {LazyPromise} from 'lazy-promise.amd';

describe('Lazy Promise', () => {
  describe('Default Promise behavior', () => {
    it('Should invoke the promise function with construction', () => {
      let value;
      const fn = () => {
        value = 'invoked';
      };
      const promise = new Promise(fn);
      expect(value).toEqual('invoked');
    });
  });

  describe('Lazy Promise construction', () => {
    it('Should not allow construction without a function', () => {
      expect(function() { new LazyPromise(); }).toThrow(new TypeError('A function should be used for constructor'));
      expect(function() { new LazyPromise(1); }).toThrow(new TypeError('A function should be used for constructor'));
      expect(function() { new LazyPromise('test'); }).toThrow(new TypeError('A function should be used for constructor'));
    });
  });

  describe('Lazy promise is a Promise instance', () => {
    it('Should be that a lazy promise is a promise instance', () => {
      let fn = () => { };
      let promise = new LazyPromise(fn);
      expect(promise instanceof Promise).toBe(true);
    });
  });

  describe('Lazy Promise - no then', () => {
    it('Should not invoke the function when "then" has not been invoked', () => {
      let value;
      const fn = () => {
        value = 'invoked';
        throw new Error('Function should not have been invoked');
      };
      const promise = new LazyPromise(fn);
      expect(value).toEqual(undefined);
    });
  });

  describe('Lazy Promise - with then', () => {
    let promise;
    let value;
    let valueParam;
    beforeEach((done) => {
      let fn = function(resolve, reject) {
        value = 'invoked';
        resolve(value);
      }
      promise = new LazyPromise(fn);
      promise.then((val) => {
        valueParam = val;
        done();
      });
    });

    it('Should execute function once "then" has been invoked', () => {
      expect(value).toEqual('invoked');
      expect(valueParam).toEqual('invoked');
    });
  });

  describe('Lazy promise with long chain', () => {
    let value;
    beforeEach((done) => {
      let promise = new LazyPromise((resolve, reject) => {
        return resolve(1);
      }).then(val => {
        return val + 2;
      }).then(val => {
        return val + 3;
      }).then(val => {
        value = val;
        done();
      });
    });

    it('Should compute promise chain', () => {
      expect(value).toEqual(6);
    });
  });

  describe('Lazy Promise - with async', () => {
    let promise;
    let value;
    let valueParam;
    beforeEach(async (done) => {
      let fn = function(resolve, reject) {
        value = 'invoked';
        resolve('executed');
      }
      promise = new LazyPromise(fn);
      valueParam = await promise;
      done();
    });

    it('Should execute function when "await" for the promise', () => {
      expect(value).toEqual('invoked');
      expect(valueParam).toEqual('executed');
    });
  });

  describe('Lazy Promise - "this"', () => {
    let promise;
    let fnThis;
    let thenThis;
    let then2This;

    beforeEach(function(done) {
      let fnContextThis = { 'name': 'fn context' };
      this.name = 'beforeEach';

      let fn = function(resolve, reject) {
        fnThis = this;
        resolve('executed');
      }.bind(fnContextThis);

      promise = new LazyPromise(fn);
      promise.then(function(val) {
        thenThis = this;
      }.bind(this));
      promise.then((val) => {
        then2This = this;
        done();
      });
    });

    it('Should execute promise chain with intended "this"', () => {
      expect(fnThis.name).toEqual('fn context');
      expect(thenThis.name).toEqual('beforeEach');
      expect(then2This.name).toEqual('beforeEach');
    });
  });
});
