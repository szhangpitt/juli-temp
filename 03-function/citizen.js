'use strict';

// factorial
// assgin a function
var myFac = function fac (n) {
    // ____________
}

console.log(fac(4));

console.log(myFac(4));


// pass a function

// 1
function beep () {
    console.log('beep');
}

setTimeout(beep, 1000);

// 2
function square (n, callback) {

    if (typeof n !== 'number') {
        callback(new TypeError('n must be a number!'));
    }

    callback(null, n * n);
}

square(3, function (err, val) {

    if (err) {
        return console.error(err);
    }

    return console.log(val);
});

// 3
function fc (n, resolve) {
    if (n <= 1) {
        resolve(1)
    } else {
        fc(n - 1, function (res) {
            resolve(n * res);
        })
    }
}

fc(4, console.log.bind(console));


// return a function
function makeAddingFn (a) {
    return function (b) {
        return a + b;
    }
}

var adding5 = makeAddingFn(5);
console.log(adding5(3));
