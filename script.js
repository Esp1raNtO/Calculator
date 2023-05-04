const userInput = document.getElementById("userInput");
const userInput2 = document.getElementById("userInput2");

var expression = "";
var first = 0;
var second = 0;
let news = "";
let res = 0;
let digit = 0;

function press(num) {
  expression += num;
  userInput2.value = Number(expression);
}

function plus() {
  expression += "+";
  first = Number(userInput2.value);

  userInput.value = first + " + ";
  console.log(first, typeof first);
  userInput2.value = 0;
  expression = "";
}

function minus() {
  expression += "-";
  first = Number(userInput2.value);
  userInput.value = first + " - ";
  console.log(first, typeof first);
  userInput2.value = 0;
  expression = "";
}
function multi() {
  expression += "*";
  first = Number(userInput2.value);
  userInput.value = first + " * ";
  console.log(first, typeof first);
  userInput2.value = 0;
  expression = "";
}
function def() {
  expression += "/";
  first = Number(userInput2.value);
  userInput.value = first + " / ";
  console.log(first, typeof first);
  userInput2.value = 0;
  expression = "";
}

function pow() {
  userInput2.value = Number(userInput2.value) ** 2;
  expression += " ^ 2";
  userInput.value = expression;
}

function sqrt() {
  userInput2.value = Math.sqrt(Number(userInput2.value));
  expression += " √ ";
  userInput.value = expression;
}
function sign() {
  userInput2.value = -Number(userInput2.value);
}

function dot() {
  let a = userInput2.value;
  console.log(a.toString());
  if (!a.includes(".")) {
    expression += ".";
  }
}

function clears() {
  expression = "";
  userInput2.value = "";
  userInput.value = "";
}

function equal() {
  second = Number(userInput2.value);
  console.log(second, typeof second);
  userInput.value += userInput2.value + "=";
  news = userInput.value;
  console.log(news);

  if (news.includes("+")) {
    res = first + second;
  } else if (news.includes("/")) {
    res = first / second;
  } else if (news.includes("*")) {
    res = first * second;
  } else if (news.includes("-")) {
    res = first - second;
  }

  userInput2.value = res;
  first = res;
  console.log(res);

  expression = "";
}
