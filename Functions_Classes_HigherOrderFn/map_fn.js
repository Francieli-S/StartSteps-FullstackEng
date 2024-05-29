const numArr = [1, 2, 3]

const doubleArr = numArr.map(num => num * 2)

console.log(numArr);
console.log(doubleArr);
console.log(numArr); // remmen´mbering that map returns a new array, so it does not mutate the original
