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
