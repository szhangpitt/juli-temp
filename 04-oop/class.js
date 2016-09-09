'use strict';

function Animal (name) {
    this.name = name;
}

Animal.prototype.breathe = function () {
    console.log('All animals need to breathe.');
}


function Mammal (name) {
    this.name = name;
    this.walking = false;
}

Mammal.prototype.walk = function () {
    this.walking = true;
    console.log(
        'The mammal ' + this.name + ' is walking?',
        this.walking);
}

function Human (name) {
    this.name = name;
    this.talking = false;
}

Human.prototype.walk = function () {
    this.walking = true;
    console.log(
        'The human ' + this.name + ' is walking?',
        this.walking);
}

Human.prototype.talk = function (word) {
    this.talking = true;
    console.log(
        'The human ' + this.name + ' is talking?',
        this.talking, '`' + word + '`');
}

    var duck = new Animal('donald');
    console.log(duck.name);
    duck.breathe();

    var monkey = new Mammal('Wukong');
    monkey.walk();
    // monkey.breathe();

    var me = new Human('Bill');
    // me.breathe();
    me.walk()
    me.talk('Hello');
