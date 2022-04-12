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

let result = '';
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', () => {
    result += buttons[i].id
    numInput.textContent = result;
  });
};
