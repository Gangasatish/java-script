//problems in callbacks.js
// Until heavy() completes, Event Loop cannot move callbacks from Queue to Stack

// ============================================
// CALLBACK HELL PROBLEM 😵
// ============================================
// This demonstrates the "Pyramid of Doom" - deeply nested callbacks
// that make code hard to read, maintain, and debug

// Problem: Nested callbacks become difficult to manage as complexity grows
setTimeout(() => {
  // First async operation completes after 1000ms
  console.log("Step 1");
  
  // We need to nest another callback inside to execute sequentially
  setTimeout(() => {
    // Second async operation completes after 1000ms more
    console.log("Step 2");
    
    // We need to nest another callback inside again
    setTimeout(() => {
      // Third async operation completes after 1000ms more
      console.log("Step 3");
      // If we needed more sequential operations, we'd nest even deeper!
      // This creates the "callback hell" - deeply indented pyramid of code
    }, 1000);
  }, 1000);
}, 1000);

// Issues with Callback Hell:
// 1. Readability - Code moves right with each level of nesting
// 2. Maintainability - Hard to modify or add new steps
// 3. Error Handling - Difficult to handle errors across nested callbacks
// 4. Debugging - Stack traces become confusing with nested callbacks
// 5. Code Reusability - Hard to extract and reuse nested logic

// Solution: Use Promises or async/await to flatten the structure
