"use strict";

const operations = ["add", "divide", "power", "root", "subtract"];
const num1 = 25;
const num2 = 0;

class InvalidOperationError extends Error {
  constructor(operation) {
    super(`Invalid operation: ${operation}`);
    this.name = "InvalidOperationError";
  }
}

class MathDomainError extends Error {
  constructor(message) {
    super(message);
    this.name = "MathDomainError";
  }
}

function runOperation(operation, a, b) {
  debugger;
  switch (operation) {
    case "add":
      return a + b;
    case "subtract":
      return a - b;
    case "divide":
      if (b === 0) throw new MathDomainError("Cannot divide by zero.");
      return a / b;
    case "power":
      return a ** b;
    case "root":
      if (a < 0) throw new MathDomainError("Cannot take square root of negative number.");
      return Math.sqrt(a);
    default:
      throw new InvalidOperationError(operation);
  }
}

const summary = [];

operations.forEach((operation) => {
  try {
    const result = runOperation(operation, num1, num2);
    summary.push({ operation, status: "success", result });
  } catch (error) {
    summary.push({ operation, status: "error", message: error.message });
  }
});

console.log("\n=== Smart Calculator Summary ===");
summary.forEach((entry) => {
  if (entry.status === "success") {
    console.log(`${entry.operation}: result = ${entry.result}`);
  } else {
    console.log(`${entry.operation}: ERROR -> ${entry.message}`);
  }
});

