const calculator = document.querySelector(".calculator");
const buttonsList = document.querySelector(".calBtn");
const operator = document.querySelector(".operator");
const display = document.querySelector(".calculator__display");

function calculate(num1, operator, num2) {
  let result = 0;
  if (operator === "+") {
    result = Number(num1) + Number(num2);
  } else if (operator === "-") {
    result = Number(num1) - Number(num2);
  } else if (operator === "*") {
    result = Number(num1) * Number(num2);
  } else if (operator === "/") {
    result = Number(num1) / Number(num2);
  }
  return String(result);
}

let firstNum = "";
let operatorForAdvanced = "";
let previousKey = "";
let previousNum = "";

buttonsList.addEventListener("click", function (event) {
  const target = event.target; //클릭된 HTML 엘리먼트 정보
  const action = target.classList[0]; // 클릭된 엘리먼트의 클래스를 가져옴.
  const buttonContent = target.textContent;

  if (target.matches("button")) {
    if (action === "number") {
      if (display.textContent === "0" && operatorForAdvanced === "") {
        display.textContent = buttonContent;
        firstNum = display.textContent;
      } else if (display.textContent !== "0" && operatorForAdvanced === "") {
        display.textContent = display.textContent + buttonContent;
        firstNum = display.textContent;
      } else if (display.textContent !== "0" && operatorForAdvanced !== "") {
        if (previousKey === operatorForAdvanced) {
          display.textContent = buttonContent;
          previousKey = display.textContent;
          previousNum = display.textContent;
        }
      } else if (previousKey !== operatorForAdvanced) {
        display.textContent = display.textContent + buttonContent;
        previousNum = display.textContent;
      }
    }
  }

  if (action === "operator") {
    // 연산자 클릭 텍스트 변환
    operatorForAdvanced = buttonContent;
    previousKey = operatorForAdvanced;
  }

  if (action === "clear") {
    //C 번튼 클릭 텍스트 변환
    display.textContent = "0";
    firstNum = "";
    previousNum = "";
    operatorForAdvanced = "";
    previousKey = "";
  }

  if (action === "calculate") {
    // '=' 버튼 클릭시
    if (firstNum !== "" && operatorForAdvanced === "") {
      display.textContent = firstNum;
    } else if (firstNum !== "" && previousNum === "") {
      display.textContent = calculate(
        display.textContent,
        operatorForAdvanced,
        display.textContent
      );
    } else if (previousKey === display.textContent) {
      display.textContent = calculate(
        firstNum,
        operatorForAdvanced,
        previousNum
      );
    } else if (previousKey !== display.textContent && previousNum !== "") {
      display.textContent = calculate(
        display.textContent,
        operatorForAdvanced,
        previousNum
      );
    } else if (previousKey !== display.textContent && previousNum === "") {
      display.textContent = firstNum;
    }
  }
});
