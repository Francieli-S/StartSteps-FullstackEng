// This is the recursive way, but it is a problem due to redundant calculations
function fibonacciRecursive(n) {
  // console.log(n);
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

console.log(fibonacciRecursive(5));

// Using memoization technique by caching (storing) the results of expensive functions calls.
// In the Fibonacci, the values are stored in a data structure, preventing duplicates.
const fibMemo = []
const fibonacciMemoization = (n) => {
  console.log(n);
  if (n <= 1) {
    return n;
  }

 // check if the value already exist in the memo
 if (fibMemo[n]) {
  return fibMemo[n]
 } 

 // calculate fibonacci value and store it in the memo
 fibMemo[n] = fibonacciMemoization(n - 1) + fibonacciMemoization(n - 2)
 console.log(fibMemo[n]);
 return fibMemo[n]
};

// Tabulation
// good with smaller overlapping
const fibonacciTabulation = (n) => {
  const fib = [0, 1]

  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2] // only two overlapping
  }
console.log(n);
  return fib[n]
}

const displayFibonacci = () => {
  const inputElem = document.getElementById('fib-input').value
  const resultElem = document.getElementById('result')
  const result = fibonacciMemoization(+inputElem)

  console.log(`Recursive: `, fibonacciRecursive(+inputElem));
  console.log(`Memoization: `, fibonacciMemoization(+inputElem));
  console.log(`Tabulation: `, fibonacciTabulation(+inputElem));

  resultElem.innerText = `The ${inputElem}th Fibonacci number is: ${result}`
}

// Task - factorial

const factorial = (nn) => {
  if (nn === 0 || nn === 1) {
    return 1
  }
  return nn * factorial(nn - 1)
}

// tabulation
const factorialTabulation = (n) => {
  const tab = []
  tab[0] = 1

  for (let i = 1; i <= n; i++) {
    tab[i] = i * tab[i - 1]
  }
console.log(n);
  return tab[n]
}

console.log(factorial(5));
console.log(factorialMemoization(5));
console.log(factorialTabulation(5));
