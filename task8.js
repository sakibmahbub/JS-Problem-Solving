function secondSmallest(arr) {
  if (arr.length < 2) {
    throw new Error("The array must have two elements");
  }

  arr.sort((a, b) => a - b);
  return arr[1];
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(secondSmallest(numbers));
