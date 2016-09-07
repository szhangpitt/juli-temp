'use strict';

// bind `this`
var first = 'Kristen';
var last = 'Wiig';

var user = {
    first: 'Bill',
    last: 'Hader',

    getFullName: function () {
        return this.first + ' ' + this.last;
    }
};

console.log(
    user.getFullName()
);


var gfn = user.getFullName;

console.log(user.getFullName === gfn);

console.log(gfn());

console.log(window.gfn === gfn);

console.log(window.gfn());

// bind args
var log = console.log.bind(console, '[bind]');

log('abc');

console.log(log === console.log);

console.log(log === console.log.bind(console, '[bind]'));

// partial function
function add (x, y) {
    return x + y;
}

var add5To;

// some code...

console.log(add5To(3)); // 8

// Sing! (function in a loop)
//       ,
//       |\        __
//       | |      |--|             __
//       |/       |  |            |~'
//      /|_      () ()            |
//     //| \             |\      ()
//    | \|_ |            | \
//     \_|_/            ()  |
//       |                  |
//      @'                 ()

((function aeiou () {
    'use strict';
    var log = console.log.bind(console, '[bind][aeiou]');

    var vowels = ['a', 'e', 'i', 'o', 'u', '~'];
    var delay;

    for (var i = 0; i < 5; i += 1) {
        delay = (i + 1) * 1000;
        log('Singing', vowels[i], 'in', delay, 'seconds');

        setTimeout(function () {
            log(vowels[i]);
        }, delay);

        // setTimeout(function () {
        //     log(vowels[this]);
        // }.bind(i), delay);

        // setTimeout(((function (j) {
        //     return function () {
        //         log(vowels[j]);
        //     };
        // })(i)), delay);
    }

    return 0;

})());


