//json is used to exchange data between client and server in a standardized format. It is lightweight and human-readable, making it ideal for APIs and web applications.
//In JavaScript, you can use the built-in JSON object to work with JSON data. The two main methods are JSON.stringify() to convert a JavaScript object to a JSON string, and JSON.parse() to convert a JSON string back into a JavaScript object.

//Example of using JSON.stringify() to convert a JavaScript object to a JSON string:
const person = {
  name: "Alice",
  age: 30,
  city: "New York"
};
const jsonString = JSON.stringify(person);
console.log(jsonString); // Output: {"name":"Alice","age":30,"city":"New York"}

//Example of using JSON.parse() to convert a JSON string back into a JavaScript object:
const jsonString2 = '{"name":"Bob","age":25,"city":"Los Angeles"}';
const person2 = JSON.parse(jsonString2);
console.log(person2); // Output: { name: 'Bob', age: 25, city: 'Los Angeles' }

//In the context of APIs, you often send and receive data in JSON format. When making a request to an API, you can include headers to specify the content type and any necessary authentication tokens. For example, when sending a POST request with JSON data, you would set the "Content-Type" header to "application/json" and include an "Authorization" header if required by the API.
fetch("https://api.example.com/data", {
  method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer demo-token" //token is used for authentication, here it's just a placeholder. for first login you give username and password, server verifies and gives you a token, then you use that token for subsequent requests to prove your identity.
    },
    body: JSON.stringify({ name: "Alice" })
}).then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error("Error:", error));
