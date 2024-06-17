// create a new Map data structure
const cityPopulation = new Map();

// add the data
cityPopulation.set('New York', 84);
cityPopulation.set('Los Angeles', 39);
cityPopulation.set('Chicago', 27);
cityPopulation.set('Houston', 23);
cityPopulation.set('Phoenix', 16);

// function to display
function updateCityDisplay() {
  const cityDataDiv = document.getElementById('city-data');
  cityDataDiv.innerHTML = '';
  cityPopulation.forEach((population, city) => {
    cityDataDiv.innerHTML += `<p>${city}: ${population} people.</p>`;
  });
}

updateCityDisplay();

// function to add new data
function addCity() {
  // select the input fields
  const cityInput = document.getElementById('city-input');
  const populationInput = document.getElementById('population-input');

  // validate the inputs
  let city = cityInput.value.trim();
  let population = +populationInput.value;

  if (city && !isNaN(population)) {
    // set the inputs as a new data into the Map
    cityPopulation.set(city, population);

    // call the funtion tho update the display with the new entry
    updateCityDisplay();
    console.log(cityPopulation);

    // clean the input fields
    cityInput.value = '';
    populationInput.value = '';
  } else {
    alert('Please add valid city and population.');
  }
}

// Afternoon Tasks
// Task 1 Create a Map os students and their grades
const studentGrade = new Map()

studentGrade.set('Gato', 10)
studentGrade.set('Foxy', 10)
studentGrade.set('Mei', 9.5)
studentGrade.set('Susam', 9.5)
studentGrade.set('Mim', 9.5)
studentGrade.set('Cleo', 7)

const entriesStudentGrade = Array.from(studentGrade.entries())
console.log(entriesStudentGrade);


function displayStudentGradeList() {
  const studentList = document.getElementById('student-grade-list')
  studentList.innerHTML = ''
  
  studentGrade.forEach((grade, student) => {
    studentList.innerHTML += `<li>${student}: ${grade}</li>`
  })
}

displayStudentGradeList()

// Task 2 Create two student group

const group1 = new Map([...studentGrade])
console.log(group1);