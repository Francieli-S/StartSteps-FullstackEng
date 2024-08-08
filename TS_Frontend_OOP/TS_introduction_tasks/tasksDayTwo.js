"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Task 1
let studentName = 'Gato';
let studentId = 1;
let subject = ['Math', 'Chemistry', 'Biology'];
let major = false;
let isStuding = () => { };
let grade = 10;
let uniqueSymbol = Symbol();
// Task 3
var varVariable = false;
// variable = `A variable declared without key word uses 'var'`
// console.log(variable);
const isGlobalScope = () => {
    let letVariable = false;
    varVariable = true;
    console.log('Is global?: ', 'let: ', letVariable);
    console.log('Is global?: ', 'var: ', varVariable);
};
isGlobalScope();
function isLocalScope() {
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
const calculateGrade = (student) => {
    let averageScore = +(student.allScores.reduce((sum, score) => sum + score, 0) /
        student.allScores.length).toFixed(2);
    console.log('averageScore: ', averageScore, 'attendence', student.attendence);
    switch (true) {
        case student.attendence < 75:
            console.log('Grade F');
            break;
        case averageScore >= 90:
            console.log('Grade A');
            break;
        case averageScore >= 80:
            console.log('Grade B');
            break;
        case averageScore >= 70:
            console.log('Grade C');
            break;
        case averageScore >= 60:
            console.log('Grade D');
            break;
        default:
            console.log('Grade F');
            break;
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
const studentOne = {
    studentName: 'Bento',
    studentId: 1,
    subject: ['Math', 'Hunt', 'Cuddle'],
    major: false,
    isStuding: true,
    grade: 11,
    uniqueSymbol: Symbol('B'),
    allScores: [100, 92.55, 8, 97],
    attendence: 85
};
const studentTwo = {
    studentName: 'Chico',
    studentId: 2,
    subject: ['Math', 'Hunt', 'Cuddle'],
    major: false,
    isStuding: true,
    grade: 11,
    uniqueSymbol: Symbol('C'),
    allScores: [100, 98.99, 99.55, 98.9],
    attendence: 74
};
calculateGrade(studentOne);
calculateGrade(studentTwo);
