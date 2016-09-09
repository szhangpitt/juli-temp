'use strict';

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

        // setTimeout(((function (j) {
        //     return function () {
        //         log(vowels[j]);
        //     };
        // })(i)), delay);
    }

    return 0;

})());
