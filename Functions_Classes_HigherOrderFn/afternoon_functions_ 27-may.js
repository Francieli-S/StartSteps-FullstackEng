// Task 1
function greet(name, greeting = 'Hello!') {
  return `${greeting} ${name}`;
}

console.log('Task 1: ', greet('Gato'));
console.log('Task 1: ', greet('Foxy', 'Oi!'));

// Task 2
function sum(...num2) {
  return num2.reduce((a, b) => a + b, 0);
}

console.log('Task 2: ', sum(1, 2, 3));

// Task 3
const add = (num1, num2) => num1 + num2;

console.log('Task 3: ', add(3, 4));

// Task 4
const cube = (num) => {
  return num ** 3;
};

console.log('Task 4: ', cube(3));

// Task 5
const filterEven = (...nums) => nums.filter((num) => num % 2 === 0);

console.log('Task 5: ', filterEven(1, 2, 5, 6, 12, 11));

// Task 6
const double = (...nums) => nums.map((num) => num * 2);

console.log('Task 6: ', double(1, 10, 100));

// Task 7
const product = (arr) => arr.reduce((acc, cur) => acc * cur);

console.log('Task 7: ', product([10, 11, 51]));

// Task 8
const people = [
  { name: 'Alice', age: 25 },
  { name: 'Bob', age: 30 },
  { name: 'Charlie', age: 35 },
];

const addDecade = (arr) => arr.map(elem => arr.ageInTenYears = elem.age + 10)
console.log('Task 8: ', addDecade(people));

///////////////////////////////////////////////////////////////////////////////////////////////////
// Extra practice
const arrNums = [101, 11, 12, 8, 31, 31, 2, 12, 22, 4, 46, 1];

const filterAndSort = (arr) =>
  arrNums.filter((num) => num % 2 !== 0).sort((a, b) => a - b);

const filterSortReducer = (arr) =>
  arrNums
    .filter((num) => num % 2 !== 0)
    .sort((a, b) => a - b)
    .reduce((acc, cur) => acc + cur, 0);

console.log(filterAndSort(arrNums));
console.log(filterSortReducer(arrNums));

// Extra with objects
class Town {
  constructor(town, population) {
    this.town = town;
    this.population = population;
  }
}

const towns = [
  new Town('Berlin', 10.6),
  new Town('Stuttgart', 5),
  new Town('Freiburg', 3.4),
  new Town('Potsdam', 2.3),
  new Town('London', 12.7),
];

console.log(towns);

const addTwo = towns.map((town) => {
  return town.population > 10 ? town.population * 2 : town.population;
});

console.log(addTwo);

/// testing push