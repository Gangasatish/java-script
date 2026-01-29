// A condition checks something and decides:
// ✅ true → do this
// ❌ false → do something else
// JavaScript uses booleans (true/false) here.
let age = 20;
if (age >= 18) {
  console.log("You are eligible to vote");
}
// if-else statement
let marks = 30;
if (marks >= 35) {
  console.log("Pass");
} else {
  console.log("Fail");
}

//else-if ladder
let score = 85;
if (score >= 90) {
  console.log("Grade A");
} else if (score >= 75) {
  console.log("Grade B");
} else if (score >= 35) {
  console.log("Grade C");
} else {
  console.log("Fail");
}
//Nested if-else
let num = 7;
if (num % 2 === 0) {
  console.log("Even Number");
} else {
  if (num % 3 === 0) {
    console.log("Odd Number divisible by 3");
  } else {
    console.log("Odd Number not divisible by 3");
  }
}
//Ternary Operator
let isMember = true;
let discount = isMember ? 0.1 : 0.05; // 10% for members, 5% for non-members
console.log("Discount: " + (discount * 100) + "%");

//Example usage of if-else
    let username = "admin";
let password = "1234";

if (username === "admin" && password === "1234") {
  console.log("Login successful");
} else {
  console.log("Invalid credentials");
}
