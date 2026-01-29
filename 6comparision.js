//comparision operators
// Used to compare two values.
//Result is always true or false.
// ⚠️ Golden Rule ⭐
// 👉 Always prefer === over ==
console.log(10 == "10");   // true 😕
console.log(10 === "10"); // false ✅
console.log(10 != "10");   // false 
console.log(10 !== "10"); // true ✅
console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 5);
console.log(5 <= 3);
//Comparing different data types
console.log(0 == false);   // true 
console.log(0 === false); // false ✅
console.log("" == false);   // true
console.log("" === false); // false ✅
console.log(null == undefined);   // true
console.log(null === undefined); // false ✅
//Comparing objects
let obj1 = { name: "Satish" };
let obj2 = { name: "Satish" };
console.log(obj1 == obj2);   // false
console.log(obj1 === obj2); // false
let obj3 = obj1;
console.log(obj1 == obj3);   // true
console.log(obj1 === obj3); // true
//Chained Comparisons
console.log(5 < 10 && 10 < 15); // true
console.log(5 < 10 < 15); // true (but be cautious)
console.log(15 > 10 > 5); // false (but be cautious)
//Comparing Strings
console.log("apple" < "banana"); // true    
console.log("apple" > "banana"); // false   
console.log("Apple" < "apple"); // true (case-sensitive)  
console.log("cat" < "catalog"); // true (prefix comparison)
//Comparing Booleans
console.log(true > false); // true
console.log(true < false); // false
console.log(true == 1); // true
console.log(false == 0); // true

