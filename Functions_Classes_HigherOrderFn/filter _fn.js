const numArr = [1, 2, 3, 20, 6, 7]

const filterEvenNum = numArr.filter(num => num % 2 === 0)

console.log(numArr);
console.log(filterEvenNum);
console.log(numArr); // remmembering that filter returns a new array, so it does not mutate the original

console.log(typeof numArr);