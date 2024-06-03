// Task 1 Basic counter:
const btnIncrement = document.getElementById('increment-btn');
const count = document.getElementById('count');

let counter = 0;
let darkerGreen = true;

btnIncrement.addEventListener('click', () => {
  darkerGreen
    ? (btnIncrement.style.backgroundColor = 'rgb(112, 224, 200)')
    : (btnIncrement.style.backgroundColor = 'rgb(12, 173, 138)');
  counter++;
  count.innerText = counter;
  darkerGreen = false
});
