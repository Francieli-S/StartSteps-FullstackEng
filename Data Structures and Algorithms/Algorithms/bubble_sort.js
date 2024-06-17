// BUBBLE SORT
const numbers2 = [5, 4, 3, 2, 1];
const numbers3 = [10, 9, 8, 7, 6];

function bubbleSort(arr) {
  let iterations = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      iterations++;
      console.log(`iteration ${i + 1}: `, arr);
    }
  }
  console.log('iterations nested for loops: ', iterations);
  return arr;
}

// console.log(bubbleSort(numbers2));

function bubbleSort2(arr) {
  let iterations = 0;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
        iterations++;
        console.log(`iteration ${i + 1}: `, arr);
      }
    }
  } while (swapped);
  console.log('iterations with swapped variable: ', iterations);
  return arr;
}

// console.log(bubbleSort2(numbers3));