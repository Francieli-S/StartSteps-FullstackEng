"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let integer = 3;
let strArray = ['hi', 'hello'];
// UNION - the values can be one OR another
let unionValues = [4, 'bla'];
// TUPLE - the values must be in the specific order and length
let tupleValues = ['hallo', 5, {}, true];
// the following gives me an error
// let tupleValues2: [string, number, object, boolean] = [5, 5, {}, true]
// let tupleValues3: [string, number] = []
// tupleValues3.push('hi')
// tupleValues3.push(3)
// OPTIONAL property
// this variable should be an object with properties name and age, but age is optional
let person;
// When assining the values, it would give me an error if age was not optional
person = {
    name: 'Foxy'
};
let studentOne = {
    id: 1,
    name: 'Chico',
    age: 8,
    email: 'chico@gmail.com',
    graduationYear: 2024
};
// // TYPE X Interface
// type ClientType = {
//   name: string
//   address: string
// }
// // when I try to use 'extends' in the next line, it shows as an error
// //type ClientTypeExtands extends 
// interface ClientInterface {
//   name: string
//   address: string
// }
// // when I try to use 'extends' here, it does not show an error, so interfaces can extends types!
// interface ClientInterfaceExtends extends ClientType {
//   id: number
// }
// type ClientType = {
//   age: number
// }
// interface ClientInterface {
//   age: number
// }
// FUNCTIONS
function add(a, b) {
    return a + b;
}
