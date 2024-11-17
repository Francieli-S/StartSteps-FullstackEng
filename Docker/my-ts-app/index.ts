// src/math.ts
export class MathOperations {
  // using static allows to use the method without create a new instance
  static add(a: number, b: number): number {
    return a + b;
  }

  static multiply(a: number, b: number): number {
    return a * b;
  }
}

// Example usage
const resultAdd = MathOperations.add(5, 3);
console.log(`Addition Result: ${resultAdd}`);

const resultMultiply = MathOperations.multiply(5, 3);
console.log(`Multiply Result: ${resultMultiply}`);

// import express from 'express'

// const app = express()
// app.use(express.json())

// app.listen(3000, () => {
//   console.log('Server is running at port 3000');
// })
