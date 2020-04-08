const calcScreen = document.querySelector("#calcScreen");

let oldNumber = 0;
let newNumber = 0;
let result = 0;
let operator = null;

const btn = document.querySelectorAll(".btn");
btn.forEach((button) => {
  button.addEventListener("click", (event) => {
    let clickedBtn = event.target.value;

    if (clickedBtn === "AC") {
      clear(clickedBtn);
    } else if(clickedBtn === "." && !newNumber.includes(".")) {
        newNumber += ".";
        
    }  else if (isNumber(clickedBtn)) {
      if (newNumber === 0 || newNumber === result) {
        newNumber = "";
        newNumber = clickedBtn;
      } else {
        newNumber += clickedBtn;
      }
    } else if (isOperator(clickedBtn)) {
      oldNumber = newNumber;
      operator = clickedBtn;
      newNumber = "";
    } else if (clickedBtn === "=") {
      calculate(oldNumber, operator, newNumber);
      newNumber = result;
    }

    displayResult(newNumber);
  });
});

function isNumber(button) {
  if (!isNaN(button)) {
    return button;
  }
}

function isOperator(button) {
  if (button === "+" || button === "-" || button === "x" || button === "/") {
    return button;
  }
}

function calculate(oldNumber, operator, newNumber) {
  oldNumber = Number(oldNumber);
  newNumber = Number(newNumber);

  switch (operator) {
    case "-":
      return (result = oldNumber - newNumber);
      break;

    case "+":
      return (result = oldNumber + newNumber);
      break;

    case "x":
      return (result = oldNumber * newNumber);
      break;

    case "/":
      return (result = oldNumber / newNumber);
      break;
  }
  return result;
}

function clear(button) {
  oldNumber = 0;
  newNumber = 0;
  result = 0;
  calcScreen.value = "0";
}

function displayResult(result) {
    calcScreen.value = newNumber;
}


