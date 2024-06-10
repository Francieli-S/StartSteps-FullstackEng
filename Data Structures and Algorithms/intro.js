// Task 1 Arrays
const arrSingleDim = [];
const arr2D = [];

for (let i = 1; i <= 5; i++) {
  arrSingleDim.push(i);
}

console.log('OneDimention: ', arrSingleDim);

let counter = 1;

for (let i = 0; i < 3; i++) {
  let row = [];
  for (let j = 0; j < 3; j++) {
    row.push(counter);
    counter++;
  }
  arr2D.push(row);
}

console.log('TwoDimention with inner arrays: ', arr2D);

////
let currentNum = 1;

for (let i = 0; i < 3; i++) {
  let row = '';
  for (let j = 0; j < 3; j++) {
    row += currentNum + ' ';
    currentNum++;
  }
  console.log('TwoDimention with strings not arrays: ', row);
}

console.log('Add to the end with push: ', arrSingleDim.push(6), arrSingleDim);
console.log('Second row and third column element: ', arr2D[1][2]);

// Task 2 Stacks
class Stack {
  constructor() {
    this.array = [];
  }
  // see the very top node (Last in first out - LIFO)
  peek() {
    return this.array[this.array.length - 1];
  }
  // add a node to the top
  push(value) {
    this.array.push(value);
    // return this;
  }
  // remove from the top
  pop() {
    if (this.array.length === 0) {
      return null;
    }
    const popped = this.array[this.array.length - 1];
    this.array.length--;
    console.log('Pop returns the removed element: ', popped);
    return this;
  }
}

const myStack = new Stack();
myStack.push('Google');
myStack.push('Udemy');
myStack.push("Discord");
console.log('myStack after previous 3 pushes: ', myStack);

console.log('myStack after pop: ', myStack.pop());
myStack.peek(); // 'Udemy'
console.log(myStack);

// Task 3 Queues
class Queue {
  constructor() {
    this.array = [];
  }
  // add a node to the right
  push(value) {
    this.array.push(value);
  }
  // remove from the left
  shift() {
    if (this.array.length === 0) {
      return null;
    }
    const shifted = this.array.shift();
    console.log('Shift returns the removed element: ', shifted);
    return this;
  }
}

const myQueue = new Queue();
myQueue.push('a');
myQueue.push('b');
myQueue.push('c');
console.log('myQueue after previous 3 pushes: ', myQueue);
myQueue.shift()
console.log('myQueue after shift: ', myQueue);

// Task 4 Dictionaries (Object)
const myDictionary = new Object()
console.log('myDictionary', myDictionary);

myDictionary.name = 'Gato'
myDictionary.age = 7
myDictionary.city = 'Berlin'
myDictionary.country = 'Germany'
console.log('myDictionary after adding properties: ', myDictionary);

console.log('myDictionary value in name key: ', myDictionary.name);

// Task 4 Dictionaries (Maps)
const myMap = new Map()
console.log('myMap: ', myMap);

myMap.set('a', 1)
myMap.set('b', 2)
myMap.set('c', 3)
myMap.set('d', 4)
myMap.set('e', 5)
console.log('myMap after setting: ', myMap);

console.log('myMap has c?', myMap.has('c'));
console.log('myMap has f?', myMap.has('f'));
console.log('myMap size: ', myMap.size);
console.log('myMap value in the d key', myMap.get('d'));

// Task 5 Sets
const mySet = new Set()
console.log('mySet: ', mySet);

mySet.add(1)
mySet.add(2)
mySet.add(3)
mySet.add(4)
mySet.add(5)
console.log('mySet after adding: ', mySet);

mySet.add(3)
console.log('mySet after adding a duplicate: ', mySet);

mySet.delete(4)
console.log('mySet after delete 4: ', mySet);

console.log('mySet has 5?', mySet.has(5));
