let firstNumber = prompt("Enter the first number");
let secondNumber = prompt("Enter the Second number");
let operator = prompt(
  "Enter operator: * for multiplication,/ for division, + for addition and - for subtraction"
);
firstNumber = parseFloat(firstNumber);
secondNumber = parseFloat(secondNumber);
switch (operator) {
  case "*": {
    console.log(firstNumber * secondNumber);
    break;
  }
  case "/": {
    console.log(firstNumber / secondNumber);
    break;
  }
  case "+": {
    console.log(firstNumber + secondNumber);
    break;
  }
  case "-": {
    console.log(firstNumber - secondNumber);
    break;
  }
}
