/*
=========================================================
JAVASCRIPT STRICT MODE - COMPLETE DEMO
=========================================================

Strict mode makes JavaScript safer by turning silent
mistakes into real errors.

Turn it ON using:

"use strict";

IMPORTANT:
- Modules are strict by default
- Classes are strict by default

Below we compare NORMAL MODE vs STRICT MODE.
*/

/* =====================================================
PART 1: NORMAL MODE (no "use strict")
===================================================== */

console.log("\n--- NORMAL MODE ---");

// Accidental global variable (BAD)
function normalMode() {
    x = 10;   // No let/var/const (creates GLOBAL variable!)
    console.log("x in normal mode:", x);
}

normalMode();
console.log("Global x:", x); // exists! Dangerous!

/*
Normal mode allows sloppy code.
x becomes global without warning.
*/


/* =====================================================
PART 2: STRICT MODE
===================================================== */

console.log("\n--- STRICT MODE ---");

"use strict";

function strictMode() {

    // Uncomment to see error:
    // y = 20;   // ReferenceError: y is not defined

    let y = 20;
    console.log("y in strict mode:", y);

    // 'this' inside normal function
    console.log("this in strict function:", this); // undefined
}

strictMode();

/*
Strict mode:
- Blocks undeclared variables
- Makes 'this' undefined in functions
*/


/* =====================================================
PART 3: DUPLICATE PARAMETERS
===================================================== */

// Uncomment to see error:
//
// function add(a, a) {
//     return a;
// }
//
// Duplicate parameters NOT allowed in strict mode.


/* =====================================================
PART 4: DELETING VARIABLES
===================================================== */

// Uncomment to see error:
//
// let a = 10;
// delete a;


/* =====================================================
PART 5: RESERVED WORDS
===================================================== */

// Uncomment to see error:
//
// let eval = 5;


/* =====================================================
PART 6: CLASS (AUTOMATIC STRICT MODE)
===================================================== */

console.log("\n--- CLASS (AUTO STRICT MODE) ---");

class Person {

    constructor(name) {
        this.name = name;
    }

    show() {
        console.log("Name:", this.name);

        // Uncomment to see error:
        // z = 30;   // ReferenceError (classes are strict!)
    }
}

const p = new Person("Satish");
p.show();

/*
Classes ALWAYS run in strict mode automatically.
No need to write "use strict".
*/


/* =====================================================
PART 7: this INSIDE CLASS METHOD
===================================================== */

class Demo {
    show() {
        console.log("this in class method:", this);
    }
}

const d = new Demo();

const f = d.show;
f();   // undefined (strict behavior)


/* =====================================================
FINAL SUMMARY (READ THIS)
=====================================================

1. Normal JS hides mistakes.
2. "use strict" exposes mistakes.
3. Prevents accidental globals.
4. Makes 'this' safer.
5. Blocks duplicate params.
6. Protects reserved words.
7. Classes are ALWAYS strict.
8. Modules are ALWAYS strict.

Strict mode = safer JavaScript.
*/

console.log("\n--- END OF DEMO ---");
