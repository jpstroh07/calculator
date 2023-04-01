var displayNum = 0.0;
var firstNum = 0.0;
var secondNum = 0.0;
var operator = "";
var isSecond = false;

function handleNumber(num) {
    if (isSecond) {
        secondNum = numberClick(num);
    } else {
        firstNum = numberClick(num);
    }
}

function handleOperator(op) {
    firstNum = displayNum;
    displayNum = 0.0;
    operator = op;
    isSecond = true;

    var b = document.getElementById("sum");

    b.innerHTML = b.textContent = "> " + firstNum + " " + operator;
}

function numberClick(num) {
    var old = displayNum * 10;

    if (old.toString().length < 13) {
        displayNum = old + num;
        document.getElementById("display").innerHTML = displayNum;

        return displayNum;
    }
}

function clearDisplay() {
    displayNum = 0.0;
    firstNum = 0.0;
    secondNum = 0.0;
    isSecond = false;

    var b = document.getElementById("sum");

    b.innerHTML = b.textContent = "";

    document.getElementById("display").innerHTML = displayNum;
}

function calc() {
    var b = document.getElementById("sum");

    b.innerHTML = b.textContent = "> " + firstNum + " " + operator + " " + secondNum;

    var result;

    switch (operator) {
        case "+":
            result = firstNum + secondNum;
            break;
        case "-":
            result = firstNum - secondNum;
            break;
        case "*":
            result = firstNum * secondNum;
            break;
        case "/":
            result = firstNum / secondNum;
            break;
        default:
            break;
    }

    document.getElementById("display").innerHTML = result;
}