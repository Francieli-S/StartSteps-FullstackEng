class MathOperation {
  add(a: number, b: number): number
  add(a: string, b: string): string // overloading 1 time add method with new parameters
  add(a: boolean): boolean // overloading 2 time add method with new parameters
  // implementation (compiling time):
  add(a: any, b?: any ): any { // in the running time it is just JS
    if (b) {
      return a + b
    } 
    return a
  }
}

const mathObj = new MathOperation()

// same method, different behaviour(implementation) ===> polymorphism
mathObj.add(1, 2)
mathObj.add('Hello ', 'world.')
mathObj.add(true)