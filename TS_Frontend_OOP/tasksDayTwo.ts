// Task 1
let studentName: string = 'Gato';
let studentId: number = 1;
let subject: string[] = ['Math', 'Chemistry', 'Biology'];
let major: string | boolean = false;
let isStuding = (): void => {};
let grade: number = 10;
let uniqueSymbol: symbol = Symbol();

// Task 2
type Student = {
  studentName: string;
  studentId: number;
  subject: string[];
  major: string | boolean;
  isStuding: boolean;
  grade: number;
  uniqueSymbol: symbol;
  // from task 5:
  allScores: number[];
};

// Task 3
var varVariable = false;
// variable = `A variable declared without key word uses 'var'`

// console.log(variable);

const isGlobalScope = (): void => {
  let letVariable = false;
  varVariable = true;

  console.log('Is global?: ', 'let: ', letVariable);
  console.log('Is global?: ', 'var: ', varVariable);
};

isGlobalScope();

function isLocalScope(): void {
  let letVariable2 = false;
  var varVariable2 = true;

  console.log('Variables letVariable2 and varVariable2 are local scope');
}

// if (varVariable2) {
//   console.log('is global');
// } else {
//   console.log('is local');
// }

isLocalScope();

// Task 4
// I'm not doing it because I have been doing it for some weeks.

// Task 5
const calculateGrade = (student: Student): void => {
  let averageScore: number = +(
    student.allScores.reduce((sum, score) => sum + score, 0) /
    student.allScores.length
  ).toFixed(2);

  switch (true) {
    case averageScore >= 90:
      console.log(averageScore, 'Grade A');
      break;
    case averageScore >= 80:
      console.log(averageScore, 'Grade B');
      break;
    case averageScore >= 70:
      console.log(averageScore, 'Grade C');
      break;
    case averageScore >= 60:
      console.log(averageScore, 'Grade D');
      break;
    default:
      console.log(averageScore, 'Grade F');
      break
  }

  // in the below case, change the return value to string
  // if (averageScore >= 90) {
  //   return 'Grade A';
  // } else if (averageScore >= 80) {
  //   return 'Grade B';
  // } else if (averageScore >= 70) {
  //   return 'Grade C';
  // } else if (averageScore >= 60) {
  //   return 'Grade D';
  // } else {
  //   return 'Grade F';
  // }
};

const studentOne: Student = {
  studentName: 'Bento',
  studentId: 1,
  subject: ['Math', 'Hunt', 'Cuddle'],
  major: false,
  isStuding: true,
  grade: 11,
  uniqueSymbol: Symbol('B'),
  allScores: [100, 92.55, 8, 97],
};

calculateGrade(studentOne);
