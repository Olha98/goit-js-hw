'use strict'
//!===============hw5-1=================== 

const Account = function ({
  login,
  email
}) {
  this.login = login;
  this.email = email;
}

Account.prototype.getInfo = function () {
  console.log(`Login: ${this.login}, Email: ${this.email}`);
}

const manko = new Account({
  login: 'Mangozedog',
  email: 'mango@dog.woof',
});
console.log(manko)
manko.getInfo();

const polly = new Account({
  login: 'Poly',
  email: 'poly@mail.com',
});
console.log(polly)

polly.getInfo();

//!===============hw5-2=================== 
class User {
  constructor({
    name,
    age,
    followers
  }) {
    this.name = name;
    this.age = age;
    this.followers = followers;
  }

  getInfo() {
    console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
  }
}

const mango = new User({
  name: 'Mango',
  age: 2,
  followers: 20,
});

mango.getInfo();

const poly = new User({
  name: 'Poly',
  age: 3,
  followers: 17,
});

poly.getInfo();

//!===============hw5-3===================

class Storage {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }

  addItem(item) {
    return this.items.push(item);
  }
  removeItem(item) {
    this.items = this.items.filter(element => element !== item);
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items);

storage.addItem('Дроид');
console.table(storage.items);

storage.removeItem('Пролонгер');
console.table(storage.items);

//!===============hw5-4===================

class StringBuilder {
  constructor(str) {
    this._value = str;
  }

  get value() {
    return this._value;
  }

  append(str) {
    return this._value = this._value + str;
  }

  prepend(str) {
    return this._value = str + this._value;
  }

  pad(str) {
    return this._value = str + this._value + str;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value);

builder.prepend('^');
console.log(builder.value);

builder.pad('=');
console.log(builder.value);

//!===============hw5-5===================

class Car {

  static getSpecs(car) {
    return console.log(`maxSpeed: ${car.maxSpeed}, speed: ${car.speed}, isOn: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
  }

  constructor({
    speed = 0,
    price = 0,
    maxSpeed = 0,
    isOn = false,
    distance = 0
  }) {
    this.speed = speed;
    this.price = price;
    this.maxSpeed = maxSpeed;
    this.isOn = isOn;
    this.distance = distance
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    return this._price = newPrice;
  }

  turnOn() {
    return this.isOn = true;
  }

  turnOff() {
    this.isOn = false;
    this.speed = 0;
  }

  accelerate(value) {
    if (this.speed + value <= this.maxSpeed) {
      return this.speed += value;
    }
  }

  decelerate(value) {
    if (this.speed - value > 0) {
      return this.speed -= value;
    }
  }

  drive(hours) {
    if (this.isOn) {
      return console.log(this.distance += hours * this.speed);
    }
  }
}

const mustang = new Car({
  maxSpeed: 200,
  price: 2000
});

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);

console.log(mustang.price);
mustang.price = 4000;
console.log(mustang.price);