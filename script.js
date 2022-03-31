function add(x, y){
    return x + y;
}

console.log(add(5, 7)); // 12

function substract(x, y){
    return x - y;
}

console.log(substract(5, 7)); // -2

function multiply(x, y){
    return x * y;
}

console.log(multiply(5, 7)); // 35

function divide(x, y){
    return x / y;
}

console.log(divide(5, 7)); // 0.7142857142857143

function power(x, y){
    return Math.pow(x, y);
}

console.log(power(5, 7)); // 78125

function factorial(x){
    let result = 1;
    let cont = x;
    if (x === 0){
        return 1;
      }
      for (let i = cont; i > 1 ; i--) {
        result *= i-1
      }
      return result * x;
}

console.log(factorial(5)); // 120

function fraction(x){
    return 1 / x;
}

console.log(fraction(5)); // 0.2

function square(x){
    return Math. sqrt(x); // 2.23606797749979
}

console.log(square(5));

function squareMax(x, y){
    return Math.pow(x, 1/y)
}

console.log(squareMax(5, 3)); // 1.709975946676697