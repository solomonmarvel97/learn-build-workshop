// pets [dog, duck]

// walk
// fly
// swim
// run

class Pets {
    name
    legs
    owner

    constructor (name, legs, owner) {
        this.name = name
        this.legs = legs
        this.owner = owner
    }

    walk() {
        return `${this.name} can walk`
    }
}

class Dog extends Pets {
    constructor(name, legs, owner, smile) {
        super(name, legs, owner)
        this.smile = smile
    }

    run() {
        return `${this.name} can run` 
    }
}

let bingo = new Dog ('bingo', 4, 'john doe', true)
console.log(bingo)
console.log(bingo.run())
console.log(bingo.walk())

class Duck extends Pets {
    constructor(name, legs, owner) {
        super(name, legs, owner)
    }

    swim () {
        return `${this.name} can swim` 
    }
}

let ducky = new Duck ('ducky', 2, 'mary doe', false)
console.log(ducky)
console.log(ducky.swim())
console.log(ducky.walk())