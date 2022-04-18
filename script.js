//  All the operations are here
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

// the operate function takes an operator and one or two numbers
function operate(operator, a, b){
  if (operator === '+'){ return add(a, b) };
  if (operator === '-'){ return substract(a, b) };
  if (operator === 'x'){ return multiply(a, b) };
  if (operator === '/'){ return divide(a, b) };
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



const numInput = document.querySelector('.numinput');
const resultInput = document.querySelector('.result');

let operation = '';

// getNum takes the numbers between 0 and 9
function getNum(number){
  if (enter){
    enter = false;
    state = false;
    operation = ''
    resultInput.textContent = '0';
    numInput.textContent = operation;
  }
  operation += number.id
  return numInput.textContent = operation;
};

let state = false;

// getOp takes an operator from the user
function getOp(op){
  if (state === false){
    state = true
    operation += op.id;
    return numInput.textContent = operation;
  }
}

let enter = false;
function getResult(){
  let operand = operation.search(/\D/);
  if (operand !== -1 ){
    let a = parseInt(operation.substring(0, operand))
    let b = parseInt(operation.substring(operand + 1))
    let operator = operation.substring(operand, operand + 1);
    enter = true;
    return resultInput.textContent = operate(operator, a, b);
  } else {
    enter = true;
    return resultInput.textContent = operation;
  }
}

function deleteAll(){
  state = false;
  operation = ''
  numInput.textContent = operation;
  resultInput.textContent = '0';
}

function deleteLast(){
  operation = operation.slice(0, operation.length - 1)
  if (operation.search(/\D/) == -1){
    state = false;
  }
  numInput.textContent = operation;
  resultInput.textContent = '0';
}
