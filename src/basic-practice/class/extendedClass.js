class Pet {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  eat() {
    return `${this.name} is eating!`;
  }
}

class Dog extends Pet {
  bark() {
    return 'Wooof!'
  }
}

class Cat extends Pet {
  constructor(name, age, livesLeft=9) {
    super(name, age);
    this.livesLeft = livesLeft;
  }

  meow() {
    return 'Meoww!'
  }
}

const dog = new Dog('dada', 7);
const cat = new Cat('dodo', 6, 9);

// Extended class
console.log(dog.eat())
console.log(dog.bark())
console.log()

// Extended class using super keyword
console.log(cat.eat())
console.log(cat.meow())
console.log(`name: ${cat.name}`)
console.log(`age: ${cat.age}`)
console.log(`livesLeft: ${cat.livesLeft}`)