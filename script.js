function add(x, y){ return x + y };

function substract(x, y){ return x - y };

function multiply(x, y){ return x * y };

function divide(x, y){ return x / y };

function power(x, y){ return Math.pow(x, y) };

function fraction(x){ return 1 / x };

function square(x){ return Math.sqrt(x) };

function squareMax(x, y){ return Math.pow(x, 1/y) };

function factorial(x, result = 1, cont = x){ 
  if (x === 0){ return 1; };
  for (let i = cont; i > 1 ; i--) {
    result *= i-1
  }
  return result * x;
};


function operate(operator, a, b){
  if (operator === add){ return add(a, b) };
  if (operator === substract){ return substract(a, b) };
  if (operator === multiply){ return multiply(a, b) };
  if (operator === divide){ return divide(a, b) };
  if (operator === power){ return power(a, b) };
  if (operator === fraction){ return fraction(a) };
  if (operator === square){ return square(a) };
  if (operator === squareMax){ return squareMax(a, b) };
  if (operator === factorial){ return factorial(a) };
}

// console.log(operate(add, 3, 5));
// console.log(operate(multiply, 3, 5));
// console.log(operate(factorial, 3));
// console.log(operate(square, 4));
// console.log(operate(squareMax, 3, 5));
// console.log(operate(fraction, 3));


const buttons = document.querySelectorAll('button');
const numInput = document.querySelector('.numinput');

let operation = '';

for (let i = 0; i < buttons.length; i++){
  if (4 < i < 8 && 9 < i < 13 && 14 < i < 17 && 19 < i < 22) {
    buttons[i].addEventListener('click', () => {
      operation += buttons[i].id;
      numInput.textContent = operation;
    });
  };
};




/* 0: button#factorial
1: button#square
2: button#squareMax
3: button#fraction
4: button#power
5: button#7
6: button#8
7: button#9
8: button#delete
9: button#ac
10: button#4
11: button#5
12: button#6
13: button#+
14: button#-
15: button#1
16: button#2
17: button#3
18: button#x
19: button#/
20: button#plus-minus
21: button#0
22: button#decimal
23: button#enter
length: 24 */