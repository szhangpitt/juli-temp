'use strict';

function Animal (name) {
    this.name = name;
}

Animal.prototype.breathe = function () {
    console.log('This animal ' + this.name + ' is breathing.');
}

function Mammal (name, legs) {
    Animal.call(this, name);
    this.legs = legs;
}

// Mammal.prototype = Object.create(Animal.prototype);
// Mammal.prototype.constructor = Mammal;
Mammal.prototype = Object.create(Animal.prototype, {
    constructor: {
        value: Mammal,
        enumerable: false,
        writable: false,
        configurable: true
    }
});

Mammal.prototype.walk = function () {
    console.log(
        'The mammal ' + this.name + ' is walking with ' +
        this.legs + ' legs.');
}

function Human (name, legs, voice) {
    Mammal.call(this, name, legs);
    this.voice = voice;
}

// Human.prototype = Object.create(Mammal.prototype);
// Human.prototype.constructor = Human;
Human.prototype = Object.create(Mammal.prototype, {
    constructor: {
        value: Human,
        enumerable: false,
        writable: false,
        configurable: true
    }
});

Human.prototype.talk = function () {
    console.log(
        'The human ' + this.name + ' is talking with a ' +
        this.voice + ' voice.');
}


var duck = new Animal('donald');
console.log(duck.name);
duck.breathe();

var monkey = new Mammal('Wukong', 4);
monkey.breathe();
monkey.walk();

var me = new Human('Bill', 2, 'low');
me.breathe();
me.walk()
me.talk();


console.log(duck instanceof Animal);

console.log(monkey instanceof Animal);
console.log(monkey instanceof Mammal);

console.log(me instanceof Animal);
console.log(me instanceof Mammal);
console.log(me instanceof Human);
