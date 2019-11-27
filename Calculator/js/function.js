//bntsum (+)
function sum(a, b) {
  console.log(`a + b = ${a + b}`);
  document.getElementById("total").value = a + b;
}
var btnSum = document.getElementById("btnsum");
console.log(btnsum);
btnSum.onclick = function() {
  var num1 = document.getElementById("number1");
  var num2 = document.getElementById("number2");
  sum(parseInt(num1.value), parseInt(num2.value));
};

//btnsubtract (-)
function subtract(a, b) {
    document.getElementById("total").value = a - b;
}
var btnSubtract = document.getElementById("btnsubtract");
btnSubtract.onclick = function() {
  var num1 = document.getElementById("number1");
  var num2 = document.getElementById("number2");
  subtract(parseInt(num1.value), parseInt(num2.value));
};
//btndivide (/)
function divide(a, b) {
  document.getElementById("total").value = a / b;
}
var btnDivide = document.getElementById("btndivide");
btnDivide.onclick = function() {
  var num1 = document.getElementById("number1");
  var num2 = document.getElementById("number2");
  divide(parseInt(num1.value), parseInt(num2.value));
};

//btnmultily (x)
function multily(a, b) {
  document.getElementById("total").value = a * b;
}
var btnMultily = document.getElementById("btnmultily");
btnMultily.onclick = function() {
  var num1 = document.getElementById("number1");
  var num2 = document.getElementById("number2");
  multily(parseInt(num1.value), parseInt(num2.value));
};
