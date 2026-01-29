//for loop
//used when the number of iterations is known
for (let i = 0; i < 5; i++) {
    console.log("Iteration number: " + i);
}
//while loop
//used when the number of iterations is not known
let count = 0;
while (count < 5) {
    console.log("Count is: " + count);
    count++;
}
//do-while loop
//executes the block at least once before checking the condition
let num = 0;
do {
    console.log("Number is: " + num);
    num++;
} while (num < 5);
//for...in loop
//used to iterate over the properties of an object
let person = { name: "Alice", age: 25, city: "New York" };
for (let key in person) {
    console.log(key + ": " + person[key]);
}
//for...of loop
//used to iterate over iterable objects like arrays
let colors = ["Red", "Green", "Blue"];
for (let color of colors) {
    console.log("Color: " + color);
}
//Nested loops
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log("i: " + i + ", j: " + j);
    }
}
//Breaking out of loops
for (let i = 0; i < 10; i++) {  
    if (i === 5) {
        break; // exits the loop when i is 5
    }   
    console.log("Breaking Loop i: " + i);
}
