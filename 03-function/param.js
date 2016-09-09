'use strict';

// 1
var foo = 1;
function bar() {
    if (!foo) {
        var foo = 10;
    }
    console.log(foo);
}
bar();

// 2
var a = 1;
function b() {
    a = 10;
    return;
    function a() {}
}
b();
console.log(a);

// 3
function change(str, arr, obj) {
    str = 'b';

    arr = ['b', 'c'];
    arr.push('z');

    obj.b = 'c';
};

var s = 'a';
var a = ['a', 'b'];
var o = { a: 'a', b: 'b', c: 'c' };

change(s, a, o);

console.log(s, a, o);
