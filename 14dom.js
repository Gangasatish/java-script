//javascript dom(Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.

//Accessing DOM Elements
//Using getElementById()
let header = document.getElementById("header");
console.log(header);
//Using getElementsByClassName()
let items = document.getElementsByClassName("item");
console.log(items);
//Using getElementsByTagName()
let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs);
//Using querySelector()
let main = document.querySelector(".main");
console.log(main);
//Using querySelectorAll()
let listItems = document.querySelectorAll("ul li");
console.log(listItems);
//Modifying DOM Elements
//Changing text content
header.textContent = "New Header Text";
//Changing HTML content
main.innerHTML = "<h2>Subheader</h2><p>This is a new paragraph.</p>";
//Changing styles
header.style.color = "blue";
header.style.fontSize = "24px";
//Creating and appending new elements
let newItem = document.createElement("li");
newItem.textContent = "New Item";
let list = document.querySelector("ul");
list.appendChild(newItem);
//Removing elements
let firstItem = document.querySelector("ul li");
list.removeChild(firstItem);
//Event Handling in dom refers to the process of responding to user interactions or other events that occur within a web page. Events can include actions such as clicks, mouse movements, key presses, form submissions, and more. JavaScript provides a way to listen for these events and execute specific functions when they occur.
//Adding event listeners
header.addEventListener("click", function() {
    alert("Header clicked!");
});
//Handling form submission
let form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Form submitted!");
});
//Mouse events
main.addEventListener("mouseover", function() {
    main.style.backgroundColor = "lightgray";
});
main.addEventListener("mouseout", function() {
    main.style.backgroundColor = "";
});
//Keyboard events
document.addEventListener("keydown", function(event) {
    console.log("Key pressed: " + event.key);
});
//Event delegation
list.addEventListener("click", function(event) {
    if (event.target && event.target.nodeName === "LI") {
        alert("List item clicked: " + event.target.textContent);
    }
});
//DOM Traversal involves navigating through the nodes of the Document Object Model (DOM) tree to access, modify, or manipulate elements and their relationships. Here are some common methods and properties used for DOM traversal:
//Parent Node
let listItem = document.querySelector("ul li");
let parent = listItem.parentNode;
console.log(parent);
//Child Nodes
let children = parent.childNodes;
console.log(children);
//First Child
let firstChild = parent.firstChild;
console.log(firstChild);
//Last Child
let lastChild = parent.lastChild;
console.log(lastChild);
//Next Sibling
let nextSibling = listItem.nextSibling;
console.log(nextSibling);
//Previous Sibling
let previousSibling = listItem.previousSibling;
console.log(previousSibling);
//Finding elements by traversing
let grandParent = listItem.parentNode.parentNode;
console.log(grandParent);
//Modifying elements while traversing
parent.style.border = "2px solid red";
//Summary
//The DOM is a powerful interface for interacting with web documents. By accessing, modifying, and traversing DOM elements, developers can create dynamic and interactive web pages that respond to user actions and enhance the overall user experience.