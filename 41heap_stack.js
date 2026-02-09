/*
=========================================================
JAVASCRIPT MEMORY DEMO (STACK + HEAP)
=========================================================

This file demonstrates:

1. Global Execution Context (hidden main function)
2. Stack memory (primitives + execution)
3. Heap memory (objects)
4. References (stack pointing to heap)
5. Function stack frames
6. Garbage Collection concept

IMPORTANT THEORY:

STACK stores:
- Global execution context
- Function call frames
- Primitive values
- Local variables
- References to heap objects

HEAP stores:
- Objects
- Arrays
- Functions (as objects)
- Large / dynamic data

Stack is FAST and auto-cleared.
Heap is cleaned by Garbage Collector.
*/

/* =====================================================
PART 1: GLOBAL EXECUTION CONTEXT
===================================================== */

console.log("\n--- GLOBAL EXECUTION CONTEXT CREATED ---");

// Primitive values (stored directly in STACK)
let a = 10;
let b = 20;

console.log("a:", a);
console.log("b:", b);

/*
Memory now:

STACK:
Global Frame:
a = 10
b = 20
*/

/* =====================================================
PART 2: OBJECT GOES TO HEAP
===================================================== */

let user = {
    name: "Satish",
    age: 20
};

/*
Heap:
0x01 -> { name:"Satish", age:20 }

Stack:
user -> 0x01   (REFERENCE)
*/

console.log("\nUser object:", user);

/* =====================================================
PART 3: REFERENCE COPY (NOT VALUE COPY)
===================================================== */

let anotherUser = user;

/*
Stack:
user -> 0x01
anotherUser -> 0x01

Both point to SAME heap object.
*/

anotherUser.age = 25;

console.log("\nAfter modifying anotherUser:");
console.log("user.age:", user.age);
console.log("anotherUser.age:", anotherUser.age);

/*
Both change because heap object changed.
*/

/* =====================================================
PART 4: FUNCTION CALL (STACK FRAME CREATED)
===================================================== */

function demo() {

    console.log("\n--- demo() stack frame created ---");

    // Primitive -> STACK
    let x = 5;

    // Object -> HEAP
    let data = { city: "Kadapa" };

    console.log("Inside demo - x:", x);
    console.log("Inside demo - data:", data);

    /*
    STACK (demo frame):
    x = 5
    data -> 0x02

    HEAP:
    0x02 -> { city:"Kadapa" }
    */
}

demo();

/*
After demo() finishes:

demo frame POPPED from stack.

data object has NO references.

Garbage Collector deletes heap object 0x02.
*/

/* =====================================================
PART 5: STACK AUTO CLEANUP
===================================================== */

console.log("\n--- demo() finished, stack frame destroyed ---");

/* =====================================================
PART 6: HEAP CLEANUP EXAMPLE
===================================================== */

let obj = { value: 100 };

console.log("\nHeap object created:", obj);

// Remove reference
obj = null;

/*
Now heap object has NO stack references.

Garbage Collector will remove it.
*/

console.log("Reference removed. Heap object eligible for GC.");

/* =====================================================
FINAL SUMMARY (READ THIS)
=====================================================

1. JS creates Global Execution Context (stack frame).
2. Primitives stored directly in stack.
3. Objects stored in heap.
4. Stack holds references to heap.
5. Function calls create stack frames.
6. Stack frames are destroyed automatically.
7. Heap objects removed by Garbage Collector.
8. Object assignment copies reference, not value.

Golden Rule:
STACK = execution + primitives + references
HEAP = objects

=====================================================
END OF DEMO
=====================================================
*/

console.log("\n--- PROGRAM END ---");
