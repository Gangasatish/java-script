//scope in javascript refers to the current context of code, which determines the accessibility of variables to JavaScript code.
// JavaScript has three types of scope: Global Scope, Local Scope, and Block Scope.
//Global Scope
var globalVar = "I am a global variable";

function showGlobalVar() {
    console.log(globalVar); // Accessible here
}
showGlobalVar();
console.log(globalVar); // Accessible here
//Local Scope
function localScopeExample() {
    var localVar = "I am a local variable";
    console.log(localVar); // Accessible here
}
localScopeExample();
//console.log(localVar); // Uncaught ReferenceError: localVar is not defined
//Block Scope
if (true) {
    let blockVar = "I am a block-scoped variable";
    console.log(blockVar); // Accessible here
}
//console.log(blockVar); // Uncaught ReferenceError: blockVar is not defined
//Function Scope vs Block Scope
function functionScopeExample() {
    if (true) {
        var functionScopedVar = "I am function scoped";
        let blockScopedVar = "I am block scoped";
        console.log(functionScopedVar); // Accessible here
        console.log(blockScopedVar);    // Accessible here
    }
    console.log(functionScopedVar); // Accessible here
    //console.log(blockScopedVar);    // Uncaught ReferenceError: blockScopedVar is not defined
}
functionScopeExample();
//Lexical Scope refers to the fact that in JavaScript, functions are executed using the scope chain that was in effect when they were defined, not the scope chain that is in effect when they are invoked.
function outerFunction() {
    let outerVar = "I am from outer function";

    function innerFunction() {
        console.log(outerVar); // Accessible due to lexical scope
    }
    innerFunction();
}
outerFunction();
//Closures are functions that have access to variables from another function’s scope. This is often used to create private variables or functions.
function makeCounter() {
    let count = 0; // Private variable
    return function() {
        count++;
        return count;
    };
}

let counter = makeCounter();
console.log(counter()); // Output: 1
console.log(counter()); // Output: 2
console.log(counter()); // Output: 3
console.log(counter()); // Output: 4
console.log(counter()); // Output: 5
//Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase, before the code is executed.
//Variable Hoisting
console.log(hoistedVar); // Output: undefined
var hoistedVar = "I am hoisted";
console.log(hoistedVar); // Output: I am hoisted
//Function Hoisting
hoistedFunction(); // Output: I am a hoisted function
function hoistedFunction() {
    console.log("I am a hoisted function");
}
//Difference between var, let, and const in terms of hoisting
console.log(varVariable);
var varVariable = "I am var";
//console.log(letVariable); // Uncaught ReferenceError: Cannot access 'letVariable' before initialization
let letVariable = "I am let";
//console.log(constVariable); // Uncaught ReferenceError: Cannot access 'constVariable' before initialization
const constVariable = "I am const";
//Temporal Dead Zone (TDZ) refers to the time between entering a scope and the point where a variable is declared. Variables declared with let and const are in the TDZ until their declaration is processed.
function tdzExample() {
    //console.log(tdzVar); // Uncaught ReferenceError: Cannot access 'tdzVar' before initialization
    let tdzVar = "I am in TDZ";
    console.log(tdzVar); // Output: I am in TDZ
}
tdzExample();
//Summary
//Global Scope: Variables accessible from anywhere.
//Local Scope: Variables accessible only within a function.
//Block Scope: Variables accessible only within a block (e.g., if, for).
//Function Scope vs Block Scope: var is function-scoped, let and const are block-scoped.
//Lexical Scope: Functions access variables from their defining scope.
//Closures: Functions that retain access to their defining scope.
//Hoisting: var and function declarations are hoisted; let and const are not hoisted in the same way.