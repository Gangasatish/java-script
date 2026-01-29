// javascript function  is a block of code designed to perform a particular task.
// A function is executed when "something" invokes it (calls it).
// Function Declaration
function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("Alice")); // Output: Hello, Alice!

// Function Expression
const add = function(a, b) {
    return a + b;
};
console.log(add(5, 3)); // Output: 8
// Arrow Function
const multiply = (x, y) => x * y;
console.log(multiply(4, 6)); // Output: 24
// Default Parameters
function power(base, exponent = 2) {
    return Math.pow(base, exponent);
}
console.log(power(3)); // Output: 9
console.log(power(2, 3)); // Output: 8
// Rest Parameters is used to represent an indefinite number of arguments as an array.
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10
// Immediately Invoked Function Expression (IIFE) is a function that runs as soon as it is defined.
(function() {
    console.log("This function runs immediately!");
})();
// Higher-Order Function is a function that takes another function as an argument or returns a function as a result.
function applyOperation(a, b, operation) {
    return operation(a, b);
}
const subtract = (x, y) => x - y;
console.log(applyOperation(10, 4, subtract)); // Output: 6
// Recursive Function is a function that calls itself in order to solve a problem.
function factorial(n) {
    if (n === 0) {
        return 1;
    }   
    return n * factorial(n - 1);
}
console.log(factorial(5)); // Output: 120
// Callback Function is a function passed into another function as an argument to be executed later.
function fetchData(callback) {
    setTimeout(() => {
        callback("Data fetched successfully!");
    }, 1000);
}
fetchData((message) => console.log(message)); // Output (after 1 second): Data fetched successfully!