# JavaScript: the Good Parts

> http://bdcampbell.net/javascript/book/javascript_the_good_parts.pdf

## My habits

### Use strict

- No global variable, must use `var`. e.g. `someVar = 123;`
- No assignment to un-writable property `Object.defineProperty(obj1, "x", { value: 42, writable: false });`
- No deleting undeletable property `delete Object.prototype`
- Unique keys in object literal `var a = { b: 1, b: 2}`
- Function params must be unique `function (a, a, c) {}`
- No octal syntax `var a = +015 + 13`
- No setting property on primitives `false.true = 123`
- Simpler `this`, no "boxing"
- No access to `function.arguments`, `function.caller`, `arguments.caller`
- Keywords:  `implements`, `interface`, `let`, `package`, `private`, `protected`, `public`, `static`, and `yield`.

### ===

### (Try) Always give a function name

```js

setTimeout(function sing () {
    console.log('aeiou')
}, 1000);

Animal.prototype.walk =
function walk () {
    // ...
}


```

### Use function declaration as much as possible

### Whitespace

```javascript
function someFunc (a, b, c) {
    // ...
}

someFunc(1, 2, 3);

var a = { a: 1, b: 2 };

var complex = {
    a: 1,
    b: 2,
    // ... many others
};

for (var i = 0; i < 5; i += 1) {
    // ...
}

if (someCondition) {
    // ...
} else {
    // ...
}

return {
    a: 1,
    b: 2
};

// No trailing spaces!

// No mixing tabs and spaces (I use spaces)

// \n on EOL

// limit column width to ~100
var output = reallyReallyReallyReallyLongFnName(
    input1, input2, input3);

// CSS: one style per line
.my-element {
    font-size: 24px;
    color: white;
    background: black;
    ...
}

```

### Do not over-validate, or over-protect

```js
var names = [];

$('name-submit-button')
.on('change', function onNameSubmit (e) {
    var name = $('name-text-input').val().trim();

    if (!name) {
        return alert('Please provide name!');
    }

    if (!Array.isArray(names)) {
        console.error('names not array!');
    }

    names.push(name);

    displayNames(names);
});

// internal API
function displayNames (names) {

    if (!Array.isArray(names)) {
        console.error('names is not array');
    }

    var namesHTML = names.map(function (n) {
        if (!n) {
            console.error('name is empty!', n);
        }

        return '<li>' + n + '</li>';
    });

    $('.names-list').html(namesHTML);

}

// internal API
function displayNames2 (names) {
    var ns;

    if (!Array.isArray(names)) {
        ns = [];
    } else {
        ns = names;
    }

    var namesHTML = ns.map(function (n) {
        if (!n) {
            console.error('name is empty!', n);
        }

        return '<li>' + n + '</li>';
    });

    $('.names-list').html(namesHTML);

}
```

### Put all your vars on the top


### Use closures when appropriate


### Always return something in your function


### Use `var self = this` when appropriate
