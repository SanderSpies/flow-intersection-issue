/* @flow */
var Immutable = require('immutable');

type test =
  Immutable.Map<'foo', number> &
  Immutable.Map<'bar', boolean>;

var immutableTest = Immutable.fromJS({
  foo: 1,
  bar: true
});

function foo(pleh:test) {
  if (pleh.get('bar')) {
    pleh.get('foo') + 4;
  }
}

console.info(foo(immutableTest));