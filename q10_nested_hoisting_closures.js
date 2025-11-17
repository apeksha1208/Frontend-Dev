"use strict";

function outer() {
  console.log("\n--- Original nested hoisting output ---");
  debugger;
  console.log(count);
  var count = 5;

  function inner() {
    debugger;
    console.log(count);
    var count = 10;
    console.log(`Inner count after assignment: ${count}`);
  }

  inner();
  console.log(`Outer count after inner run: ${count}`);
}

outer();

console.log("\nExplanation: Each function creates its own lexical environment. Hoisting allocates slots for var declarations at the top of their respective scopes, causing inner count to shadow the outer count before assignment.");

function outerWithArrow() {
  console.log("\n--- Inner arrow version ---");
  var count = 5;
  const inner = () => {
    debugger;
    let innerCount = count + 5;
    console.log(`Arrow sees outer count: ${count}, innerCount: ${innerCount}`);
  };
  inner();
}

outerWithArrow();

console.log("Set a breakpoint on the debugger statements to inspect the call stack: outer -> inner / outerWithArrow -> inner arrow.");

