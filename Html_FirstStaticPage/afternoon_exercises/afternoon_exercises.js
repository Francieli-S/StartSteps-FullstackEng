// Task 3 Calculate the Sum of two number:
const inputOne = document.getElementById('input-one');
const inputTwo = document.getElementById('input-two');
const buttonSum = document.getElementById('button-sum');
const result = document.getElementById('result');

const calculateSum = (num1, num2) => {
  let result = +num1 + +num2;
  return result;
};

const displaySumResult = (num1, num2) => {
  result.innerText = calculateSum(num1, num2)
};

buttonSum.addEventListener('click', () => {
  displaySumResult(inputOne.value, inputTwo.value);
  inputOne.value = ''
  inputTwo.value = ''
});

// Task 4 Generate random number:

const buttonGenerate = document.getElementById('button-generate');
const displayRandomNum = document.getElementById('random-num');

const generateRandomNumber = () => {
   return (Math.floor(Math.random() * 100) + 1); 
}

buttonGenerate.addEventListener('click', () => {
  displayRandomNum.innerText = generateRandomNumber()
})
