let n = 4;

function fibonacci(n) {
  console.log(`Value of n: ${n}`);
  if (n <= 1) {
    return n; // n is equals to 1 here
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

function recursion() {
  return fibonacci(n);
}

// Task 2 Recursion - countdown function
function countDown(num) {
  console.log(`Value of num: ${num}`);
  if (num <= 0) {
    return 'ending';
  }
  return countDown(num - 1);
}

console.log(countDown(7));
