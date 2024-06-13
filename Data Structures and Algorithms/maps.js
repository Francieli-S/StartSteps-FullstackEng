// create a new Map data structure
const cityPopulation = new Map();

// set the data
cityPopulation.set('New York', 84);
cityPopulation.set('Los Angeles', 39);
cityPopulation.set('Chicago', 27);
cityPopulation.set('Houston', 23);
cityPopulation.set('Phoenix', 16);

// funtion to display
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
