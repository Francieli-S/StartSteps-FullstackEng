class Town {
  constructor(town, population) {
    this.town = town
    this.population = population
  }    
}

const towns = [
  new Town('Berlin', 8.6),
  new Town('Stuttgart', 5),
  new Town('Freiburg', 3.4),
  new Town('Potsdam', 2.3),
  new Town('London', 12.7)
]

const mostPopulatedTown = towns.sort((a, b) => b.population - a.population)
// remmembering that sort mutates the original array

console.log(mostPopulatedTown);

for (let i = 0; i < 3; i++) {
  const town = mostPopulatedTown[i]
  console.log('with for loop: ', `#${i + 1}: ${town.town} with ${town.population}`);
}

// It can be done also with forEach:

const mostPopulatedTown2 = towns.sort((a, b) => b.population - a.population)
// remmembering that sort mutates the original array

mostPopulatedTown2.forEach((town, i) => {
  if (i < 3) {
    console.log('with forEach: ', `#${i + 1}: ${town.town} with ${town.population}`);
  }
})

// Object.entries() reviewing:

const newTown1 = new Town('Hamburg', 1.9)

console.log(Object.entries(newTown1)); // [ [ 'town', 'Hamburg' ], [ 'population', 1.9 ] ]

// Looping over objects with Object.entries():

const newTown2 = new Town('Paris', 10.1)

for (const [key, value] of Object.entries(newTown2)) { // destructuring the array in two variables key and value
  console.log(key, value); // town Paris (next line:) population 10.1
}





