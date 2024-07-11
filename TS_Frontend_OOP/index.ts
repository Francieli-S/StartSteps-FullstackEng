let integer: number = 3;
let strArray: string[] = ['hi', 'hello'];

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
