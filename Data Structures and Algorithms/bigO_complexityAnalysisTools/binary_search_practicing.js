const largeArray = Array.from({ length: 10000 }, () =>
  Math.floor(Math.random() * 1000)
);
largeArray.sort((a, b) => a - b); // it performs a quick sort

const binarySearchCount = (arr, target) => {
  let count = 0;
  let left = 0;
  let rigth = arr.length - 1;

  while (left <= rigth) {
    const mid = Math.floor((left + rigth) / 2);

    if (arr[mid] === target) {
      count++;

      //Expand search to include potencial adjacent occurrences
      let innerLeft = mid - 1;
      while (innerLeft >= left && arr[innerLeft] === target) {
        count++;
        innerLeft--;
      }
      let innerRight = mid + 1;
      while (innerRight <= rigth && arr[innerRight] === target) {
        count++;
        innerRight++;
      }
      break; // all occurrences found
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      rigth = mid - 1;
    }
  }
  return count;
};

// console.log(largeArray);

const countOf = binarySearchCount(largeArray, 4)
console.log('Number of times target appears: ', countOf);

// Binary search with objects
const inventory = [
  {item: 'shoes', quantity: 200},
  {item: 't-shirts', quantity: 500},
  {item: 'coats', quantity: 150},
  {item: 'boots', quantity: 50},
  {item: 'socks', quantity: 550},
]

inventory.sort((a, b) => {
  if (a.item < b.item) {
    return -1
  }
  if (a.item > b.item) {
    return 1
  }
  return 0
})

const binarySearchInventory = (arr, target) => {
  let low = 0
  let high = arr.length - 1

  while(low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid].item === target) {
      return `The quatity for ${arr[mid].item} is ${arr[mid].quantity}.`
    } else if (arr[mid].item < target) {
      low = mid + 1
    } else {
      high = mid - 1
    }
  }
  return 'not found'
}

console.log(binarySearchInventory(inventory, 'boots'));

// Simple search
const products = {
  'shoes': ['sneacker', 'boots'],
  't-shirts': ['shirts', 'polos'],
  'coats': ['jackets', 'parkas']
}

const recommendSimilarProduct = (product) => {
  if (products[product] !== undefined) {
    return products[product]
  }
  return 'no similar product'
}

const similarProducts = recommendSimilarProduct('shoes')
console.log(`Similar products are: ${similarProducts.join(', ')}`);

// Bubble sort
const unsortedTechBatch = ['keyboard', 'monitor', 'printer', 'mouse', 'headphones']

const bubbleSortTech = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j +1], arr[j]]
      } 
    }
  }
  return arr
}
console.log(unsortedTechBatch);
console.log(bubbleSortTech(unsortedTechBatch));
