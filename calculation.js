var displayNum = 0.0;
var firstNum = 0.0;
var secondNum = 0.0;

function numberClick(num) {
    var old = parseInt(document.getElementById("display").innerHTML) * 10;

    if (old.toString().length != 13) {
        document.getElementById("display").innerHTML = old + num;
    }
}