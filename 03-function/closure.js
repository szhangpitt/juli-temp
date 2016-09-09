'use strict';

var personnelSystem = makeSystem();

function makeSystem () {
    var id = 0;
    var persons = [];

    function register (name) {
        persons.push({
            id: id++,
            name: name
        });
    }

    function list () {
        return persons;
    }

    return {
        register: register,
        list: list
    };

};

console.log(personnelSystem.list());
personnelSystem.register('tom');
personnelSystem.register('james');
personnelSystem.register('jack');
console.log(personnelSystem.list());

personnelSystem.list()[0].id = '123';
console.log(personnelSystem.list());



var personnelSystemV2 = makeSystemV2();

function makeSystemV2 () {
    var id = 0;
    var persons = [];

    function register (name) {
        persons.push({
            id: id++,
            name: name
        });
    }

    function list () {
        return persons.map(function (p) {
            return {
                id: p.id,
                name: p.name
            };
        });
    }

    return {
        register: register,
        list: list
    };

}

console.log(personnelSystemV2.list());
personnelSystemV2.register('tom');
personnelSystemV2.register('james');
personnelSystemV2.register('jack');
console.log(personnelSystemV2.list());

personnelSystemV2.list()[0].id = '123';
console.log(personnelSystemV2.list());

