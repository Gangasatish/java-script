/* ===================================================
   math.js  (THIS IS A MODULE FILE)

   IMPORTANT:
   - Every module has its OWN private scope
   - Variables here are NOT global
   - Only EXPORTED things are visible outside
=================================================== */

// This variable is PRIVATE to this module
let secretNumber = 100;

// Named export (we can export many things)
export function add(a, b) {
    return a + b;
}

// Another named export
export function sub(a, b) {
    return a - b;
}

/*
secretNumber is NOT exported,
so other files CANNOT access it.

This proves MODULE SCOPE.
*/
