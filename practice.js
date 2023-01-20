class User {
  constructor(fullName, age) {
    this.fullName = fullName;
    this.age = age;
  }

  welcome() {
    console.log(`hello ${this.fullName}`);
  }

  calAge() {
    console.log(2023 - this.age);
  }
  // setter
  set fullName(name) {
    if (name.includes(" ")) this._fullName = name;
    else alert(`${name} is not fullname`);
  }
  // getter
  get fullName() {
    return this._fullName;
  }
  // static
  static hey() {
    console.log(`Hey there`);
  }
}

const kalyan = new User("kalyan Reddy", 1994);
kalyan.welcome();
kalyan.calAge();
User.hey();

//
class Car {
  constructor(make, speed) {
    this.name = make;
    this.speed = speed;
  }
  accelerate() {
    this.speed += 10;
    console.log(`${this.make} is going at ${this.speed} km/hr`);
  }
  brake() {
    this.speed -= 5;
    console.log(`${this.make} is going at ${this.speed} km/hr`);
  }

  get speedUS() {
    return this.speed / 1.6;
  }
  set speedUS(speed) {
    this.speed * 1.6;
  }
}

const ford = new Car("ford", 120);
console.log(ford.speedUS);

ford.speedUS = 50;
console.log(ford.speed);
