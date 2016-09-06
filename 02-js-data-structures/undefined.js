'use strict';

var a = null;

var b = undefined;
var b2;
var b3 = undefined;
var b4 = void 0;


console.log(a);
console.log(b);
console.log(b2);
console.log(b3);
console.log(b4);
// console.log(_b);

console.log(a === b);
console.log(a == b);

console.log(typeof b);
console.log(typeof _b);


((function(){
    var undefined = 'abc';
    var abc = 'abc';

    console.log(undefined);
    console.log(abc === undefined);

})());
