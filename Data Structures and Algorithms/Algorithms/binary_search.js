// BINARY SEARCH
const numbers1 = [2, 12, 22, 32, 33, 45];

function binarySearch(arr, target) {
  let left = 0;
  let rigth = arr.length - 1;

  while (left <= rigth) {
    const middleIndex = Math.floor((left + rigth) / 2);
    const middleNumber = arr[middleIndex];

    if (middleNumber === target) {
      return middleIndex;
    } 
    
    if (middleNumber < target) {
      left = middleIndex + 1;
    } else {
      rigth = middleIndex - 1;
    }
  }
  return undefined; //not found
}

// input ans output
function search() {
  const searchNumInput = +document.getElementById('search-number').value;
  const outputDisplay = document.getElementById('output');
  const index = binarySearch(numbers1, searchNumInput);

  index !== undefined
    ? (outputDisplay.textContent = `Number ${searchNumInput} found at index ${index}`)
    : (outputDisplay.textContent = `Number ${searchNumInput} not found`);
}


