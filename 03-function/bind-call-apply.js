'use strict';

var fns = [
    { name: 'a', code: console.log.bind(console, 'a')},
    { name: 'b', code: console.log.bind(console, 'b')},
    { name: 'c', code: console.log.bind(console, 'c')},
];

function runAll (fns) {
    return fns.map(function (fn) {
       return fn.call();
    });
}

function runAllDelay(fns, delay) {
    var fn;
    var counter = 0;

    var int = setInterval(function () {
        if ( counter === fns.length - 1 ) {
            clearInterval(int);
        }

        fn = fns[counter];
        fn.call();
        counter += 1;
    }, delay);
}

function getCode (fnObj) {
    return fnObj.code;
}

runAll(fns.map(getCode));

runAllDelay(fns.map(getCode), 1000);
