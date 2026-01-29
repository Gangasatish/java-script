// Same symbols, different data types, different result.
console.log(10 + 10);      // 20
console.log("10" + "10"); // "1010"


//Number
// Used for:Integers, Decimals, Negative numbers
// In JavaScript:
//No separate int, float
// Everything is just Number
let age = 20;
let price = 99.5;
let temperature = -5;
console.log(age);
console.log(price);
console.log(temperature);


//String
// Used for:Names, Sentences, Any text
// Written using:Double quotes " ", Single quotes ' '
let name = "Satish";
let city = 'Kadapa';
console.log(name);
console.log(city);


//Boolean
// Used for:Conditions, Decisions, Logic
// Has only two values:true or false
let isLoggedIn = true;
let isAdmin = false;
console.log(isLoggedIn);
console.log(isAdmin);


//Undefined
// Used for:Variables with no value assigned
let score;
console.log(score); // Output: undefined


//Null
//Variable is intentionally empty
let y = null;
console.log(y);
//Difference between undefined and null
let a;          // a is undefined
let b = null;  // b is null
console.log(a); // Output: undefined
console.log(b); // Output: null
//Difference between null and empty string
let str1 = null;    // str1 is null 
let str2 = "";      // str2 is an empty string
console.log(str1); // Output: null
console.log(str2); // Output: "" (empty string)

//typeof Operator
console.log(typeof 10);        // number
console.log(typeof "hello");   // string
console.log(typeof true);      // boolean
console.log(typeof undefined); // undefined
console.log(typeof null);      // object (JS bug 😅)
