// This is the recursive way, but it is a problem due to redundant calculations
function calculateFibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

// Using memoization technique by caching (storing) the results of expensive functions calls.
// In the Fibonacci, the values are stored in a data structure, preventing duplicates.

const fibMemo = []

const fibonacci = (n) => {
  if (n <= 1) {
    return n;
  }

 // check if the value already exist in the memo
 if (fibMemo[n]) {
  return fibMemo[n]
 } 

 // calculate fibonacci value and store it in the memo
 fibMemo[n] = fibonacci(n - 1) + fibonacci(n - 2)
 console.log(fibMemo[n]);
 return fibMemo[n]
};

const displayFibonacciMemoization = () => {
  const inputElem = document.getElementById('fib-input').value
  const resultElem = document.getElementById('result')
  const result = fibonacci(+inputElem)

  resultElem.innerText = `The ${inputElem}th Fibonacci number is: ${result}`
}

