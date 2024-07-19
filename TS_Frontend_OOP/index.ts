let integer: number[]; // declaration
let strArray: string[] = ['hi', 'hello']; 

integer = [1, 2, 3] // initialization

let strArray2: Array<string> = ['hi', 'hello'] // declaration and initialization
let strNumArray: Array<string | number> = ['hi', 4]
let strNumArray2: (string | number)[] = ['hello', 4]

let twoDimensionArr: string[][] = [
    ['hello', 'hi'],
    ['bla', 'yada']
]

console.log(twoDimensionArr[1][1]); // logs 'yada'

// UNION - the values can be one OR another
let unionValues: (number | string)[] = [4, 'bla'];

// TUPLE - the values must be in the specific order and length
let tupleValues: [string, number, object, boolean] = ['hallo', 5, {}, true];
// the following gives me an error
// let tupleValues2: [string, number, object, boolean] = [5, 5, {}, true]
// let tupleValues3: [string, number] = []
// tupleValues3.push('hi')
// tupleValues3.push(3)

// OPTIONAL property
// this variable should be an object with properties name and age, but age is optional
let person: {
  name: string;
  age?: number;
};
// When assining the values, it would give me an error if age was not optional
person = {
  name: 'Foxy',
};

// CONTRACTS - set of rules

// INTERFACE
interface Student {
  id: number;
  name: string;
  age: number;
  email: string;
  grade?: number;
  subject?: string;
}

interface GraduateStudent extends Student {
  graduationYear: number;
}

interface ExtraLessonMathStudent extends Student {
  mentor: string;
  dates: string[];
}

let studentOne: GraduateStudent = {
  id: 1,
  name: 'Chico',
  age: 8,
  email: 'chico@gmail.com',
  graduationYear: 2024,
};

let studentTwo: ExtraLessonMathStudent = {
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
function add(a: number, b: number): number {
  return a + b;
}

function displayStudentDetails(student: Student): void {
  if ((student as GraduateStudent).graduationYear) {
    const stud = student as GraduateStudent;
    console.log('graduation year: ', stud.graduationYear);
  } else if ((student as ExtraLessonMathStudent).mentor) {
    const extStud = student as ExtraLessonMathStudent;
    console.log('dates to extra Math lessons: ', extStud.dates.join(', '));
  }
}

displayStudentDetails(studentOne);
displayStudentDetails(studentTwo);

// function using interface:
interface MathFunction {
  (x: number, y: number): number;
}

const calculateArea: MathFunction = (width, length) => {
  return width * length;
};

const area = calculateArea(2, 6);
console.log(area);

interface MathFunctionArray {
  (...numbers: number[]): number;
}

const sumNums: MathFunctionArray = (...numbers) => {
  return numbers.reduce((a, b) => a + b, 0);
};

const sum = sumNums(1, 2, 11);
console.log(sum);

// Form validation
// define a form structure
interface RegFormData {
  name: string;
  email: string;
  password: string;
  age?: number;
}

const validateForm = (data: RegFormData): string[] => {
  const errors: string[] = [];
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

const formData: RegFormData = {
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
enum PrintMedia {
  NEWSPAPER,
  NEWLETEER,
  MAGAZINE,
  BOOK
}

console.log('numetic enum example: ', PrintMedia);
console.log('selecting a numeric enum: ', PrintMedia.MAGAZINE); // logs 2

// string
enum AccountType {
  CUSTOM = 7,
  PERSONAL = 'Personal',
  STARTUP = 'Startup',
  ENTERPRISE = 'Enterprise',
}

console.log('string enum example: ', AccountType.CUSTOM)
console.log('string enum example: ', AccountType)

// CLASSES
class Entity {
  title: string;
  readonly address: string
  protected id: number;
  private creationDate: Date;

  constructor(title: string = '', address: string = '') {
    this.title = title
    this.address = address
    this.id = Math.floor(Math.random() * 1000)
    this.creationDate = new Date()
  }

  getTitle(): string {
    return this.title
  }  

  getAddress(): string {
    return this.address
  }  

  getId(): number {
    return this.id
  }

  getCreationDate(): Date {
    return this.creationDate
  }

  setTitle(title: string): void {
    this.title = title
  }
}

const entityOne = new Entity('Entity One', 'Stralauer Platy')

// entityOne.id = 2 // as id is protected, it says that id is protected, so it can't be changed
// entityOne.creationDate // as creationDate is private, it says that creationDate is only accesseble within the class, using the getter.
// entityOne.address = 'another one' // as address is readonly, it can't be changed.
console.log('checking the date by using the method getCreationDate(): ', entityOne.getCreationDate()); 
console.log(entityOne);

// ADVANCED TYPES 
// INTERSECTION - & - combining multiple types
type LeftType = {
  id: number
  left: string
}

type RightType = {
  id: number
  right: string
}

function showIntersectionType(args: LeftType & RightType) {
  console.log(args);
}

showIntersectionType({id: 1, left: 'test', right: 'test'})

// GENERIC - T - reusing part of a given type - this 'T' means that we are going to define this type later
interface GenericType<T, U> {
  id: number
  name: T
  address: U
}

function showGenericTypes(args: GenericType<string, string>) {
  console.log(args);
}

function showGenericTypes2(args: GenericType<number, string>) {
  console.log(args);
}

function showGenericTypes3(args: GenericType<string[], number[]>) {
  console.log(args);
}
// In these examples id is always a number...
showGenericTypes({id: 1, name: 'test', address: 'address one'}) // name and address should be string
showGenericTypes2({id: 1, name: 2, address: 'address one'}) // name should be number and address string
showGenericTypes3({id: 1, name: ['hi'], address: [11]}) // both should be array, name as string, address as number

// another example using direct in the function:
function genrericType<T>(arg: T[]): T[] {
  return arg;
}
console.log(genrericType([1, 2]));
console.log(genrericType([{name: 'test', id: 1}]));

// MAPPED TYPE - allows me to take an existing type and transform each of its props into a new type
type userType = {
  id: number
  name: string
}

type TransformToBoolean<T> = {
  [PROPS in keyof T]: boolean // it says: transform all the props original types to boolean
}

const newUser: TransformToBoolean<userType> = {
  id: true,
  name: false
}

// PARTIAL - allows me to make ALL prop of the type T optinal just by adding 'Partial' keyword in the arg field
interface UserAccount {
  id: string
  name: string
  hobbies: string[]
  motherName: string
}

function createNewUserAccount(args: Partial<UserAccount>) {
  console.log(args);
}

createNewUserAccount({name: 'Foxy'}) // calling the function with just one arg is ok


// REQUIRED - allows me to make ALL prop of a type required (considering that when this type was created it used some optional props)
// it is usefull when these type has been used but for some functionality and for not having to create a new type, we can use 'REQUIRED'
interface UserBankAccount {
  id: string
  name: string
  hobbies?: string[]
  motherName?: string
}

function createNewUserBankAccount(args: Required<UserBankAccount>) {
  console.log(args);
}

// createNewUserBankAccount({name: 'Foxy'}) // it does not work
createNewUserBankAccount({id: '1', name: 'Foxy', hobbies: ['dancing'], motherName: 'Mommy'})
 