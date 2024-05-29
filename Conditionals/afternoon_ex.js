// Task 1

let temperature = showPrompt()
showTemperMessage(temperature)

function showPrompt() {
    let currentTemperature = prompt('What is the temperature now in °C?');
    return currentTemperature
}

function showTemperMessage(temp) {
    console.log('HERE IS THE TEMP:', temp);
  if (!temp) {
    alert('Should enter a temperature');
    let newTemperature = showPrompt()
    showTemperMessage(newTemperature)
    return
  }

  temp < 0
    ? alert('Freezing')
    : temp >= 0 && temp <= 15
    ? alert('Cold')
    : temp >= 16 && temp <= 25
    ? alert('Pleasant')
    : temp > 25
    ? alert('Hot')
    : alert('You shoul enter a number!');
}








//   alert(messageTemp)

// Task 2

// let userAge = prompt('What is your age?')
let userAge = 'hi';
let ticketPrice;

// userAge <= 12
//   ? ticketPrice = '8€'
//   : userAge >= 13 && userAge <= 64
//   ? ticketPrice = '12€'
//   : userAge >= 65
//   ? ticketPrice = '10€'
//   : ticketPrice = 'Should enter your age first';

!userAge
  ? alert('type your age')
  : userAge <= 12
  ? (ticketPrice = '8€')
  : userAge >= 13 && userAge <= 64
  ? (ticketPrice = '12€')
  : userAge >= 65
  ? (ticketPrice = '10€')
  : (ticketPrice = 'Should enter your age first');

console.log(ticketPrice);
//   alert(ticketPrice)

// Task 3 - bonus

// FUNCTIONS
// Task 1

function greet(name) {
  return `Hello, ${name}`;
}

console.log(greet('Foxy'));

// Task 2

function add(num1, num2) {
  return num1 + num2;
}

console.log(add(1, 13));

// Task 3

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(2, 13));
