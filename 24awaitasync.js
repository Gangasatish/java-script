//async / await is syntax built on top of Promises. It allows us to write asynchronous code in a more synchronous-looking way, making it easier to read and maintain.

// 1. ASYNC FUNCTIONS
// An async function is a function that returns a Promise implicitly. It allows us to use the await keyword inside it. When an async function is called, it returns a Promise. The function execution starts immediately, and the Promise will be resolved with the value returned by the function or rejected if an error is thrown.

// Example of an async function
async function fetchData() {
    // Simulate an asynchronous operation using setTimeout
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched successfully!");
        }, 1000);
    });
}

// 2. AWAIT KEYWORD
// The await keyword can only be used inside async functions. It makes JavaScript wait until the Promise is resolved or rejected. When the Promise is resolved, it returns the resolved value. If the Promise is rejected, it throws an error that can be caught using try/catch blocks.
// Example of using await
async function getData() {
    try {
        const result = await fetchData(); // Waits for fetchData to resolve
        console.log(result); // Logs "Data fetched successfully!"
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Calling the async function
getData(); // Output will be "Data fetched successfully!" after 1 second

// 3. ERROR HANDLING
// Errors in async functions can be handled using try/catch blocks. If an error is thrown inside an async function, it will reject the returned Promise, and the error can be caught in the catch block.
async function fetchWithError() {
    return new Promise((_, reject) => {
        setTimeout(() => {
            reject("Failed to fetch data!");
        }, 1000);
    });
}

async function handleError() {
    try {
        const result = await fetchWithError(); // Waits for fetchWithError to reject
        console.log(result);
    } catch (error) {
        console.error("Error:", error); // Logs "Error: Failed to fetch data!" after 1 second
    }
}
handleError();

// 4. SEQUENTIAL AND PARALLEL ASYNC OPERATIONS
// Using async/await, we can easily manage sequential and parallel asynchronous operations. For sequential operations, we can simply await each operation one after the other. For parallel operations, we can use Promise.all() to run multiple Promises concurrently and await their results together.
// Sequential async operations
async function sequentialOperations() {
    const result1 = await fetchData(); // Waits for the first operation to complete
    console.log(result1); // Logs "Data fetched successfully!"
    const result2 = await fetchData(); // Waits for the second operation to complete
    console.log(result2); // Logs "Data fetched successfully!"
}
sequentialOperations();

// Parallel async operations
async function parallelOperations() {
    const promise1 = fetchData();
    const promise2 = fetchData();
    const results = await Promise.all([promise1, promise2]); // Waits for both Promises to resolve
    console.log(results); // Logs ["Data fetched successfully!", "Data fetched successfully!"]
}
parallelOperations();

// 5. ASYNC/AWAIT VS PROMISES
// Async/await is syntactic sugar over Promises, meaning it provides a more readable and cleaner syntax for working with Promises. However, under the hood, async/await still uses Promises and follows the same event loop mechanics. The main advantage of async/await is that it allows us to write asynchronous code in a more synchronous-looking way, making it easier to understand and maintain, especially when dealing with complex asynchronous operations or error handling.

// Add delay to allow all async operations to complete before process exits
setTimeout(() => {
    console.log("\n✓ All async/await algorithms completed!");
}, 3000);
