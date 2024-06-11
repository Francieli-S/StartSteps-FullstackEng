const students = ['Fran', 'Foxy', 'Gato', 'Leo', 'Neco'];

const studentList = document.getElementById('student-list');

function updateStudentList() {
  studentList.innerHTML = ''
  students.forEach((student) => {
    const listItem = document.createElement('li');
    listItem.textContent = student;
    studentList.appendChild(listItem);
  });
  document.getElementById('student-name').value = ''
}

updateStudentList()

const addButton = document.getElementById('add-button')
addButton.addEventListener('click', () => {
  const studentName = document.getElementById('student-name').value
  students.push(studentName)
  updateStudentList()
})

const deleteButton = document.getElementById('delete-button')
deleteButton.addEventListener('click', () => {
  let deleteStudentName = document.getElementById('delete-student-name')
  const indexToDelete = students.indexOf(deleteStudentName.value)
  if (indexToDelete !== -1) {
    students.splice(indexToDelete, 1)
  }
  deleteStudentName.value = ''
  updateStudentList()
})


