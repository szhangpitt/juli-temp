# Bind

`Function.prototype.bind`

> The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.

```js
// bind.js


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
    }

    return 0;

    // What is the console output? Are we singing a-e-i-o-u?
    // If not, why not?
    // How to sing a-e-i-o-u?

})());




```

`Function.prototype.call`

> The call() method calls a function with a given this value and arguments provided individually.

```js
// call.js


//  _    _ _       _
// | |  (_) |     | |
// | | ___| |_ ___| |__   ___ _ __
// | |/ / | __/ __| '_ \ / _ \ '_ \
// |   <| | || (__| | | |  __/ | | |
// |_|\_\_|\__\___|_| |_|\___|_| |_|

((function cook () {
    'use strict';
    var log = console.log.bind(console, '[call][kitchen-app]');

    var allIngredients;

    function prepareIngredients (verb, material) {
        log(verb + ' ' + material + '...');
        return 'prepared ' + material;
    }

    var steps = [
        prepareIngredients._________,
        prepareIngredients._________,
        prepareIngredients._________
    ];

    log('Ready to go...');

    // allIngredients = steps._________

    log('Done!');

    return allIngredients;

    // Achieve the output below (note the order):

    // [call][kitchen-app] Ready to go...
    // [call][kitchen-app] chop onions...
    // [call][kitchen-app] cut beef...
    // [call][kitchen-app] slice butter...
    // [call][kitchen-app] Done!

    // allIngredients === ["prepared onions", "prepared beef", "prepared butter"]

})());

```

`Function.prototype.apply`

> The apply() method calls a function with a given this value and arguments provided as an array (or an array-like object).


```js

// assemble!
//      ___________
//     //   |||   \\
//  __//____|||____\\____
// | _|      |       _  ||
// |/ \______|______/ \_||
// _\_/_____________\_/_______


((function assemble () {
    'use strict';

    var log = console.log.bind(console, '[call][assemble-app]');

    var initialFrame = {};

    function addPart (partName, partNumber) {
        log('Adding part', partName, 'x' + partNumber)
        this[partName] = partNumber;
        return this;
    }

    var addPartArgs = [
        ['engine', 1],
        ['transmission', 1],
        ['wheel', 4],
        ['brake', 4],
    ];

    var car = addPartArgs._________;

    return car;

    // Achieve the output below (note the order):
    // hint: Array methods?

    // [call][assemble-app] Adding part engine x1
    // [call][assemble-app] Adding part transmission x1
    // [call][assemble-app] Adding part wheel x4
    // [call][assemble-app] Adding part brake x4

    // Object {engine: 1, transmission: 1, wheel: 4, brake: 4}

})());

```

