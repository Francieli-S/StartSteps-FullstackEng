// BUBBLE SORT
function bubbleSortAscending(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log('bubble sort ascending: ', bubbleSortAscending([10, 7, 6, 3, 1, 2]));

function bubbleSortDescending(arr) {
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log('bubble sort descending: ', bubbleSortDescending([11, 10, 9, 23, 21]));


function bubbleSort(arr, ascending = true) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (ascending) {
        arr[i] < arr[j];
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      } else {
        arr[i] > arr[j];
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log('double fn ascending: ', bubbleSort([3, 2, 1]));
console.log('double fn descending: ', bubbleSort([1, 2, 3], false));

function bubbleSort2(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log('bubble sort with swapped variable: ', bubbleSort2([10, 7, 6, 3, 9]));

