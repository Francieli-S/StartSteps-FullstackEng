// Task 1 Basic counter:
const btnIncrement = document.getElementById('increment-btn');
const btnDecrement = document.getElementById('decrement-btn');
const count = document.getElementById('count');

let counter = 0;
// let darkerGreen = true;

btnIncrement.addEventListener('click', () => {
  counter++;
  count.innerText = counter;
});

btnDecrement.addEventListener('click', () => {
  counter--;
  count.innerText = counter;
});

// Task 2 Simple form validation:
const btnSubmit = document.getElementById('submit-btn');
const inputName = document.getElementById('input-name');
const inputEmail = document.getElementById('input-email');

btnSubmit.addEventListener('click', () => {
  let name = inputName.value;
  let email = inputEmail.value;

  if (name !== '' && email !== '') {
    alert(`${name}, your data has been sent.`);
  }
});

// Bonus 1 Interactive Image Gallery
const flowerOne = document.getElementById('flower1');
const flowerTwo = document.getElementById('flower2');
const flowerThree = document.getElementById('flower3');

const flowers = document.getElementById('flowers');

let flowerOneClicked = false;

flowerOne.addEventListener('click', () => {
  if (!flowerOneClicked) {
    flowerOne.style.width = '100px';
    flowerOneClicked = true;
  } else {
    flowerOne.style.width = '50px';
    flowerOneClicked = false;
  }
});

// let isSwitchingRight = false
// let isSwitchingLeft = false

flowers.addEventListener('keydow', (event) => {
  if (event.key === 'ArrowRight') {
    // isSwitchingRight = true
    console.log('hi');
  }
});

flowerTwo.addEventListener('click', () => {
  flowerTwo.style.width = '100px';
});

flowerThree.addEventListener('click', () => {
  flowerThree.style.width = '100px';
});
