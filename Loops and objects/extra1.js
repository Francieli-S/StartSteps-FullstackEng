function Student(name, grades) {
  this.name = name
  this.grades = grades
}

const classromm = {
  students: [],
  averageGrades: {},
  addStudent: function (newStudent) {
    this.students.push(newStudent);
  },
}

const student1 = new Student('Alice', [85, 90])
const student2 = new Student('Bob', [92, 88, 79])
const student3 = new Student('Chalie', [80, 85, 88, 70])

classromm.addStudent(student1)
classromm.addStudent(student2)
classromm.addStudent(student3)

// console.log('Students in the classroom: ', classromm.students);

function calculateAverageGrades(classromm) {
  let individualAverage = 0
  for(let i = 0; i < classromm.students.length; i++) {
    console.log('HERE', classromm.students[i]);
    for(let j = 0; j < classromm.students[i].grades.length; j++) {
      console.log('HERE HERE', classromm.students[i].grades[j]);
      individualAverage+=classromm.students[i].grades[j]
      console.log('individualAverage: ', individualAverage);
    }
    classromm.averageGrades[classromm.students[i].name] = (individualAverage / classromm.students[i].grades.length).toFixed(2)
    individualAverage = 0
  }
  console.log(classromm.averageGrades);
}

calculateAverageGrades(classromm)