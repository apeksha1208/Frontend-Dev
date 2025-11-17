"use strict";
const apiData = ["25", "true", "false", "NaN", " ", "100px", "3.14", null, undefined];

const validNumericData = [];
const invalidNumericData = [];

const detailedReport = [];

apiData.forEach((value, index) => {
  debugger;
  const numericValue = Number(value);
  const booleanValue = Boolean(value);
  const stringValue = String(value);

  const isExplicitInvalid =
    value === "NaN" || value === " " || value === "100px" || Number.isNaN(numericValue);

  if (isExplicitInvalid) {
    invalidNumericData.push({ index, original: value, numericValue });
  } else {
    validNumericData.push(numericValue);
  }

  detailedReport.push({
    index,
    original: value,
    number: numericValue,
    boolean: booleanValue,
    string: stringValue.trim() === "" ? "<empty string>" : stringValue,
    numericStatus: isExplicitInvalid ? "Invalid numeric" : "Valid numeric",
  });
});

console.log("=== Detailed Conversion Report ===");
detailedReport.forEach((entry) => {
  console.log(
    `Index ${entry.index}: original=${entry.original}, number=${entry.number}, boolean=${entry.boolean}, string=${entry.string}, status=${entry.numericStatus}`
  );
});

console.log("\n=== Valid Numeric Data ===");
validNumericData.forEach((num, position) => {
  console.log(`Valid #${position + 1}: ${num}`);
});

console.log("\n=== Invalid Numeric Data (Skipped) ===");
if (invalidNumericData.length === 0) {
  console.log("No invalid numeric entries detected.");
} else {
  invalidNumericData.forEach((entry) => {
    console.log(`Index ${entry.index} with original value "${entry.original}" failed numeric parsing.`);
  });
}

console.log("\nSummary:");
console.log(`Valid count: ${validNumericData.length}`);
console.log(`Invalid count: ${invalidNumericData.length}`);

