// Morning practice
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

// Afternoon Task 1
let fruits = ['banana', 'apple', 'watermelow', 'orange', 'grapes']

const fruitsList = document.getElementById('fruit-list')

function updateFruitList() {
  fruitsList.innerHTML = ''
  fruits.forEach(fruit => {
    const listItem = document.createElement('li')
    listItem.textContent = fruit
    fruitsList.appendChild(listItem)
  })
  document.getElementById('fruit-name').value = ''
}

updateFruitList()

// Afternoon Task 3
const fruitArrayLengthParagraph = document.getElementById('fruit-array-length')

function updateFruitListLength() {
  fruitArrayLengthParagraph.innerText = fruits.length
}

updateFruitListLength()

// Afternoon Task 2
document.querySelector('#fruit-name').addEventListener('change', (e) => {
  const inputValue = e.target.value
  fruits.push(inputValue)
  updateFruitList()
  updateFruitListLength()
})

// Afternoon Task 4
// Afternoon Task 5
const deletefruitName = document.querySelector('#delete-fruit-name')

deletefruitName.addEventListener('change', (e) => {
  let inputValue = e.target.value
  fruits = fruits.filter(fruit => fruit !== inputValue)
  updateFruitList()
  updateFruitListLength()
  deletefruitName.value = ''
})

// Afternoon Task 6
const fruitNameToPosition = document.querySelector('#fruit-name-to-position')
const position = document.querySelector('#position-fruit')

fruitNameToPosition.addEventListener('change', (e) => {
  let inputValue = e.target.value
  fruits.splice(position.value, 0, inputValue)
  updateFruitList()
  updateFruitListLength()
  fruitNameToPosition.value = ''
  position.value = ''
  console.log(fruits);
})

// Afternoon Task 7
const movies = [
  {title: 'One', genre: 'Drama'},
  {title: 'Two', genre: 'Action'},
  {title: 'Three', genre: 'Thriller'},
  {title: 'Four', genre: 'Comedy'},
  {title: 'Five', genre: 'Drama'},
]

const movieList = document.getElementById('movie-list');
const select = document.getElementById('genre').innerHTML
console.log(select);

function filterMoviesList() {
  // movieList.innerHTML = ''
  movies.filter((movie) => {



    const listItem = document.createElement('li');
    listItem.textContent = student;
    studentList.appendChild(listItem);
  });
  document.getElementById('student-name').value = ''
}

updateStudentList()










