function add(num1, num2) {
    return num1 + num2;
}

console.log(add(2, 5));

function subtract(num1, num2) {
    return num1 - num2;
}

console.log(subtract(8, 2));

function multiply(num1, num2) {
    return num1 * num2;
}

console.log(multiply(4, 4));

function divide(num1, num2) {
    return num1 / num2;
}

console.log(divide(8, 2));
//the first four numbers above are correct in the test

function increment(n) {
    return n+= 1;
}

console.log(increment(100));

function decrement(n) {
    return n-= 1;
}

console.log(decrement(100));

//The below code is working correctly
function makeInt(string) {
    return parseInt(string, 10);
}

console.log(makeInt('367'));

function preserveDecimal(string) {
    return parseFloat(string);
}

console.log(preserveDecimal('14.8765'));

