'use strict';

var log = console.log;

log.call(console, '[call]', '[example]')

var args = [
    '[apply]',
    '[example]'
];

log.apply(console, args);

log.apply(console, args.concat('This is an example.'));


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

    var car = addPartArgs.reduce(function (c, args) {
        return addPart.apply(c, args);
    }, initialFrame);

    // var car = addPartArgs.reduce(function (c, args) {
    //     return addPart.apply(c, args);
    // }, initialFrame);

    // var car = addPartArgs.reduce(Function.prototype.apply.bind(addPart), initialFrame);

    return car;
})());
