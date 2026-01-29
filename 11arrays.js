// arrays in JavaScript is a data structure that can hold multiple values in a single variable.

// Creating an array
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry']

// Accessing array elements
console.log(fruits[0]); // Output: Apple
console.log(fruits[2]); // Output: Cherry
// Modifying array elements
fruits[1] = 'Blueberry';
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry']
// array in javascript can hold different data types
let mixedArray = [42, 'Hello', true, null, { name: 'John' }];
console.log(mixedArray); // Output: [42, 'Hello', true, null, { name: 'John' }]
// Array Methods

// push() - adds one or more elements to the end of an array
fruits.push('Date');
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry', 'Date']
// pop() - removes the last element from an array
let lastFruit = fruits.pop();
console.log(lastFruit); // Output: Date
console.log(fruits); // Output: ['Apple', 'Blueberry', 'Cherry']
// shift() - removes the first element from an array
let firstFruit = fruits.shift();
console.log(firstFruit); // Output: Apple
console.log(fruits); // Output: ['Blueberry', 'Cherry']
// unshift() - adds one or more elements to the beginning of an array
fruits.unshift('Avocado');
console.log(fruits); // Output: ['Avocado', 'Blueberry', 'Cherry']
// indexOf() - returns the first index at which a given element can be found
let index = fruits.indexOf('Cherry');
console.log(index); // Output: 2
// slice() - returns a shallow copy of a portion of an array
let citrusFruits = fruits.slice(1, 3);
console.log(citrusFruits); // Output: ['Blueberry', 'Cherry']
// splice() - changes the contents of an array by removing or replacing existing elements and/or adding new elements
fruits.splice(1, 1, 'Blackberry', 'Cranberry');
console.log(fruits); // Output: ['Avocado', 'Blackberry', 'Cranberry', 'Cherry']
// forEach() - executes a provided function once for each array element
fruits.forEach((fruit, index) => {
    console.log(index + ': ' + fruit);
});
// Output:
// 0: Avocado
// 1: Blackberry
// 2: Cranberry
// 3: Cherry
//map() - creates a new array populated with the results of calling a provided function on every element in the calling array
let upperFruits = fruits.map(fruit => fruit.toUpperCase());
console.log(upperFruits); // Output: ['AVOCADO', 'BLACKBERRY', 'CRANBERRY', 'CHERRY']
// filter() - creates a new array with all elements that pass the test implemented by the provided function
let bFruits = fruits.filter(fruit => fruit.startsWith('B'));
console.log(bFruits); // Output: ['Blackberry']
// reduce() - executes a reducer function on each element of the array, resulting in a single output value
let fruitString = fruits.reduce((acc, fruit) => acc + ', ' + fruit);
console.log(fruitString); // Output: Avocado, Blackberry, Cranberry, Cherry
// find() - returns the value of the first element in the array that satisfies the provided testing function
let foundFruit = fruits.find(fruit => fruit.length > 7);
console.log(foundFruit); // Output: Blackberry
// sort() - sorts the elements of an array in place and returns the sorted array
fruits.sort();
console.log(fruits); // Output: ['Avocado', 'Blackberry', 'Cherry', 'Cranberry']
// length property - returns the number of elements in an array
console.log(fruits.length); // Output: 4
// Nested Arrays
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix); // Output: [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
// Accessing nested array elements
console.log(matrix[0][1]); // Output: 2
console.log(matrix[2][0]); // Output: 7

// Iterating through a nested array
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}
// Output:
// 1
// 2
// 3
// 4
// 5
// 6
// 7
// 8
// 9
// Converting array to string
let fruitList = fruits.toString();
console.log(fruitList); // Output: Avocado,Blackberry,Cherry,Cranberry
// Converting string to array
let fruitArray = fruitList.split(',');
console.log(fruitArray); // Output: ['Avocado', 'Blackberry', 'Cherry', 'Cranberry']
// Checking if a variable is an array
console.log(Array.isArray(fruits)); // Output: true
console.log(Array.isArray('Not an array')); // Output: false
// Merging arrays using concat()
let moreFruits = ['Elderberry', 'Fig', 'Grape'];
let allFruits = fruits.concat(moreFruits);
console.log(allFruits); // Output: ['Avocado', 'Blackberry', 'Cherry', 'Cranberry', 'Elderberry', 'Fig', 'Grape']
// Flattening an array using flat()
let nestedArray = [1, [2, [3, [4]]]];
let flatArray = nestedArray.flat(2);
console.log(flatArray); // Output: [1, 2, 3, [4]]
// Filling an array using fill()
let filledArray = new Array(5).fill(0);
console.log(filledArray); // Output: [0, 0, 0, 0, 0]
// Creating an array from a string using Array.from()
let str = 'Hello';
let charArray = Array.from(str);
console.log(charArray); // Output: ['H', 'e', 'l', 'l', 'o']
// Creating an array using Array.of()
let numArray = Array.of(1, 2, 3, 4, 5);
console.log(numArray); // Output: [1, 2, 3, 4, 5]
// Finding the index of an element using findIndex()
let longFruitIndex = fruits.findIndex(fruit => fruit.length > 7);
console.log(longFruitIndex); // Output: 1 (index of 'Blackberry')
// Reversing an array using reverse()
fruits.reverse();
console.log(fruits); // Output: ['Cranberry', 'Cherry', 'Blackberry', 'Avocado']
// Joining array elements into a string using join()
let joinedFruits = fruits.join(' - ');
console.log(joinedFruits); // Output: Cranberry - Cherry - Blackberry - Avocado
// Spreading an array using spread operator
let spreadFruits = [...fruits, 'Honeydew', 'Indian Fig'];
console.log(spreadFruits); // Output: ['Cranberry', 'Cherry', 'Blackberry', 'Avocado', 'Honeydew', 'Indian Fig']
