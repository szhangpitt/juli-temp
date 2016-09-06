'use strict';

console.log(+0 === -0);

console.log(isNaN(123));
console.log(isNaN('123'));
console.log(isNaN('12.3'));
console.log(isNaN('123abc'));
console.log(isNaN(' '));

console.log(isNaN(null));
console.log(isNaN(undefined));

console.log(isNaN(true));
console.log(isNaN(false));
console.log(true == 1);
console.log(false == 0);

console.log(isNaN({}));

console.log(isNaN(Infinity));

console.log(isNaN(NaN));
console.log(NaN != NaN);
console.log(NaN !== NaN);

console.log(0.1 + 0.2);
