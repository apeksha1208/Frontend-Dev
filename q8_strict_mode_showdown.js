"use strict";

function runWithoutStrict() {
  console.log("\n--- Running without strict mode ---");
  try {
    const sloppyRunner = new Function(`
      function demo(a, a) {
        total = 10;
        delete total;
        return { args: [a], deleted: true };
      }
      return demo(5, 10);
    `);
    const result = sloppyRunner();
    console.log("Sloppy result:", result);
    console.log("Global total after sloppy run:", globalThis.total);
  } catch (error) {
    console.error("Unexpected sloppy mode error:", error.message);
  }
}

function runWithStrict() {
  console.log("\n--- Running with strict mode ---");
  try {
    const strictRunner = new Function(`
      "use strict";
      function demo(a, a) {
        total = 10;
        delete total;
        return true;
      }
      return demo(5, 10);
    `);
    strictRunner();
  } catch (error) {
    console.error("Strict mode error:", error.message);
  }
}

function runCorrectES6Version() {
  console.log("\n--- Correct ES6-compliant version ---");
  (function demoES6(firstArg, secondArg) {
    debugger;
    const totalLocal = 10;
    console.log(`Args unique: ${firstArg}, ${secondArg} | total=${totalLocal}`);
  })(5, 10);
}

runWithoutStrict();
runWithStrict();
runCorrectES6Version();

console.log(
  "\nExplanation: Strict mode forbids duplicate parameter names and implicit globals. Deleting bindings is illegal because bindings live in lexical environments, not object properties."
);

