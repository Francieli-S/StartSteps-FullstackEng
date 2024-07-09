// Task 3
interface Student {
  id: number,
  name: string,
  age: number,
  email: string,
  grade?: number,
  subject?: string
}

interface GraduateStudent extends Student {
  graduationYear: number
}

let studentOne: GraduateStudent = {
  id: 1,
  name: 'Chico',
  age: 8,
  email: 'chico@gmail.com',
  graduationYear: 2024
}

// Task 4
function gradeStudent(student: Student, grade: number, subject: string): void {
  !student.grade && student.grade
  student.grade = grade
  
  !student.subject && student.subject
  student.subject = subject
  
  console.log(`${student.name} received a grade of ${student.grade} in ${student.subject}`);
  //return `${student.name} received a grade of ${student.grade} in ${student.subject}`;
}

console.log('studentOne:>> ', studentOne);
// const studentOneGrades = gradeStudent(studentOne, 10, 'Math')
gradeStudent(studentOne, 10, 'Math');
console.log('studentOne after add grade and subject:>> ', studentOne);

// Task bonus
let studentTwo: Student = {
  id: 2,
  name: 'Bento',
  age: 5,
  email: 'bento@gmail.com',
  grade: 9.9
}

let studentThree: Student = {
  id: 3,
  name: 'Gato',
  age: 7,
  email: 'gato@gmail.com',
  grade: 9.8
}

let studentFour: Student = {
  id: 4,
  name: 'Foxy',
  age: 5,
  email: 'foxy@gmail.com',
  grade: 9.7
}

const students: Student[] = [studentTwo, studentThree, studentFour]

console.log(students);

const calculateAverageGrade = (students: Student[]): number => {
  const totalGrades: number = students.reduce((sum, student) => sum + (student.grade || 0), 0)
  return totalGrades / students.length
} 

// the code below didn't work because if grade is an optinal property, it could be 'undefined', so we have to add || 0
// const calculateAverageGrade = (students: Student[]): number => {
//    const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
//    return totalGrades / students.length;
//   };

console.log('AverageGrade: ', calculateAverageGrade(students));