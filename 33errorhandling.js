//errors is a built in object in jst that provides information about errors that occur during the execution of a program. It has several properties, including name, message, stack, and more. The name property indicates the type of error (e.g., "TypeError", "ReferenceError"), while the message property provides a description of the error. The stack property contains a stack trace that can help developers identify where the error occurred in the code.
//In JavaScript, you can use try...catch blocks to handle errors gracefully. The code inside the try block is executed, and if an error occurs, it is caught by the catch block, allowing you to handle it without crashing the program.

//Example of using try...catch to handle errors:
try {
  // This will throw a ReferenceError because x is not defined
  console.log(x);
} catch (error) {
  console.error("An error occurred:", error.message);
}
//Output: An error occurred: x is not defined

//You can also throw your own custom errors using the throw statement. This allows you to create specific error messages and types for your application.
//Example of throwing a custom error:
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
  console.log(divide(10, 0));
} catch (error) {
  console.error("An error occurred:", error.message);
}
//Output: An error occurred: Cannot divide by zero

//In addition to the built-in Error object, JavaScript also provides several specific error types, such as TypeError, ReferenceError, SyntaxError, and more. You can use these specific error types to provide more detailed information about the nature of the error.
try {
  // This will throw a TypeError because you cannot call a non-function
  const notAFunction = {};
  notAFunction();
}
catch (error) {
  if (error instanceof TypeError) {
    console.error("TypeError occurred:", error.message);
  } else {
    console.error("An unexpected error occurred:", error.message);
  }
}
//Output: TypeError occurred: notAFunction is not a function

//finally, you can use the finally block in a try...catch statement to execute code that should run regardless of whether an error occurred or not. This is useful for cleaning up resources or performing any necessary final steps after handling an error.
try {
  // This will throw a ReferenceError because y is not defined
  console.log(y);
} catch (error) {
    console.error("An error occurred:", error.message);

} finally {
  console.log("This will always run, regardless of whether an error occurred or not.");
}
//Output: An error occurred: y is not defined
//This will always run, regardless of whether an error occurred or not.

//Error Handling in async/await
//When working with asynchronous code using async/await, you can also use try...catch blocks to handle errors. This allows you to catch any errors that occur during the execution of asynchronous operations and handle them gracefully.
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("An error occurred while fetching data:", error.message);
  }
}

fetchData();
//Output: An error occurred while fetching data: Network response was not ok (if the API endpoint is not reachable or returns an error)