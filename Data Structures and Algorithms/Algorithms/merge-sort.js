const originalArray4 = [15, 9, 10, 5, 21, 1, 3, 6, 2];
const originalArray4Display = document.getElementById('original-array-4');
const sortedArray4Display = document.getElementById('merge_sort-sorted-array');
const iterationsDisplay4 = document.getElementById('merge_sort-iterations');

function mergeSort(array) {
  if (array.length <= 1) {
    return array; // base case: arrs wih 0 or 1 elem are already sorted
  }

  const middle = Math.floor(array.length / 2)
  console.log(middle);
  console.log(array.slice(0, middle));
  const left = mergeSort(array.slice(0, middle))
  const rigth = mergeSort(array.slice(middle))

  return merge(left, rigth)
}

function merge(left, rigth) {
  const result = []
  let letfIndex = 0
  let rigthIndex = 0

  while (letfIndex < left.length && rigthIndex < rigth.length) {
    if (left[letfIndex] <= rigth[rigthIndex]) {
      result.push(left[letfIndex])
      letfIndex++
    } else {
      result.push(rigth[rigthIndex])
      rigthIndex++
    }
  }
  return result.concat(left.slice(letfIndex)).concat(rigth.slice(rigthIndex))
}



function sortWithMergeSort() {
  const sortedArray = mergeSort(originalArray4.slice());
  sortedArray4Display.textContent = sortedArray.join(", ");
}

originalArray4Display.textContent = originalArray4.join(', ');
// sortedArray2Display.textContent = originalArray2.join(', ');
