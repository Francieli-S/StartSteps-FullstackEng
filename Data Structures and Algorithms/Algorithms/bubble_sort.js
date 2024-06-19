const originalArray = [9, 10, 5, 1, 3, 6];
const originalArrayDisplay = document.getElementById('original-array');
const sortedArrayDisplay = document.getElementById('bubble-sorted-array');
const iterationsDisplay = document.getElementById('bubble-iterations');

// BUBBLE SORT
// method 1
function bubbleSortAscending(array) {
  const arr = array.slice();
  let iterations = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      iterations++;
    }
  }
  iterationsDisplay.innerText = iterations;
  return arr;
}

// console.log('bubble sort ascending: ', bubbleSortAscending(originalArray));

function bubbleSortDescending(array) {
  const arr = array.slice();
  let iterations = 0;
  for (let i = arr.length - 1; i >= 0; i--) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      iterations++;
    }
  }
  iterationsDisplay.innerText = iterations;
  return arr;
}

// console.log('bubble sort descending: ', bubbleSortDescending(originalArray));

// one function to ascending or descending - just me playing a bit
function bubbleSort(array, ascending = true) {
  const arr = array.slice();
  let iterations = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (ascending === false) {
      } else if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      if (ascending) {
      } else if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
      iterations++;
    }
  }
  iterationsDisplay.innerText = iterations;
  return arr;
}

// console.log('double fn ascending: ', bubbleSort(originalArray));
// console.log('double fn descending: ', bubbleSort(originalArray, false));

// method 2 using swapped variable and destructuring to swap
function bubbleSort2(array) {
  const arr = array.slice();
  let iterations = 0;
  let swapped;
  do {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
      iterations++;
    }
  } while (swapped);
  iterationsDisplay.innerText = iterations;
  return arr;
}

// console.log('bubble sort method 2: ', bubbleSort2(originalArray));

// method 3 - the outer loop just give the orientation, see that the inner loop compares the elemente j and j+1
// this code makes the biggest num goes to last position and for each of the following iterations
// it decrease the array length // see that -1 in the outer loop and  - i in the inner loop
function bubbleSort3(inputArray) {
  let array = inputArray.slice();
  let iterations = 0;
  const length = array.length;
  for (let i = 0; i < length - 1; i++) {
    let swapped = false;
    for (let j = 0; j < length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
        swapped = true;
      }
      iterations++;
    }
    if (!swapped) {
      // if no swaps are made in this pass, the array is already sorted
      iterationsDisplay.innerText = iterations;
      return array;
    }
  }
}

// console.log('bubble sort method 3: ', bubbleSort3(originalArray));

function sortWithBubble() {
  // const sortedArray = bubbleSortAscending(originalArray)
  // const sortedArray = bubbleSortDescending(originalArray)
  // const sortedArray = bubbleSort(originalArray)
  // const sortedArray = bubbleSort(originalArray, false);
  // const sortedArray = bubbleSort2(originalArray)
  const sortedArray = bubbleSort3(originalArray);
  sortedArrayDisplay.textContent = sortedArray.join(', ');
}

originalArrayDisplay.textContent = originalArray.join(', ');
// sortedArrayDisplay.textContent = originalArray.join(', ');
