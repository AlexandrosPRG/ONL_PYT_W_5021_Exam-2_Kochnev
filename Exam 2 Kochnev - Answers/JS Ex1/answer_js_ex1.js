'use strict';

function biggestSumOfTwoElements(array) {
  if (!Array.isArray(array) || array.length === 0) return false;
  if (array.length === 1) return array[0];

  let max1 = -Infinity;
  let max2 = -Infinity;

  for (const n of array) {
    if (n >= max1) { max2 = max1; max1 = n; }
    else if (n > max2) { max2 = n; }
  }
  return max1 + max2;
}

console.log(biggestSumOfTwoElements([1,2,3,4]));      // 7
console.log(biggestSumOfTwoElements([]));             // false
console.log(biggestSumOfTwoElements([76]));           // 76
console.log(biggestSumOfTwoElements([23,45,17,12]));  // 68
