let n = 4

function fibonacci(n) {
  console.log(`Value of n: ${n}`);
  if (n <= 1) {
      return n; // n is equals to 1 here
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}


function recursion() {
  return fibonacci(n)
}