const originalArray3 = [9, 10, 5, 1, 3, 6];
const originalArray3Display = document.getElementById('original-array-3');
const sortedArray3Display = document.getElementById('insertion-sorted-array');
const iterationsDisplay3 = document.getElementById('insertion-iterations');

function insertionSort(arr) {
  const array = arr.slice()
  let iterations = 0;
  for (let i = 1; i < array.length; i++) {
    let valueRigth = array[i]
    let indexLeft = i - 1
    
    while (indexLeft >= 0 && array[indexLeft] > valueRigth) { 
      array[indexLeft + 1] = array[indexLeft] 
      indexLeft--
    }
    iterations++;
    array[indexLeft + 1] = valueRigth    
  }
  iterationsDisplay3.innerText = iterations;
  return array
}

// console.log(insertionSort([12, 9, 6, 8, 1, 2, 7]));

function sortWithInsertion() {
  const sortedArray = insertionSort(originalArray3);
  sortedArray3Display.textContent = sortedArray.join(", ");
}

originalArray3Display.textContent = originalArray2.join(', ');