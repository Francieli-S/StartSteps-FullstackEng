const numArr1 = [1, 2, 3, 20, 6, 7]
console.log(numArr1);

const numArr2 = [1, 4, 3, 350, 13, 76]
console.log(numArr2);

const sortNum = numArr1.sort((a, b) => a - b)
const invertSortNum = numArr2.sort((a, b) => b - a)

console.log(sortNum);
console.log(numArr1); // remmembering that sort changes the original array
console.log(invertSortNum); // remmembering that sort changes the original array

console.log(typeof numArr);