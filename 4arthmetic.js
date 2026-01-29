//arthmetic operations
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero";
    }
    return a / b;
}
// Example usage:
console.log("Addition: " + add(10, 5));         // 15
console.log("Subtraction: " + subtract(10, 5)); // 5
console.log("Multiplication: " + multiply(10, 5)); // 50
console.log("Division: " + divide(10, 5));      // 2
console.log("Division by zero: " + divide(10, 0)); // Error: Division by zero
// Modulus operation
function modulus(a, b) {
    return a % b;
}
console.log("Modulus: " + modulus(10, 3)); // 1
// Increment and Decrement
let num = 10;
console.log("Original number: " + num);
num++;
console.log("After Increment: " + num);
num--;
console.log("After Decrement: " + num);
// Exponentiation
function power(base, exponent) {
    return Math.pow(base, exponent);
}
console.log("Exponentiation: " + power(2, 3)); // 8
// Order of Operations
let result = add(5, multiply(2, 3)); // 5 + (2 * 3)
console.log("Order of Operations Result: " + result); // 11
// Combined Example
let a = 10;
let b = 5;
let combinedResult = divide(add(a, b), subtract(a, b)); // (10 + 5) / (10 - 5)
console.log("Combined Example Result: " + combinedResult); // 3
