const originalArray = [9, 10, 5, 1, 3, 6]
const originalArrayDisplay = document.getElementById('original-array') 
const sortedArrayDisplay = document.getElementById('sorted-array')
const iterationsDisplay = document.getElementById('iterations')

// BUBBLE SORT
// method 1
function bubbleSortAscending(array) {
  const arr = array
  let iterations = 0
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      iterations++
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

// method 2 using swapped variable
function bubbleSort2(arr) {
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  } while (swapped);
  return arr;
}

console.log('bubble sort method 2: ', bubbleSort2([10, 7, 6, 3, 9]));

// method 3 - what is the difference??
function bubbleSort3(inputArray) {
  let array = inputArray.slice();
  let iterations = 0

  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
      let swapped = false;
      for (let j = 0; j < length - i - 1; j++) {
          if (array[j] > array[j+1]) {
              //swap elements
              const temp = array[j];
              array[j] = array[j+1];
              array[j+1] = temp;
              swapped = true;
          }
          iterations++
      }
      if (!swapped) {
          // if no swaps are made in this pass, the array is already sorted
          iterationsDisplay.innerText = iterations
          return array;
      }
  }
}

console.log('bubble sort method 3: ', bubbleSort3([10, 7, 6, 3, 9]));


function sort() {
  // const sortedArray = bubbleSortAscending(originalArray.slice())
  // const sortedArray = bubbleSort2(originalArray.slice())
  const sortedArray = bubbleSort3(originalArray.slice())
  sortedArrayDisplay.textContent = sortedArray.join(', ')
}

originalArrayDisplay.textContent = originalArray.join(', ')
sortedArrayDisplay.textContent = originalArray.join(', ')