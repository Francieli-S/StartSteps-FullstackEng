// Task 4

const students = {
  name: 'Foxy',
  age: 5,
  grade: 'A',
};

// with constructor function:

function Student(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade
    this.showGrade = function() {
        console.log(`The grade is ${this.grade}`);
    }
}

const studentOne = new Student('Gato', 7, 10) 

function displayInfo(obj) {
  return obj;
}

console.log('Display object: ', displayInfo(students)); 
console.log('Display object with constructor fn: ', displayInfo(Student)); // [Function: Student]
console.log('Display object with Student instance: ', displayInfo(studentOne));

// Task 5

class Item {
    constructor(name, price) {
        this.name = name
        this.price = price
    }
}

// const milk = new Item('Milk', 0.99)
const eggs = new Item('Eggs', 2.59)
const bread = new Item('Bread', 1.19)
const banana = new Item('Banana', 1.79)

const cart = {
  items: [],
  total: 0,
  addItem: function (newItem) {
    this.items.push(newItem);
    this.total += newItem.price;
  },
};

const milk = {
    name: 'Milk',
    price: 4.53
}

cart.addItem(milk)

// console.log('Display cart and total BEFORE adding: ', cart.items, cart.total);
// cart.addItme('butter', 2.59);

console.log('Display cart and total AFTER adding: ', cart.items, cart.total);
