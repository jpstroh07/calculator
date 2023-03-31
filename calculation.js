function numberClick(num) {
    old = parseInt(document.getElementById("display").innerHTML);
    document.getElementById("display").innerHTML = old + num;
}