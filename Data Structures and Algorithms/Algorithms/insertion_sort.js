const originalArray3 = [12, 10, 5, 1, 3, 6];
const originalArray3Display = document.getElementById('original-array-3');
const sortedArray3Display = document.getElementById('insertion-sorted-array');
const iterationsDisplay3 = document.getElementById('insertion-iterations');

function insertionSort(arr) {
  const array = arr.slice();
  let iterations = 0;

  for (let i = 1; i < array.length; i++) {
    console.log(
      `   OUTER LOOP ITERATION ${i}: Initial valueRight element: ${array[i]} at index ${i}`
    ); // first element that's chosen as key element
    console.log(`Current array: ${array.join(', ')}`);

    let valueRigth = array[i];
    let indexLeft = i - 1;
    console.log(
      `Inner indexLeft: ${indexLeft} index array[${indexLeft}]: ${array[indexLeft]}`
    );

    while (indexLeft >= 0 && array[indexLeft] > valueRigth) {
      console.log(`array[indexLeft]: ${array[indexLeft]} > valueRight: ${valueRigth}`);
      console.log(
        `Switching element indexLeft: ${indexLeft + 1} index array[${indexLeft + 1}]: ${array[indexLeft + 1]}`
      );
      console.log(`With element indexLeft: ${indexLeft} index array[${indexLeft}]: ${array[indexLeft]}`);

      array[indexLeft + 1] = array[indexLeft];
      console.log(`Array after switching: ${array.join(", ")}`);

      indexLeft--;
    }

    iterations++;

    console.log(`Switching the valueRight element: array[${indexLeft+1}]: ${array[indexLeft+1]} with ${valueRigth}`);
    array[indexLeft + 1] = valueRigth;

    console.log(`Array after the iteration: ${array.join(", ")}`); // optional, comment out if too verbose
  }
  iterationsDisplay3.innerText = iterations;
  return array;
}

// console.log(insertionSort([12, 9, 6, 8, 1, 2, 7]));

function sortWithInsertion() {
  const sortedArray = insertionSort(originalArray3);
  sortedArray3Display.textContent = sortedArray.join(', ');
}

originalArray3Display.textContent = originalArray3.join(', ');
