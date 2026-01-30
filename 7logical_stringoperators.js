//logicial operators in JavaScript
// && (AND) - Returns true if both operands are true
console.log(true && true);  // true
console.log(true && false); // false
console.log(false && false); // false

// || (OR) - Returns true if at least one operand is true
console.log(true || true);   // true
console.log(true || false);  // true
console.log(false || false); // false

// ! (NOT) - Returns the opposite boolean value
console.log(!true);  // false
console.log(!false); // true

// Short-circuit evaluation with logical operators
let a = 5;
let b = 10;
let c = 15;

// Using && and ||
console.log(a > b && b < c);  // false (because a > b is false)
console.log(a < b && b < c);  // true (both conditions are true)
console.log(a > b || b < c);  // true (because b < c is true)
console.log(a > b || b > c);  // false (both conditions are false)

// String concatenation with logical operators
let str1 = "Hello";
let str2 = "World";
let str3 = "";

console.log(str1 + " " + str2);        // "Hello World"
console.log(str1 + " " + str2 + "!");  // "Hello World!"
console.log(str3 + str1 + str2);       // "HelloWorld"

// Using logical operators for conditional assignment
let result = a > b ? a : b;
console.log(result);

// Combining logical and comparison operators
if (a < b && a < c) {
    console.log("a is the smallest");
} else if (b < a && b < c) {
    console.log("b is the smallest");
} else {
    console.log("c is the smallest");
}

//string operators
// Concatenation operator (+)
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"
// Concatenation with assignment (+=)
let greeting = "Hello";
greeting += ", ";
greeting += "World!";
console.log(greeting); // "Hello, World!"
// String length property
let message = "Hello, World!";
console.log(message.length); // 13
// Accessing characters in a string
console.log(message[0]); // "H" 
console.log(message.charAt(7)); // "W"
// Example usage of string operators
let strA = "JavaScript";
let strB = " is fun!";
let combinedStr = strA + strB;
console.log(combinedStr); // "JavaScript is fun!"
console.log("Length of combined string: " + combinedStr.length); // 20
console.log("First character: " + combinedStr[0]); // "J"
console.log("Character at index 5: " + combinedStr.charAt(5)); // "S"


// Template literals (using backticks) refers to a way of defining strings in JavaScript that allows for easier embedding of expressions and multi-line strings.
let name = "Alice";
let age = 30;
let info = `My name is ${name} and I am ${age} years old.`;
console.log(info); // "My name is Alice and I am 30 years old."

// Multi-line strings with template literals
let multiLineStr = `This is line 1.
This is line 2.
This is line 3.`;
console.log(multiLineStr);
// Output:
// This is line 1.
// This is line 2.
// This is line 3.
// Combining template literals with expressions
let d = 5;
let e = 10;
let sumInfo = `The sum of ${d} and ${e} is ${d + e}.`;
console.log(sumInfo); // "The sum of 5 and 10 is 15."


//operator precedence
// Precedence levels (from highest to lowest)
// 1. Parentheses ()
// 2. Exponentiation (**)
// 3. Multiplication (*), Division (/), Modulo (%)
// 4. Addition (+), Subtraction (-)
// 5. Comparison operators (>, <, >=, <=, ==, !=)
// 6. Logical AND (&&)
// 7. Logical OR (||)

// Example expressions demonstrating operator precedence
let result1 = 3 + 5 * 2; // 3 + (5 * 2) = 13
console.log(result1); // 13
let result2 = (3 + 5) * 2; // (3 + 5) * 2 = 16
console.log(result2); // 16
let result3 = 10 / 2 + 4; // (10 / 2) + 4 = 9
console.log(result3); // 9
let result4 = 2 ** 3 * 4;   // (2 ** 3) * 4 = 32
console.log(result4); // 32
let result5 = 5 + 10 > 12 && 3 * 2 === 6; // (5 + 10) > 12 && (3 * 2) === 6 = true
console.log(result5); // true