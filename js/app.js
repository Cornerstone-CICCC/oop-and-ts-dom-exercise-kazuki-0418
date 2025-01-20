class Calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }

  subtract() {
    return this.num1 - this.num2;
  }

  multiply() {
    return this.num1 * this.num2;
  }

  divide() {
    return this.num1 / this.num2;
  }
}

document.getElementById("calculateBtn").addEventListener("click", function () {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;

  const calculator = new Calculator(num1, num2);

  let result;
  if (operation === "add") {
    result = calculator.add();
  } else if (operation === "subtract") {
    result = calculator.subtract();
  } else if (operation === "multiply") {
    result = calculator.multiply();
  } else {
    result = calculator.divide();
  }

  document.getElementById("result").textContent = result;
});
