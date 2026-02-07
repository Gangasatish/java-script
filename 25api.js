// JavaScript Program (Developer Code)
// │
// ├─ async function fetchData() { ... }
// │
// └─ fetchData() called
//       │
//       ▼
// 🧠 JavaScript Engine (ECMAScript)
// │
// ├─ async detected
// │     └─ Wraps function in Promise automatically
// │
// ├─ Execution starts
// │
// ├─ JS encounters:
// │     await fetch(url)
// │
// ├─ fetch(url) contains:
// │     ├─ URL string
// │     ├─ HTTP method (default GET)
// │     ├─ headers (optional)
// │     ├─ body (optional)
// │     └─ credentials (optional)
// │
// ├─ JS Engine delegates fetch to Browser Web API
// │
// └─ async function PAUSED
//       │
//       ▼
// 🌍 Browser Runtime (Host Environment)
// │
// ├─ Creates Request Object from fetch(url):
// │     ├─ request.url
// │     ├─ request.method
// │     ├─ request.headers
// │     └─ request.body
// │
// ├─ Opens network connection
// │
// ├─ Sends HTTP Request over Internet
// │
// └─ waits for Server response
//       │
//       ▼
// 🖥️ API Server (Remote Computer)
// │
// ├─ Receives HTTP Request
// │
// ├─ Executes backend logic
// │
// ├─ Reads database
// │
// └─ Sends HTTP Response:
//       ├─ status (200 / 404 / 500)
//       ├─ headers
//       └─ body (JSON text)
//       │
//       ▼
// 🌍 Browser Runtime receives response
// │
// ├─ Creates Response Object:
// │     ├─ response.status
// │     ├─ response.ok   ← auto-calculated
// │     ├─ response.headers
// │     ├─ response.body (ReadableStream)
// │     └─ response.json() (method)
// │
// ├─ Browser resolves fetch Promise
// │
// └─ Browser informs JS Engine
//       │
//       ▼
// 🧠 JavaScript Engine
// │
// ├─ Promise state:
// │     pending → fulfilled
// │
// ├─ await resumes async function
// │     (scheduled through Microtask Queue)
// │
// └─ assigns:
//       response = Response object
//       │
//       ▼
// JavaScript Program continues
// │
// ├─ if (!response.ok)
// │     └─ throw Error (manual HTTP error handling)
// │
// ├─ JS encounters:
// │     await response.json()
// │
// ├─ Browser parses body → JS object
// │
// └─ Promise resolved again
//       │
//       ▼
// 🌍 Browser Runtime
// │
// ├─ Places await continuation into:
// │     └─ Microtask Queue
// │
// └─ Event Loop waits
//       │
//       ▼
// Event Loop Algorithm
// │
// ├─ Wait until Call Stack empty
// │
// ├─ Execute Microtask Queue FIRST
// │
// └─ Resume async function
//       │
//       ▼
// 🧠 JavaScript Engine resumes
// │
// ├─ data = parsed JSON object
// │
// ├─ console.log(data)
// │
// └─ async function completes
//       │
//       ▼
// Final Output Produced

//api is a set of rules and protocols that allows different software applications to communicate with each other. It defines how requests and responses should be structured, what data formats to use, and how to handle errors. APIs can be used for various purposes, such as accessing web services, databases, or hardware devices. They enable developers to integrate functionality from other applications or services into their own applications without having to build everything from scratch.

// In JavaScript, we often use APIs to interact with web services. For example, the Fetch API allows us to make HTTP requests to retrieve data from a server. We can use the fetch() function to send a request and handle the response using Promises or async/await syntax. APIs are essential for building modern web applications that rely on external data and services.
// Example of using Fetch API to get data from a server
fetch("https://api.example.com/data")
    .then(response => {
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return response.json(); // Parse JSON data from response
    })
    .then(data => {
        console.log("Data received from API:", data);
    })
    .catch(error => {
        console.error("Error fetching data:", error);
    });
    // In this example, we use the Fetch API to send a GET request to "https://api.example.com/data". We check if the response is successful (status code 200-299) and then parse the JSON data from the response. Finally, we log the received data or handle any errors that occur during the fetch operation.
    //output will be the data received from the API or an error message if the fetch fails.

// Note: The above code assumes that "https://api.example.com/data" is a valid API endpoint that returns JSON data. In a real application, you would replace this URL with the actual API you want to interact with.

async function fetchData() {
  try {
    console.log("Starting API call...");

    // 1. Send request
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    // 2. Check HTTP status
    if (!response.ok) {
      throw new Error("HTTP Error: " + response.status);
    }

    console.log("Response received");

    // 3. Convert to JSON
    const data = await response.json();

    console.log("JSON parsed");

    // 4. Use data
    console.log("Final Data:", data);

  } catch (error) {
    // 5. Handle ANY error (network or server)
    console.log("Something went wrong:", error.message);
  }
}

fetchData();

