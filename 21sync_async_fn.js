//java script is a single threaded why because it uses an event loop to handle asynchronous operations.
//syncronous is blocking code it means that the code is executed line by line and each line waits for the previous line to complete before executing.
//asyncronous is non-blocking code it means that the code can be executed without waiting for the previous line to complete.

//example of synchronous function
function syncFunction() {
    console.log("Start of sync function");
    for (let i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("End of sync function"); //this will block the execution until the loop is complete    
} //output will be Start of sync function 0 1 2 3 4 End of sync function

//example of asynchronous function
function asyncFunction() {
    console.log("Start of async function");
    setTimeout(() => {
        console.log("This is from async function after 2 seconds");
    }, 2000); //this will not block the execution
    console.log("End of async function"); //this will be executed immediately
} //output will be Start of async function End of async function This is from async function after 2 seconds

//calling the functions
syncFunction();
asyncFunction();
console.log("This is executed after calling both functions");
//output will be Start of sync function 0 1 2 3 4 End of sync function Start of async function End of async function This is executed after calling both functions This is from async function after 2 seconds

//this shows how synchronous and asynchronous functions work in JavaScript and how the event loop handles asynchronous operations without blocking the main thread.

// callback functions are often used in asynchronous programming to handle the result of an asynchronous operation once it completes.

// ============ EVENT LOOP MECHANISM ============
// JS Code → Call Stack → Browser APIs → Callback Queue → Event Loop → Call Stack (Execution)

// 1. CALL STACK: Stores synchronous function calls and executes them in LIFO order
console.log("\n--- CALL STACK EXAMPLE ---");
function a() {
    console.log("Function a starts"); // Added to call stack
    b(); // Call stack pushes b
    console.log("Function a ends"); // Executed after b completes
}

function b() {
    console.log("Function b starts"); // Added to call stack
    console.log("Function b ends"); // Executed, then removed from call stack
}

a(); // First function pushed to call stack

// 2. BROWSER APIs: Handle asynchronous operations (setTimeout, fetch, click events)
// Browser APIs run independently and don't block the main thread
console.log("\n--- BROWSER APIs EXAMPLE ---");
console.log("Before setTimeout"); // Call Stack - executes immediately
setTimeout(() => {
    // This callback is sent to Browser API (timer)
    // Browser API counts 1 second independently
    console.log("After 1 second timeout"); // Moves to Callback Queue after timer completes
}, 1000);
console.log("After setTimeout call"); // Call Stack - executes immediately (setTimeout only registers the timer)

// 3. CALLBACK QUEUE: Stores callbacks from Browser APIs waiting to execute
// Callbacks stay here until the Call Stack is empty
console.log("\n--- CALLBACK QUEUE EXAMPLE ---");
setTimeout(() => {
    console.log("Callback 1 in queue"); // Will wait in Callback Queue
}, 500);

setTimeout(() => {
    console.log("Callback 2 in queue"); // Will wait in Callback Queue
}, 300);

console.log("Synchronous code execution"); // Call Stack executes first, then callbacks from queue execute

// 4. EVENT LOOP: Checks if Call Stack is empty, then moves callbacks from Queue to Stack
// Event Loop continuously monitors: "Is Call Stack empty?" → "Move next callback from Queue to Stack"
console.log("\n--- EVENT LOOP WORKING ---");

function heavy() {
    console.log("Heavy task started");
    for (let i = 0; i < 1000000000; i++) {} // Blocking operation
    console.log("Heavy task completed");
}

// Synchronous code blocks the entire thread
heavy(); // Call Stack executes this completely

// Until heavy() completes, Event Loop cannot move callbacks from Queue to Stack
setTimeout(() => {
    console.log("This waits for heavy() to finish in Call Stack");
}, 100);

// 5. COMPLETE FLOW DIAGRAM IN CODE
console.log("\n--- COMPLETE EVENT LOOP FLOW ---");

// Step 1: JS Code executes in Call Stack
console.log("Step 1: Synchronous code in Call Stack");

// Step 2: Async operation sent to Browser API
// Guard fetch to avoid unhandled rejections when network fails
const request = fetch("https://api.example.com/data").catch(err => {
    console.error("Fetch failed (ignored):", err && err.message ? err.message : err);
    return null;
}); // Sent to Browser API (non-blocking)
console.log("Step 2: Fetch sent to Browser API (non-blocking)");

// Step 3: More synchronous code in Call Stack
function processData() {
    console.log("Step 3: Processing data synchronously");
}
processData();

// Step 4: When Browser API completes, callback goes to Callback Queue
setTimeout(() => {
    console.log("Step 4: Callback moves from Queue to Call Stack when it's empty (via Event Loop)");
}, 0); // Even with 0 delay, it goes to Browser API then Callback Queue

console.log("Step 5: All synchronous code in Call Stack completes");
console.log("Step 6: Event Loop checks Call Stack is empty, moves callback from Queue to Stack");

// 6. PRACTICAL EXAMPLE: Demonstrating complete flow
console.log("\n--- PRACTICAL EVENT LOOP DEMONSTRATION ---");

function demo() {
    console.log("1. Start - in Call Stack");
    
    // Multiple async operations to show Queue ordering
    setTimeout(() => {
        console.log("3. setTimeout 0ms - from Callback Queue to Call Stack");
    }, 0);
    
    Promise.resolve().then(() => {
        console.log("2. Promise (Microtask Queue - higher priority than Callback Queue)");
    });
    
    console.log("1. End - still in Call Stack");
}

demo();
// Execution order:
// 1. All synchronous code first (Call Stack)
// 2. Microtasks (Promises) from Microtask Queue
// 3. Macrotasks (setTimeout) from Callback Queue


