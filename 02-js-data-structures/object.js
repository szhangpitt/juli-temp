'use strict';

// literal
var a = {
    'b': 'bb',
    c: 'cc'
};

// dynamic key
var d = 'd';
a[d] = 'dd'
console.log(a);

// modify
var o = {};
o['0'] = 1;
o[0] = 0;
o[1] = 1;
o[true] = false;
console.log(o);

for (var i = 0; i < 2; i += 1 ) {
    console.log(o[i]);
}

// equality
var p = { abc: 'abc' };
var q = { abc: 'abc' };

console.log(p === q);
console.log({ abc: 'abc' } === { abc: 'abc' });
console.log({ abc: 'abc' } == { abc: 'abc' });

// delete
((function () {
    var o = { a: 123, b: 456 };
    delete o.a;
    // o.a = undefined;
    console.log(a);
})());

// Object.assign
// Object.keys

