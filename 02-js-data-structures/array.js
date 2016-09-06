'use strict';

// init
var a = [];
a.push(1);
a.push(2);
a.push(3);

var b = [1, 2, 3];

var c = b;

var d = [].concat(b);

console.log(a === b);
console.log(c === b);
console.log(d === b);

// equality, copy
var p = [
    {a: 1},
    {b: 2},
    {c: 3},
];

var q = [].concat(p);

console.log(p === q);
console.log(p[0] === q[0]);

p[0].a = 'a';

console.log(p, q);


// looping
var persons = [
    { first: 'John', last: 'Doe', age: 34, sex: 'm' },
    { first: 'Matt', last: 'Smith', age: 41, sex: 'm' },
    { first: 'Mary', last: 'Watson', age: 56, sex: 'f' },
    { first: 'Elaine', last: 'Whitefield', age: 21, sex: 'f' },
];

// forEach
persons.forEach(function (p, i) {
    console.log('at', i, 'person', p);
});

// map
var names = persons.map(function (p) {
    return p.first + ' ' + p.last;
});
console.log(names);

// filter
var females = persons.filter(function (p) {
    return p.sex === 'f';
});
console.log(females);

// reduce
var averageAge = persons.reduce(function (prev, cur) {
    return prev + cur.age;
}, 0) / persons.length;
console.log(averageAge);


// sorting
var sorted =
persons
.sort(function (a, b) {
    return a.age - b.age;
});
console.log(persons);
console.log(sorted);


// quicksort
function quicksort(data) {
    if (data.length == 0) return [];

    var left = [], right = [], pivot = data[0];

    for (var i = 1; i < data.length; i++) {
        if(data[i] < pivot)
            left.push(data[i])
        else
            right.push(data[i]);
    }

    return quicksort(left).concat(pivot, quicksort(right));
}

