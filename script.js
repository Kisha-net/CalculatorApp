document.addEventListener("DOMContentLoaded", function () {
  const expressionInput = document.getElementById("expression");
  let expression = " ";
  let answer = 0;

  const display = (symbol) => {
    expression = expression + symbol;
    expressionInput.value = expression;
  };
  // calculate
  const answerDispay = document.getElementById("answer");

  const calculate = (symbol) => {
    // console.log(symbol);
    answer = eval(expression);
    answerDispay.textContent = answer;
    //   console.log(answer);

    expression = expression + "=";

    expressionInput.value = expression;
    expression = "";

    if (answer) {
      expression = answer;
      expressionInput.value = expression;
      //   console.log("this" + expression);
    }
  };
  // sine
  const sine = (symbol) => {
    // console.log("am here" + expression);
    const result = Math.sin(expression);
    answerDispay.textContent = result;

    expression = expression + symbol;
    expressionInput.value = expression;
    expression = "";
    if (result) {
      expression = result;
      expressionInput.value = expression;
    }
    // console.log("Result" + answer);
  };

  // all clear
  const allClear = () => {
    expression = "";
    answer = 0;
    expressionInput.value = expression;
    answerDispay.textContent = answer;
  };
  const clear = () => {
    expression = expression.slice(0, -1);
    expressionInput.value = expression;
    answer = 0;
    answerDispay.textContent = answer;
  };

  const buttons = document.querySelectorAll(".padButton");

  buttons.forEach((button) =>
    button.addEventListener("click", function () {
      const symbol = this.textContent;
      if (symbol === "=") {
        calculate(symbol);
      } else if (symbol === "AC") {
        allClear();
      } else if (symbol === "C") {
        clear();
      } else if (symbol === "sin") {
        sine(symbol);
      } else {
        display(symbol);
      }
      console.log(symbol);
    })
  );
});
