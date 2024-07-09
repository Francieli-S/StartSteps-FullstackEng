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
  //isStuding = (): void => {}
  grade: number;
  uniqueSymbol: symbol;
};

// Task 3
var varVariable = false
// variable = `A variable declared without key word uses 'var'`

// console.log(variable);

const isGlobalScope = (): void => {
  let letVariable = false
  varVariable = true

  console.log('Is global?: ', 'let: ', letVariable);
  console.log('Is global?: ', 'var: ', varVariable);
}

isGlobalScope();

function isLocalScope(): void {
  let letVariable2 = false
  var varVariable2 = true
  
  console.log('Variables letVariable2 and varVariable2 are local scope');
}

// if (varVariable2) {
  //   console.log('is global');
  // } else {
    //   console.log('is local');
    // }
    
isLocalScope()

// Task 4
// I'm not doing it because I have doing it for some weeks.

// Task 5


    