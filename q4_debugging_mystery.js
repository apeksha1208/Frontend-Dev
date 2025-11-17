"use strict";

function showMessageFaulty() {
  try {
    debugger;
    greeting = "Welcome";
    console.log(greeting);
  } catch (error) {
    console.error(`Faulty version error: ${error.message}`);
  }
}

showMessageFaulty();

function showMessageFixed() {
  let greetingFixed;
  let watchVariable = "Ready to inspect in debugger";
  debugger;
  greetingFixed = "Welcome";
  console.log(greetingFixed, "| Watch:", watchVariable);
}

showMessageFixed();

console.log(
  "\nExplanation: In strict mode, all identifiers must be declared. Function scope stays the same, but implicit globals are blocked, preventing accidental leaks."
);

