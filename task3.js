function mostFrequent(arr) {
  if (arr.length === 0) {
    return null;
  }

  const numCount = {};

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    numCount[element] = (numCount[element] || 0) + 1;
  }

  let mostFrequentElement;
  let highestFrequency = 0;

  for (const element in numCount) {
    if (numCount[element] > highestFrequency) {
      mostFrequentElement = element;
      highestFrequency = numCount[element];
    }
  }

  return mostFrequentElement;
}


let arr = [1, 2, 1, 2, 3, 4, 5, 6, 8, 4, 6, 3, 3, 2, 4];
let output = mostFrequent(arr);
console.log(output);
