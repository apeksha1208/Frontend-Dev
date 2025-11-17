"use strict";

const rawData = [
  '{"user":"Alex","age":25}',
  '{"id":2}',
  '{invalid}',
  '{"user":"Mina","age":"22"}',
];

const cleanEntries = [];
const errorLog = [];

function processLine(line, lineNumber) {
  debugger;
  try {
    const parsedValue = JSON.parse(line);

    if (!Object.hasOwn(parsedValue, "user")) {
      throw new Error("Missing user key.");
    }
    if (!Object.hasOwn(parsedValue, "age")) {
      throw new Error("Missing age key.");
    }

    const numericAge = Number(parsedValue.age);
    if (Number.isNaN(numericAge)) {
      throw new Error("Age is not numeric.");
    }
    if (numericAge < 18) {
      console.warn(`Line ${lineNumber}: User ${parsedValue.user} filtered out (under 18).`);
      return;
    }

    cleanEntries.push({ user: parsedValue.user, age: numericAge });
  } catch (error) {
    errorLog.push({ lineNumber, line, message: error.message });
  }
}

rawData.forEach((line, index) => {
  processLine(line, index + 1);
});

console.log("\n=== Clean Entries ===");
cleanEntries.forEach((entry) => console.log(`User: ${entry.user}, Age: ${entry.age}`));

console.log("\n=== Error Log ===");
errorLog.forEach((issue) => {
  console.error(`Line ${issue.lineNumber}: "${issue.line}" -> ${issue.message}`);
});

