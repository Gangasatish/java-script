import { JSDOM } from "jsdom";

/* Step 3: Create virtual HTML */
const dom = new JSDOM(`
<!DOCTYPE html>
<html>
<body>

<h1 id="header">Original Header</h1>

<p>Paragraph 1</p>
<p>Paragraph 2</p>

<div class="main">
  <p>Main content</p>
</div>

<ul>
  <li class="item">Item 1</li>
  <li class="item">Item 2</li>
  <li class="item">Item 3</li>
</ul>

<form id="myForm">
  <input type="text" />
  <button type="submit">Submit</button>
</form>

</body>
</html>
`);

/* Step 4: Get window & document */
const { document } = dom.window;

/* ================================
   YOUR ORIGINAL DOM CODE STARTS
================================ */

// Accessing DOM Elements
let header = document.getElementById("header");
console.log(header.textContent);

let items = document.getElementsByClassName("item");
console.log(items.length);

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs.length);

let main = document.querySelector(".main");
console.log(main);

let listItems = document.querySelectorAll("ul li");
console.log(listItems.length);

// Modifying DOM
header.textContent = "hiii";
console.log(header.textContent);
main.innerHTML = "<h2>Subheader</h2><p>This is a new paragraph.</p>";
console.log(main.innerHTML);
header.style.color = "blue";
header.style.fontSize = "24px";

// Create & append
let newItem = document.createElement("li");
newItem.textContent = "New Item";
let list = document.querySelector("ul");
list.appendChild(newItem);

// Remove element
let firstItem = document.querySelector("ul li");
list.removeChild(firstItem);

// Event handling (simulated)
header.addEventListener("click", () => {
  console.log("Header clicked!");
});

// Simulate click
header.click();

// Form submit
let form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  console.log("Form submitted!");
});

// Simulate submit
form.dispatchEvent(new dom.window.Event("submit"));

// Traversal
let listItem = document.querySelector("ul li");
let parent = listItem.parentNode;
console.log(parent.nodeName);

// Styling & class manipulation
header.classList.add("highlight");
header.classList.toggle("active");

if (header.classList.contains("active")) {
  console.log("Header is active");
}

header.classList.replace("active", "inactive");

if (header.classList.contains("inactive")) {
  console.log("Header is inactive");
}

/* ================================
   OUTPUT FINAL DOM
================================ */
//console.log(document.body.innerHTML);
