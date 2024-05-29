const numsArray = [1, 2, 3, 677, 9, 4];
const numsArray2 = [1, 2, 3, 1060, 9, 4];

function findMax1(arr) {
  return Math.max(...arr);
}

function findMax2(arr) {
    let i = 0
    let max = null

    while(i < arr.length) {
        if (arr[i] > max) {
            max = arr[i]
        }
        i++
    }
    return max
}

console.log('Max using Math.max: ', findMax1(numsArray));
console.log('Max using while loop: ', findMax2(numsArray2));
