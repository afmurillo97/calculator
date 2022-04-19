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

// attemp to the buttons
const numInput = document.querySelector('.numinput');
const resultInput = document.querySelector('.result');

// inialize all the variables
let operation = '';

let enter = false;

let state = false;

let statePlusMinus = false;

let cont = false;


// getNum takes the numbers between 0 and 9
function getNum(number){
  if (enter){
    enter = false;
    state = false;
    if(statePlusMinus){
      operation = '-'
      numInput.textContent += operation;
      resultInput.textContent = '0';
    } else {
      numInput.textContent = operation;
      resultInput.textContent = '0';
    }
  }
  operation += number.id
  return numInput.textContent = operation;
};



// getOp takes an operator from the user
function getOp(op){
  if (!state){
    state = true
    operation += op.id;
    return numInput.textContent = operation;
  }
}

function getResult(){
  let operand = operation.search(/\D/);
  if (operand > 0){
    let a = parseInt(operation.substring(0, operand))
    let b = parseInt(operation.substring(operand + 1))
    let operator = operation.substring(operand, operand + 1);
    enter = true;
    return resultInput.textContent = operate(operator, a, b);
  } else if (operand === 0){
    let test = operation.slice(1)
    operand = test.search(/\D/);
    if (operand !== -1){
      let a = -parseInt(test.substring(0, operand))
      let b = parseInt(test.substring(operand + 1))
      let operator = test.substring(operand, operand + 1);
      enter = true;
      return resultInput.textContent = operate(operator, a, b);
    } else{
      enter = true;
      return resultInput.textContent = operation;
    }
  }
  else {
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


function plusMinus(){
  if (operation === ''){
    statePlusMinus = true;
    numInput.textContent += '-'
  }
}