
//javascript dom(Document Object Model) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.
// in simple terms, the DOM is a tree-like structure that represents the elements of a web page, allowing developers to manipulate and interact with those elements using JavaScript.
//Accessing DOM Elements
//Using getElementById()
let header = document.getElementById("header"); // here we are accessing the element with id "header"
console.log(header);
//Using getElementsByClassName()
let items = document.getElementsByClassName("item"); // here we are accessing elements with class "item"
console.log(items);
//Using getElementsByTagName()
let paragraphs = document.getElementsByTagName("p"); // here we are accessing all paragraph elements
console.log(paragraphs);
//Using querySelector()
let main = document.querySelector(".main"); // here we are accessing the first element with class "main" . 
console.log(main);
//Using querySelectorAll() 
let listItems = document.querySelectorAll("ul li"); // here 
console.log(listItems);
//Modifying DOM Elements
//Changing text content
header.textContent = "hiii";
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
//The DOM is a powerful interface for interacting with web documents. By accessing, modifying, and traversing DOM elements, developers can create dynamic and interactive web pages that respond to user actions and enhance the overall user experience.
//DOM Styling & Class Manipulation
//Changing styles directly
header.style.backgroundColor = "yellow";
header.style.padding = "10px";
//Adding a class to an element refers to the process of assigning a CSS class to that element using JavaScript. This allows you to apply predefined styles from your CSS stylesheet to the element dynamically.
header.classList.add("highlight");
//Removing a class from an element refers to the process of removing a previously assigned CSS class from that element using JavaScript. This allows you to dynamically change the styles applied to the element by removing the associated CSS rules.
header.classList.remove("highlight");
//Toggling a class on an element refers to the process of adding or removing a CSS class from that element based on its current state using JavaScript. If the class is already present, it will be removed; if it is not present, it will be added. This allows for dynamic styling changes based on user interactions or other conditions.
header.classList.toggle("active");
//Checking if an element has a specific class refers to the process of determining whether a particular CSS class is currently assigned to that element using JavaScript. This allows you to conditionally apply styles or perform actions based on the presence or absence of the class.
if (header.classList.contains("active")) {
    console.log("Header is active");
} else {
    console.log("Header is not active");
}
//Replacing a class on an element refers to the process of removing an existing CSS class from that element and adding a new one using JavaScript. This allows you to change the styles applied to the element by swapping out the associated CSS rules.
header.classList.replace("active", "inactive");
//classList.contains() method to check for a class
if (header.classList.contains("inactive")) {
    console.log("Header is inactive");
}//By manipulating styles and classes through the DOM, developers can create dynamic and visually appealing web pages that respond to user interactions and enhance the overall user experience.
// document.addEventListener("keydown", (event) => {
//   console.log(event.key);
// });
