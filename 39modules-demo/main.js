/* ===================================================
   main.js (MAIN MODULE)

   This file IMPORTS code from math.js
=================================================== */

// Import named exports from math.js
import { add, sub } from "./math.js";

/*
{ add, sub } must match EXACT export names.

This shows NAMED IMPORT.
*/

// Using imported functions
const result1 = "10 + 5 = " + add(10, 5);
const result2 = "10 - 5 = " + sub(10, 5);

// Check if running in browser or Node.js
if (typeof document !== "undefined") {
    // Browser environment
    document.getElementById("addResult").innerText = result1;
    document.getElementById("subResult").innerText = result2;
} else {
    // Node.js environment
    console.log(result1);
    console.log(result2);
}

/*
We CANNOT access secretNumber here.

If we tried:

console.log(secretNumber);

It would ERROR.

Why?

Because modules have PRIVATE scope.
Only exported things are shared.
*/
