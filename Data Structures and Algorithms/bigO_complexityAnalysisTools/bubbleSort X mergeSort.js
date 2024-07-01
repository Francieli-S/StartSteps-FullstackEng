// BUBBLE SORT
function bubbleSort(array) {
  const arr = array.slice();
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

// MERGE SORT
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2)
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

const largeArray = Array.from({ length: 10000 }, () => Math.floor(Math.random() * 1000))

bubbleSort(largeArray);
mergeSort(largeArray);