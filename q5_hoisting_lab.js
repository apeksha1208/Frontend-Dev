"use strict";

function runOriginalSequence() {
  console.log(
    "\n--- Running original sequence (expect ReferenceError for status) ---"
  );
  try {
    console.log(score);
    announce();
    var score = 50;
    function announce() {
      console.log("Game started");
    }
    let status = "ready";
    startGame();
    function startGame() {
      console.log(status);
    }
  } catch (error) {
    console.error(`Original sequence error: ${error.message}`);
  }
}

runOriginalSequence();

console.log("\n--- Fixed Version ---");
function runFixedSequence() {
  debugger;
  var scoreFixed = 50;
  let statusFixed = "ready";

  function announceFixed() {
    console.log(`Game started with score=${scoreFixed}`);
  }

  function startGameFixed() {
    console.log(`Status: ${statusFixed}`);
  }

  console.log(scoreFixed);
  announceFixed();
  startGameFixed();
}

runFixedSequence();

console.log("\n--- Arrow Function Rewrite (No Hoisting) ---");
const announceArrow = () => console.log("Game started (arrow)");
const startGameArrow = (status) => console.log(`Status via arrow: ${status}`);
const scoreArrow = 50;
const statusArrow = "ready";

announceArrow();
startGameArrow(statusArrow);

console.log(
  "Observation: Arrow functions assigned to const are not callable before their declaration due to TDZ, enforcing clearer execution order."
);
