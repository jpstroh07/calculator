var displayNum = 0.0;
var firstNum = 0.0;
var secondNum = 0.0;
var isSecond = false;

function handleNumber(num) {
    if (isSecond) {
        secondNum = numberClick(num);
    } else {
        firstNum = numberClick(num);
    }
}

function numberClick(num) {
    var old = parseInt(document.getElementById("display").innerHTML) * 10;

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

    document.getElementById("display").innerHTML = displayNum;
}

function calc() {
    var b = document.getElementById("sum");

    if (displayNum == 0) {
        b.innerHTML = b.textContent = "";
    } else {
        b.innerHTML = b.textContent = "> " + displayNum;
    }
}