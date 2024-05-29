/*let greeting = 'Hello, world'
let a = 2
let b = 5
let c = a + b

console.log(`${greeting}. This is a number ${c}.`)

const userName = 'Foxy'
let greeting2 = 'Good morning'

alert(`${greeting} ${userName}`)
let message = prompt('Enter a number:')

const students = ['Francieli', 'Tina', 'Daniela']
console.log(students)
console.log(students[1])
*/

let length = prompt('Type the length:');
let widht = prompt('Type the width:');

function calcRectangleArea(length, widht) {
  return Number.parseFloat(length * widht).toFixed(2);
}

let result = calcRectangleArea(length, widht);
alert(`The rectangle area is: ${result}`);

console.log('hi');

