//Реализовать наследования следующей цепочки:
// Животное -> Млекопитающее -> Енот
// Между этими прослойками можно создать еще несколько своих =)
// Прототип животного должен иметь 2 метода передвижения (пр. прыжок, бег) и свойство пол
// Прототип млекопитающего должен иметь метод, который, в зависимости от пола дает молоко.
// Прототип енота должен уметь воровать =)

function Animal(gender) {
    this.gender = gender;
}

Animal.prototype.run = function() {
    console.log('running');
};
Animal.prototype.jump = function() {
    console.log('jumps');
};

function Mammal(gender = 'female') {
    Animal.call(this, gender);
}

function Raccoon(gender = 'male') {
    Mammal.call(this, gender);
}

Mammal.prototype = Object.create(Animal.prototype);
Mammal.prototype.getMilk = function() {
    if (this.gender === 'female') {
        console.log('Get milk');
    } else {
        console.log('no milk');
    }
}

Raccoon.prototype = Object.create(Mammal.prototype);
Raccoon.prototype.theft = function() {
    console.log('steals well');
}

Mammal.prototype.constructor = Mammal;
Raccoon.prototype.constructor = Raccoon;

const animal = new Animal('male');
const mammal = new Mammal();
const raccoon = new Raccoon();

console.log(mammal instanceof Animal);

console.log(animal);
console.log(mammal);
console.log(raccoon);
raccoon.getMilk();
raccoon.run();

