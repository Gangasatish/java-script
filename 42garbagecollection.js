/*
=================================================================
JAVASCRIPT MEMORY + CLOSURES + GARBAGE COLLECTION (FULL DEMO)
=================================================================

This file explains:

1. Global Execution Context (hidden main function)
2. Stack memory (execution + primitives)
3. Heap memory (objects + arrays)
4. References (stack -> heap)
5. Function call stack frames
6. Garbage Collection (GC)
7. Closures (stack variables promoted to heap)
8. Closure memory leak
9. Fixing memory leaks

---------------------------------------------------------------
IMPORTANT THEORY:

STACK stores:
- Global execution context
- Function stack frames
- Primitive values
- Local variables
- References to heap

HEAP stores:
- Objects
- Arrays
- Functions (as objects)
- Closure variables

GC deletes heap objects ONLY when unreachable.
=================================================================
*/


console.log("\n================ PROGRAM START ================\n");

/* =============================================================
PART 1: GLOBAL EXECUTION CONTEXT + STACK PRIMITIVES
============================================================= */

// Primitive values stored directly in STACK
let a = 10;
let b = 20;

console.log("a:", a);
console.log("b:", b);

/*
STACK:
Global frame:
a = 10
b = 20
*/


/* =============================================================
PART 2: OBJECTS GO TO HEAP
============================================================= */

let user = {
  name: "Satish",
  age: 20
};

/*
HEAP:
0x01 -> { name:"Satish", age:20 }

STACK:
user -> 0x01
*/

console.log("\nUser:", user);


/* =============================================================
PART 3: REFERENCE COPYING
============================================================= */

let anotherUser = user;

/*
STACK:
user -> 0x01
anotherUser -> 0x01

Both point to SAME heap object.
*/

anotherUser.age = 25;

console.log("\nAfter reference copy:");
console.log("user.age:", user.age);
console.log("anotherUser.age:", anotherUser.age);


/* =============================================================
PART 4: FUNCTION CALL STACK FRAME
============================================================= */

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
demo() frame POPPED.

data object unreachable.

GC deletes heap 0x02.
*/


/* =============================================================
PART 5: SIMPLE GARBAGE COLLECTION
============================================================= */

let temp = { value: 100 };

console.log("\nTemp object:", temp);

// Remove reference
temp = null;

/*
Now heap object has NO references.

GC will delete it.
*/

console.log("Temp reference removed -> eligible for GC");


/* =============================================================
PART 6: CLOSURE INTERNAL WORKING
============================================================= */

function outer() {
  let count = 0;   // initially in STACK

  function inner() {
    count++;
    console.log("Closure count:", count);
  }

  return inner;
}

let fn = outer();

/*
outer() ends.

count moves from STACK to HEAP (closure).

STACK:
fn -> inner()

HEAP:
count = 0
*/

fn(); // 1
fn(); // 2


/* =============================================================
PART 7: CLOSURE MEMORY LEAK EXAMPLE
============================================================= */

function leakCreator() {

  let bigData = new Array(1000000); // huge heap memory

  return function innerLeak() {
    console.log("Running innerLeak");
  };
}

let leakFn = leakCreator();

/*
bigData moved to HEAP because closure holds it.

Even though innerLeak doesn't use bigData,
closure keeps it alive.

GC CANNOT delete bigData.

This is MEMORY LEAK.
*/


/* =============================================================
PART 8: FIXING THE MEMORY LEAK
============================================================= */

// Remove closure reference
leakFn = null;

/*
Now no reference to innerLeak.
No reference to bigData.

GC deletes bigData.
*/

console.log("\nLeak fixed by removing reference");


/* =============================================================
FINAL SUMMARY
=============================================================

1. JS creates Global Execution Context.
2. Primitives stored in STACK.
3. Objects stored in HEAP.
4. Stack holds references to heap.
5. Functions create stack frames.
6. Stack frames auto destroyed.
7. Heap cleaned by Garbage Collector.
8. Closures move variables from stack to heap.
9. Closures can cause memory leaks.
10. Removing references allows GC.

Golden Rules:

STACK = execution + primitives + references
HEAP = objects + closure variables
GC deletes ONLY unreachable heap memory

=============================================================
*/

console.log("\n================ PROGRAM END ================\n");
