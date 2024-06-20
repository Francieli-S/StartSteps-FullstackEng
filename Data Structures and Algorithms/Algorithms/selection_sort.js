const originalArray2 = [9, 10, 5, 1, 3, 6];
const originalArray2Display = document.getElementById('original-array-2');
const sortedArray2Display = document.getElementById('selection-sorted-array');
const iterationsDisplay2 = document.getElementById('selection-iterations');

function selectionSort(arr) {
  const array = arr.slice()
  let iterations = 0;
    for (let i = 0; i < array.length - 1; i++) {
        let minIndex = i;
        console.log(`OUTER LOOP: Initial minimum element: ${array[minIndex]} at index ${minIndex}` ); // first element that's chosen as min element
        console.log(`Current array: ${array.join(", ")}`);
        for (let j = i + 1; j < array.length; j++) {
            console.log(`array[${j}]: ${array[j]}, array[${minIndex}]: ${array[minIndex]}`);
            if (array[j] < array[minIndex]) {
                console.log(`New minimum index chosen: ${j}, value: ${array[j]}`); // when new min index is picked
                minIndex = j;
            }
            iterations++;
        }
        [array[i], array[minIndex]] = [array[minIndex], array[i]];
    }
    iterationsDisplay2.innerText = iterations;
    return array;
}

function sortWithSelection() {
    const sortedArray = selectionSort(originalArray2);
    sortedArray2Display.textContent = sortedArray.join(", ");
}

originalArray2Display.textContent = originalArray2.join(', ');
// sortedArray2Display.textContent = originalArray2.join(', ');
