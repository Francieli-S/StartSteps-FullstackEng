// RECURSIVE
const tribonacciRecursive = (n) => {
  if (n <= 1) {
    return n;
  }
  return (
    tribonacciRecursive(n - 1) +
    tribonacciRecursive(n - 2) +
    tribonacciRecursive(n - 3)
  );
}

console.log(tribonacciRecursive(5));

// MEMOIZATION
const memo = [];
const tribonacciMemoization = (n) => {
  if (n <= 1) {
    return n;
  }

  if (memo[n]) {
    return memo[n];
  }

  memo[n] = tribonacciMemoization(n - 1) + tribonacciMemoization(n - 2) + tribonacciMemoization(n - 3);
  return memo[n];
};

console.log(tribonacciMemoization(5));

// TABULATION
const tribonacciTabulation = (n) => {
  const fib = [0, 1, 2];

  for (let i = 3; i <= n; i++) {
    fib[i] = fib[i - 2] + fib[i - 3];
  }
  return fib[n];
};

console.log(tribonacciTabulation(5));

//////////////
// measureExecutionTime:

const measureExecutionTime = (algorithm, input) => {
  const start = performance.now()
  algorithm(input)
  const end = performance.now()
  return end - start
}

const tribonacciRecursiveTime = measureExecutionTime(tribonacciRecursive, 35)
const tribonacciMemoizationTime = measureExecutionTime(tribonacciMemoization, 35)
const tribonacciTabulationTime = measureExecutionTime(tribonacciTabulation, 35)

console.log('tribonacciRecursiveTime in ms: ', tribonacciRecursiveTime);
console.log('tribonacciMemoizationTime in ms:', tribonacciMemoizationTime);
console.log('tribonacciTabulationTime in ms:', tribonacciTabulationTime);