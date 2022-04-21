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

let stateOp = false;

let statePoint = false;

let statePlusMinus = false;

let stateEnter = false;


// getNum takes the numbers between 0 and 9 and negatives 
function getNum(number){
  if (enter){
    enter = false;
    stateOp = false;
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
  if (!stateOp){
    statePoint = false;
    stateOp = true;
    if (stateEnter){
      stateEnter = false;
      operation = resultInput.textContent + op.id;
    } else {
      operation += op.id;
    }
    return numInput.textContent = operation;
  }
}

function getResult(){
  // whe the operation starts in 0
  if (resultInput.textContent === '0' ){
    let operands = operation.match(/([+]|[-]|[x]|[/])/g);
    let operand = '';
    if (operands === null){ return resultInput.textContent = operation }
    if (operands.length === 1){
      operand = operands[0]
      let minus = operation.indexOf(operand);
      if (minus === 0){ return resultInput.textContent = operation } 
      else { operand = operands[0] } 
    }
    else if (operands.length > 1){ operand = operands[1] }
    let positionOp = operation.indexOf(operand, 1);
    let a = parseFloat(operation.substring(0, positionOp))
    let b = parseFloat(operation.substring(positionOp + 1))
    let result = operate(operand, a, b)
    let test = 0;
    stateOp = false;
    stateEnter = true;
    if (result.toString().length > 8){ return resultInput.textContent = Math.round(result * 100) / 100 }
    else { return resultInput.textContent = result; }
    // the others operations
  } else if (resultInput.textContent !== '0' ){
    let operands = operation.match(/([+]|[-]|[x]|[/])/g);
    let operand = '';
    if (operands === null){ return operation }
    if (operands.length === 1){ operand = operands[0] }
    else if (operands.length > 1){ operand = operands[1] }
    let positionOp = operation.indexOf(operand, 1);
    let a = parseFloat(operation.substring(0, positionOp))
    let b = parseFloat(operation.substring(positionOp + 1))
    let result = operate(operand, a, b)
    stateOp = false;
    stateEnter = true;
    if (result.toString().length > 8){ return resultInput.textContent = Math.round(result * 100) / 100 }
    else { return resultInput.textContent = result; }
  }

};

function deleteAll(){
  stateOp = false;
  statePoint = false;
  stateEnter = false;
  operation = ''
  numInput.textContent = operation;
  resultInput.textContent = '0';
}

function deleteLast(){
  operation = operation.slice(0, operation.length - 1)
  if (operation.search(/([+]|[-]|[x]|[/])/g) == -1){
    stateOp = false;
    statePoint = false;
  }
  numInput.textContent = operation;
  resultInput.textContent = '0';
}


function plusMinus(){
  if (!statePlusMinus){
    statePlusMinus = true;
    if (numInput.textContent == '58.20'){
      numInput.textContent = '-'
    } else {
      numInput.textContent += '-'
    }
    
  }
}

function getPoint(point){
  if (!statePoint){
    statePoint = true
    operation += point.id;
    return numInput.textContent = operation;
  }
}