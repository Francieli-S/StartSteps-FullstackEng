// Short circuit evaluation with OR ||
// Cation to use because can be trick to read and if the value of the left is zero, it can be interpreted as null!!!!

let userName
let defaultUserName = 'Foxy'
let message = userName || defaultUserName

console.log('Welcome', message);

let userName2 = 'Gato'
let defaultUserName2 = 'Chico'
let message2 = userName2 || defaultUserName2

console.log('Welcome', message2);

// Better to use Nullish Coalescing Operator (??)
// Also be carfull with empty strings here

let userName3 = 'Bento'
let defaultUserName3 = 'Belinha'
let message3 = userName3 ?? defaultUserName3// if userName3 is not null/undefined return userName3 value, otherwise return defaultUerName3

console.log('Welcome', message3); 

let userName4 = null
// let userName4 = '' // it console.log: Welcome ''
let defaultUserName4 = 'Milu'
let message4 = userName4 ?? defaultUserName4 // if userName4 is null/undefined return evaluate the right side, return defaultUerName4

console.log('Welcome', message4); 

// Check if a number is odd with branching...

let num1 = 13
let num2 = 14
let isOdd1 = num1 % 2 !== 0 ? true : false
let isOdd2 = num2 % 2 !== 0 ? true : false

console.log(isOdd1);
console.log(isOdd2);

// Defautl message if username is unavailable, using OR ||
// Just like the first and second example above

// Defautl message if username is unavailable, using ??
// Just like the third and fourth example above


