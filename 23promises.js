// JavaScript Program
// │
// ├─ async function myFunc() { ... }          ← developer writes async
// │
// └─ myFunc() OR new Promise(...)             ← developer starts async work
//       │
//       ▼
// 🧠 JavaScript Engine (ECMAScript)
// │
// ├─ async function detected
// │     │
// │     └─ JS Engine wraps function automatically:
// │           return Promise.resolve(result)
// │
// ├─ Creates Promise Object
// │     ├─ state = "pending"
// │     ├─ value = undefined
// │     ├─ handlers = []
// │     ├─ internal resolve()
// │     └─ internal reject()
// │
// ├─ Immediately executes Executor / async body
// │
// ├─ JS encounters `await promise`
// │     │
// │     ├─ Pauses current async function
// │     ├─ Saves remaining code as continuation
// │     └─ Internally attaches hidden `.then()` to promise
// │           (await === hidden then)
// │
// ├─ If async work exists (setTimeout / fetch trigger)
// │     │
// │     └─ JS hands control to Browser Web APIs
// │
// ├─ .then(callback) OR await continuation registered
// │     │
// │     └─ JS Engine STORES callbacks inside Promise.handlers[]
// │           (nothing executes yet)
// │
// ├─ Promise remains pending
// │
// └─ waits for resolve()/reject()
//       │
//       ▼
// (resolve() OR reject() is invoked)
// │
// ├─ Promise state changes
// │     pending → fulfilled / rejected
// │
// ├─ Promise value assigned
// │
// ├─ JS Engine collects:
// │     ├─ explicit .then() handlers
// │     └─ hidden await continuation
// │
// └─ JS Engine calls HOST (Browser Runtime):
//       "Please enqueue these Promise jobs as microtasks"
//       │
//       ▼
// 🌍 Browser Runtime (Host Environment)
// │
// ├─ Receives Promise callbacks + await continuations
// │
// ├─ Places them into:
// │     └─ Microtask Queue   ← Promises + await ONLY
// │
// └─ Event Loop monitors:
//       │
//       ▼
// Event Loop Algorithm
// │
// ├─ Wait until Call Stack becomes empty
// │
// ├─ Check Microtask Queue FIRST
// │
// ├─ Move Promise / await job to Call Stack
// │
// └─ Execute callback / resume async function
//       │
//       ▼
// 🧠 JavaScript Engine resumes execution
// │
// ├─ .then() callbacks execute
// │
// ├─ await resumes async function
// │     │
// │     └─ assigns resolved value to awaited variable
// │
// └─ Remaining async function code continues
//       │
//       ▼
// Promise Chain Continues (optional)
// │
// └─ If another .then() / await exists:
//       SAME FULL FLOW REPEATS
//       │
//       ▼
// Final Output Produced

// 1. INTRODUCTION TO PROMISES
// Promises are a modern way to handle asynchronous operations in JavaScript
// They help avoid "callback hell" and make code more readable and maintainable

// 2. PROMISE STATES
// A Promise can be in one of three states:
// 1. pending: initial state, neither fulfilled nor rejected
// 2. fulfilled: operation completed successfully, value is available
// 3. rejected: operation failed, reason for failure is available

// 3. PROMISE CONSTRUCTION
// A Promise is created using the Promise constructor, which takes an executor function
// The executor function receives two arguments: resolve and reject
// resolve(value) is called when the async operation succeeds
// reject(reason) is called when the async operation fails

// Example of creating a Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulate an asynchronous operation using setTimeout
    setTimeout(() => {
        const success = true; // Change to false to simulate failure
        if (success) {
            resolve("Operation succeeded!"); // Fulfill the promise
        } else {
            reject("Operation failed!"); // Reject the promise
        }
    }, 1000);
}); // Missing closing parenthesis for Promise constructor

// 4. CONSUMING PROMISES
// Promises are consumed using .then() for fulfilled values and .catch() for errors
myPromise
    .then(result => {
        console.log("Promise resolved with value:", result);
    })
    .catch(error => {
        console.log("Promise rejected with error:", error);
    });
    // Note: .then() can also take a second argument for rejection, but .catch() is more common for error handling
    //output: Promise resolved with value: Operation succeeded!



// 5. PROMISE CHAINING
// Promises can be chained to perform sequential asynchronous operations
myPromise
    .then(result => {
        console.log("First then:", result);
        return "Next step"; // Return a new value for the next .then()
    })
    .then(nextResult => {
        console.log("Second then:", nextResult);
        // You can also return another Promise here for further chaining
    })
    .catch(error => {
        console.log("Error in promise chain:", error);
    });
// Output will be:
// First then: Operation succeeded!
// Second then: Next step



// 6. PROMISE ALL
// Promise.all() is a method that takes an array of Promises and returns a new Promise
// that resolves when all input Promises are fulfilled, or rejects if any input Promise is rejected
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "foo");
});

Promise.all([promise1, promise2, promise3])
    .then(values => {
        console.log("Promise.all resolved with values:", values);
    })
    .catch(error => {
        console.log("Promise.all rejected with error:", error);
    });

    // Output after 1 second:
    // Promise.all resolved with values: [3, 42, "foo"]
    // If any promise rejects, the output would be:
    // Promise.all rejected with error: <error message>
    // Note: Promise.all() is useful for running multiple async operations in parallel and waiting for all of them to complete
    //here the promise2 is not a Promise, but it will be treated as a resolved Promise with the value 42 by Promise.all()
    //Promise.all([...])
    // │
    // ├─ converts non-promises to promises
    // │
    // ├─ waits for ALL to fulfill
    // │
    // ├─ collects each resolved value into array
    // │
    // └─ resolves with array → .then(values)

// Add delay to allow all async operations to complete before process exits
// setTimeout(() => {
//     console.log("\n✓ All algorithms completed!");
// }, 2000);
// Note: In a real application, you wouldn't need this delay; it's just to ensure the example runs completely here

// await and async functions will be covered in the next section, but they are built on top of Promises and follow the same underlying mechanics with the Event Loop and Microtask Queue.


