'use strict';

var log = console.log.bind('[call]');

var user = {
    first: 'Bill',
    last: 'Hader',
    middle: 'Thomas',
    suffix: 'Jr.',

    getFullName: function (includeMiddle, includeSf) {
        var m = includeMiddle ? ' ' + this.middle + ' ' : ' ';
        var s = includeSf ? ' ' + this.suffix : '';

        return this.first + m + this.last + s;
    }
};

var gfn = user.getFullName;

var fullname = gfn.bind(user)();
log(fullname);

var fullnameWithMiddle = gfn.call(user, true)
log(fullname2);

var gfnReadyToCall = gfn.bind(user, true, true);
var fullnameWithAll = gfnReadyToCall();
log(fullnameWithAll);


// Array.prototype.slice
((function () {
    'use strict';

    var arrayLike = {0: '0', 1: 'a', 2: 'b', length: 3};
    var arr = Array.prototype.slice.call(arrayLike);
    console.log(arr);

    function listArgs () {
        console.log(Array.isArray(arguments));
        return Array.prototype.slice.call(arguments);
    }

    var args = listArgs(1, 2, 3, 4);
    console.log(args);
    console.log(Array.isArray(args));

})());


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
        prepareIngredients.bind(null, 'chop',  'onions'),
        prepareIngredients.bind(null, 'cut',   'beef'),
        prepareIngredients.bind(null, 'slice', 'butter'),
    ];

    log('Ready to go...');

    allIngredients = steps.map(function (step) {
        return step.call();
    });

    log('Done!');

    // allIngredients = steps.map(function (step) {
    //     return Function.prototype.call.call(step);
    // });

    // allIngredients = steps.map(
    //     Function.prototype.call.call.bind(
    //         Function.prototype.call));

    return allIngredients;

})());

