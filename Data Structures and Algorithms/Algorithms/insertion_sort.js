function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let valueRigth = array[i]
    let indexLeft = i - 1
    
    while (indexLeft >= 0 && array[indexLeft] > valueRigth) { 
      array[indexLeft + 1] = array[indexLeft] 
      indexLeft--
    }
    array[indexLeft + 1] = valueRigth    
  }
  return array
}

console.log(insertionSort([12, 9, 6, 8, 1, 2, 7, ]));
