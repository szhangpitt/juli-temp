'use strict';

function printAllArgs () {
    console.log(arguments);
}

printAllArgs(1, 2, 4);

function checkArgs (args, typeofList) {
    var errList = [];

    for(var i = 0; i < args.length; i += 1) {
        if (typeof args[i] !== typeofList[i]) {
            errList.push(i);
        }
    }

    return errList.length ? errList : false;
}

function register (first, last, age, isMale) {
    var ch = checkArgs(
        arguments,
        ['string', 'string', 'number', 'boolean']);

    if (ch) {
        return console.error(ch);
    }

    return {
        first: first,
        last: last,
        age: age,
        sex: isMale ? 'M' : 'F'
    };
}

var user1 = register('bill', 'murray', 56, 'true');
