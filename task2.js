function positiveSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

const arr = [5, 12, -25, 20];
const output = positiveSum(arr);
console.log(output);
