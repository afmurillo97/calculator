//  All the operations are here
function add(x, y){ return (x + y) };

function substract(x, y){ return (x - y) };

function multiply(x, y){ return (x * y) };

function divide(x, y){ return (x / y)  };

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

let statePoint = false;

let statePlusMinus = false;

let cont = false;


// getNum takes the numbers between 0 and 9 and negatives 
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
  } else {
    if  (statePlusMinus){
      statePlusMinus = false;
      operation += '-'
      operation += number.id
      numInput.textContent = operation;
    } else {
      operation += number.id
      numInput.textContent = operation
    };
  };
};



// getOp takes an operator from the user
function getOp(op){
  if (!state){
    statePoint = false;
    state = true;
    operation += op.id;
    return numInput.textContent = operation;
  }
}

function getResult(){
  let operands = operation.match(/([+]|[-]|[x]|[/])/g);
  let position = 0;
  let a = 0;
  let b = 0;
  let operand = '';
  let test = typeof operands;
  if (operands === null){ return resultInput.textContent = '0'}
  // positive calculations
  if (operands.length === 1){
    position = operation.search(/([+]|[-]|[x]|[/])/g)
    operand = operands[0];
    a = parseFloat(operation.substring(0, position))
    b = parseFloat(operation.substring(position + 1))
    return resultInput.textContent = operate(operand, a, b);

    // negative calculations
  } else if (operands.length === 2){
    let operationPlus = operation.substring(1);
    position = operationPlus.search(/([+]|[-]|[x]|[/])/g)
    operand = operands[1];
    a = parseFloat(operationPlus.substring(0, position))
    b = parseFloat(operationPlus.substring(position + 1))
    return resultInput.textContent = operate(operand, -a, b);
  }
};

function deleteAll(){
  state = false;
  statePoint = false;
  operation = ''
  numInput.textContent = operation;
  resultInput.textContent = '0';
}

function deleteLast(){
  operation = operation.slice(0, operation.length - 1)
  if (operation.search(/([+]|[-]|[x]|[/])/g) == -1){
    state = false;
    statePoint = false;
  }
  numInput.textContent = operation;
  resultInput.textContent = '0';
}


function plusMinus(){
  if (operation === ''){
    statePlusMinus = true;
    numInput.textContent = '-'
  }
}

function getPoint(point){
  if (!statePoint){
    statePoint = true
    operation += point.id;
    return numInput.textContent = operation;
  }
}