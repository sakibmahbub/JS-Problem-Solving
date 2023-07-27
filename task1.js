function stringReverse(string) {
  let reverse = "";
  for (let i = string.length - 1; i > 0; i--) {
    reverse += string[i];
  }
  return reverse;
}

const string = "nigga";
const output = stringReverse(string);
console.log(output);
