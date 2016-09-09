## Function parameters

### Pass by Reference? Pass by Value?

```js
// param.js

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
alert(a);

```

## `arguments`

```js
function something () {
    return arguments;
}

```

```
function add (x, y) {
    return x + y;
}

console.log(function.length);

```

```js
// write a `checkArgs` function that will check passed arguments

// e.g.

function checkArgs ( _____ ) {
    // _________
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

```

## First class citizen

> In programming language design, a first-class citizen (also type, object, entity, or value) in a given programming language is an entity which supports all the operations generally available to other entities. These operations typically include being passed as an argument, returned from a function, and assigned to a variable.

> In mathematics and computer science, a higher-order function (also functional, functional form or functor) is a function that does at least one of the following:

> takes one or more functions as arguments (i.e., procedural parameters),
> returns a function as its result.

### Assgin a function

### Pass a function

### Return a function

```js
// citizen.js

```

## Closure

```js
// closure.js
```

> Closures are functions that refer to independent (free) variables (variables that are used locally, but defined in an enclosing scope). In other words, these functions 'remember' the environment in which they were created.

### Immediately-invoked function expression

> An immediately-invoked function expression (or IIFE, pronounced "iffy"[1]) is a JavaScript design pattern which produces a lexical scope using JavaScript's function scoping. Immediately-invoked function expressions can be used to avoid variable hoisting from within blocks, protect against polluting the global environment and simultaneously allow public access to methods while retaining privacy for variables defined within the function. This pattern has been referred to as a self-executing anonymous function,[2] but Ben Alman introduced the term IIFE as a more semantically accurate term for the pattern, shortly after its discussion arose on comp.lang.javascript.

```js
// iife.js

```

## `Function.prototype.bind`

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

## `Function.prototype.call`

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

## `Function.prototype.apply`

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

