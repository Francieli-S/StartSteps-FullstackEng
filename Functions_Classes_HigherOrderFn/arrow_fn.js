// functinon with function key word:

function double(x) {
  return x * 2
}

console.log(double(2));

// Arrow function

const double2 = (x) => x * 2

console.log(double2(4));

// object method with function key word:

const person = {
  firtName: 'Foxy',
  greeting: function() {
    console.log('Hello');
  }
}

// object method with arrow function:

const personArrow = {
  firtName: 'Foxy',
  greeting: () => console.log('Hello')
}

person.greeting()
personArrow.greeting()