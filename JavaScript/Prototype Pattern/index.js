class Dog {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  bark() {
    console.log(`${this.name} is barking!`);
  }

  wagTail() {
    console.log(`${this.name} is wagging their tail!`);
  }
}

const dog1 = new Dog('Max', 4);
const dog2 = new Dog('Sam', 2);
const dog3 = new Dog('Joy', 6);
const dog4 = new Dog('Spot', 8);

console.log({ dog1, dog2, dog3, dog4 });

dog1.bark();
