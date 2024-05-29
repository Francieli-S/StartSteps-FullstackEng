// Task 2

function sumArray(arr) {
  let sum = null;

  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }

  return sum;
}

const numsArray = [1, 2, 3];

console.log('Sum array elements: ', sumArray(numsArray));

// Task 3

const stringArr = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

function reverseArray1(arr) {
  return [...arr].reverse();
}

function reverseArray2(arr) {
  let newArr = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArr.push(arr[i]);
  }
  return newArr;
}

function reverseArray3(arr) {
    let pLeft = 0
    let pRight = arr.length - 1
    let tempVariable = null

    while(pLeft < pRight) {
        tempVariable = arr[pLeft]
        arr[pLeft] = arr[pRight]
        arr[pRight] = tempVariable

        pLeft++
        pRight--
    }

    return arr
}

console.log('original array', stringArr);
console.log('with reverse(): ', reverseArray1(stringArr));
console.log('with new arr and push from original: ', reverseArray2(stringArr));
console.log('with two pointers: ', reverseArray3(stringArr));
