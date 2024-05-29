// variables

let num1 = 100
let num2 = 8
let resultSum = num1 + num2
let resultSub = num1 - num2
let resultMult = num1 * num2
let resultDiv = num1 / num2

console.log('first exercise: ', resultSum, resultSub, resultMult, resultDiv);

// string interpolation and type coercion

let nameVar = 'Gato'
let age = 7
console.log('type of age before coercion: ', typeof age);
age += ''
const message = `Hello, my name is ${nameVar} and I am ${age} years old.`

console.log('second exercise: ', message);
console.log('type of age after coercion: ', typeof age);

// type checking and type coercion

let value = 11
console.log('third exercise type of value before coercion: ', typeof value);
value += ''
console.log('third exercise type of value after coercion: ', typeof value);

// documenting functiolalities using comments

// first approach
// the following program calculates a rectangle area
// this variable store the width value
let width = 10
// this variable stores the length value
let length = 11
// this variable stores the total area
let rectangleArea = width * length
// to check the result on the console, log that variable
console.log('rectangle area first approach: ', rectangleArea);

// second approach
// this is a funcion that calculates a rectangle area 
// it expects two parameters: width and length
function calcRectangleArea (width, length) {
    return width * length
}
// to do the calculation, declare a variable and asign it the function passing the width ans length values as the arguments
let calcRectangleAreaResult1 = calcRectangleArea(10, 12)
// the advantage of using functions is that we can reuse it for different values
let calcRectangleAreaResult2 = calcRectangleArea(width, length)
let calcRectangleAreaResult3 = calcRectangleArea(3, 2)
// to check the result on the console, log that variable
console.log('rectangle area first approach: ', calcRectangleAreaResult1);
console.log('rectangle area first approach: ', calcRectangleAreaResult2);
console.log('rectangle area first approach: ', calcRectangleAreaResult3);








