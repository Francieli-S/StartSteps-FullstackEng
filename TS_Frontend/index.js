var integer = 3;
var strArray = ['hi', 'hello'];
// UNION - the values can be one OR another
var unionValues = [4, 'bla'];
// TUPLE - the values must be in the specific order and length
var tupleValues = ['hallo', 5, {}, true];
// the following gives me an error
// let tupleValues2: [string, number, object, boolean] = [5, 5, {}, true]
// let tupleValues3: [string, number] = []
// tupleValues3.push('hi')
// tupleValues3.push(3)
// OPTIONAL property
// this variable should be an object with properties name and age, but age is optional
var person;
// When assining the values, it would give me an error if age was not optional
person = {
    name: 'Foxy'
};
var studentOne = {
    id: 1,
    name: 'Chico',
    age: 8,
    email: 'chico@gmail.com',
    graduationYear: 2024
};
// interface ClientInterfaceExtends extends ClientType
// interface ClientInterfaceExtends extends ClientType
// FUNCTIONS
function add(a, b) {
    return a + b;
}
// Task 4
function gradeStudent(student, grade, subject) {
    !student.grade && student.grade;
    student.grade = grade;
    !student.subject && student.subject;
    student.subject = subject;
    return "".concat(student.name, " received a grade of ").concat(grade, " in ").concat(subject);
}
console.log('studentOne:>> ', studentOne);
var studentOneGrades = gradeStudent(studentOne, 10, 'Math');
console.log(studentOneGrades);
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
