var displayNum = "";
var firstNum = 0.0;
var secondNum = 0.0;
var operator = "";
var isSecond = false;
var calcDone = false;

function handleNumber(num) {
    if (calcDone) {
        clearDisplay();
    }

    calcDone = false;

    if (isSecond) {
        secondNum = numberClick(num);
    } else {
        firstNum = numberClick(num);
    }
}

function handleOperator(op) {
    firstNum = parseFloat(displayNum);
    displayNum = 0.0;
    operator = op;
    isSecond = true;

    var b = document.getElementById("sum");

    b.innerHTML = b.textContent = "> " + firstNum + " " + operator;
    document.getElementById("display").innerHTML = displayNum;
}

function numberClick(num) {
    const old = parseFloat(displayNum.toString() + num.toString());

    if (old.toString().length <= 13) {
        displayNum = old;
        document.getElementById("display").innerHTML = displayNum;

        return parseFloat(displayNum);
    }
}

function addDecimalPoint() {
    if (!displayNum.toString().includes(".") && displayNum.toString().length < 13) {
        displayNum += ".";
        document.getElementById("display").innerHTML = displayNum;
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

    if (secondNum == 0 && operator == "/") {
        b.innerHTML = b.textContent = "Error: Cannot divide by 0"
    } else {
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
                b.innerHTML = b.textContent = "Error: No operator entered";
                result = 0;
                break;
        }
        calcDone = true;

        if (result.toString().length > 13) {
            result = result.toExponential(5);
        }

        document.getElementById("display").innerHTML = result;
    }
}