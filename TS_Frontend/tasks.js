var studentOne = {
    id: 1,
    name: 'Chico',
    age: 8,
    email: 'chico@gmail.com',
    graduationYear: 2024
};
// Task 4
function gradeStudent(student, grade, subject) {
    !student.grade && student.grade;
    student.grade = grade;
    !student.subject && student.subject;
    student.subject = subject;
    console.log("".concat(student.name, " received a grade of ").concat(student.grade, " in ").concat(student.subject));
    //return `${student.name} received a grade of ${student.grade} in ${student.subject}`;
}
console.log('studentOne:>> ', studentOne);
// const studentOneGrades = gradeStudent(studentOne, 10, 'Math')
gradeStudent(studentOne, 10, 'Math');
console.log('studentOne after add grade and subject:>> ', studentOne);
// Task bonus
var studentTwo = {
    id: 2,
    name: 'Bento',
    age: 5,
    email: 'bento@gmail.com',
    grade: 9.9
};
var studentThree = {
    id: 3,
    name: 'Gato',
    age: 7,
    email: 'gato@gmail.com',
    grade: 9.8
};
var studentFour = {
    id: 4,
    name: 'Foxy',
    age: 5,
    email: 'foxy@gmail.com',
    grade: 9.7
};
var students = [studentTwo, studentThree, studentFour];
console.log(students);
var calculateAverageGrade = function (students) {
    var totalGrades = students.reduce(function (sum, student) { return sum + (student.grade || 0); }, 0);
    return totalGrades / students.length;
};
// the code below didn't work because if grade is an optinal property, it could be 'undefined', so we have to add || 0
// const calculateAverageGrade = (students: Student[]): number => {
//    const totalGrades = students.reduce((sum, student) => sum + student.grade, 0);
//    return totalGrades / students.length;
//   };
console.log('AverageGrade: ', calculateAverageGrade(students));
