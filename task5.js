function calculate(num1, operator, num2) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  if (isNaN(num1) || isNaN(num2)) {
    return "Please provide valid number";
  }

  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Invalid divide number";
      } else {
        return num1 / num2;
      }
    default:
      return "Invalid operator. Please use +, -, *, or /.";
  }
}

console.log(calculate(5, "+", 5));
