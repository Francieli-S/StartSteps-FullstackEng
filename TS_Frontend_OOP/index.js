"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let integer; // declaration
let strArray = ['hi', 'hello'];
integer = [1, 2, 3]; // initialization
let strArray2 = ['hi', 'hello']; // declaration and initialization
let strNumArray = ['hi', 4];
let strNumArray2 = ['hello', 4];
let twoDimensionArr = [
    ['hello', 'hi'],
    ['bla', 'yada']
];
console.log(twoDimensionArr[1][1]); // logs 'yada'
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
    name: 'Foxy',
};
let studentOne = {
    id: 1,
    name: 'Chico',
    age: 8,
    email: 'chico@gmail.com',
    graduationYear: 2024,
};
let studentTwo = {
    id: 2,
    name: 'Bento',
    age: 6,
    email: 'bento@gmail.com',
    mentor: 'Mr. Chico',
    dates: ['Monday', 'Wednesday'],
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
function displayStudentDetails(student) {
    if (student.graduationYear) {
        const stud = student;
        console.log('graduation year: ', stud.graduationYear);
    }
    else if (student.mentor) {
        const extStud = student;
        console.log('dates to extra Math lessons: ', extStud.dates.join(', '));
    }
}
displayStudentDetails(studentOne);
displayStudentDetails(studentTwo);
const calculateArea = (width, length) => {
    return width * length;
};
const area = calculateArea(2, 6);
console.log(area);
const sumNums = (...numbers) => {
    return numbers.reduce((a, b) => a + b, 0);
};
const sum = sumNums(1, 2, 11);
console.log(sum);
const validateForm = (data) => {
    const errors = [];
    const { name, email, password, age } = data;
    if (name === '') {
        errors.push('Invalid name.');
    }
    if (!email.includes('@')) {
        errors.push('Invalid email address.');
    }
    if (password.length < 8) {
        errors.push('Password must be at least 8 characters long.');
    }
    if (age !== undefined && (age <= 0 || age > 150)) {
        errors.push('Age must be a valid number!');
    }
    return errors;
};
const formData = {
    name: '',
    email: 'foxygmail.com',
    password: 'meow',
    age: 0,
};
const validationErrors = validateForm(formData);
if (validationErrors.length > 0) {
    console.error('Form validation errors:');
    validationErrors.forEach((error) => console.error(error));
}
// ENUMS
// Be aware of some behaviour like:
// when we assign values, the next variable expects a value
// if the first variable does not have a value, 0 will be assined
// check more specific behaviours
// numeric
var PrintMedia;
(function (PrintMedia) {
    PrintMedia[PrintMedia["NEWSPAPER"] = 0] = "NEWSPAPER";
    PrintMedia[PrintMedia["NEWLETEER"] = 1] = "NEWLETEER";
    PrintMedia[PrintMedia["MAGAZINE"] = 2] = "MAGAZINE";
    PrintMedia[PrintMedia["BOOK"] = 3] = "BOOK";
})(PrintMedia || (PrintMedia = {}));
console.log('numetic enum example: ', PrintMedia);
console.log('selecting a numeric enum: ', PrintMedia.MAGAZINE); // logs 2
// string
var AccountType;
(function (AccountType) {
    AccountType[AccountType["CUSTOM"] = 7] = "CUSTOM";
    AccountType["PERSONAL"] = "Personal";
    AccountType["STARTUP"] = "Startup";
    AccountType["ENTERPRISE"] = "Enterprise";
})(AccountType || (AccountType = {}));
console.log('string enum example: ', AccountType.CUSTOM);
console.log('string enum example: ', AccountType);
// CLASSES
class Entity {
    constructor(title = '', address = '') {
        this.title = title;
        this.address = address;
        this.id = Math.floor(Math.random() * 1000);
        this.creationDate = new Date();
    }
    getTitle() {
        return this.title;
    }
    getAddress() {
        return this.address;
    }
    getId() {
        return this.id;
    }
    getCreationDate() {
        return this.creationDate;
    }
    setTitle(title) {
        this.title = title;
    }
}
const entityOne = new Entity('Entity One', 'Stralauer Platy');
// entityOne.id = 2 // as id is protected, it says that id is protected, so it can't be changed
// entityOne.creationDate // as creationDate is private, it says that creationDate is only accesseble within the class, using the getter.
// entityOne.address = 'another one' // as address is readonly, it can't be changed.
console.log('checking the date by using the method getCreationDate(): ', entityOne.getCreationDate());
console.log(entityOne);
