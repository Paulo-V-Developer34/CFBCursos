# formas de criar uma classe

## código gerado por IA

Pedi para o Copilot me ensinar sobre polimorfismo e ele me gerou este exemplo interessante
ele primeiramente criou o objeto em si e depois o populou com seus atributos e métodos através do prototype

**porém eu não sei utilizar** nem criar um codigo como este pelo menos ainda, pois ainda não pratiquei sobre object.create()

function Animal() {}
Animal.prototype.falar = function() {
    console.log("O animal faz um som.");
};

function Cachorro() {}
Cachorro.prototype = Object.create(Animal.prototype);
Cachorro.prototype.falar = function() {
    console.log("O cachorro late.");
};

function Gato() {}
Gato.prototype = Object.create(Animal.prototype);
Gato.prototype.falar = function() {
    console.log("O gato mia.");
};

let animais = [new Cachorro(), new Gato()];
animais.forEach(animal => animal.falar());
