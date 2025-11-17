"use strict";
const employees = [
  { name: "Amit", salary: "45000", years: "5" },
  { name: "Sara", salary: "38000", years: "2" },
  { name: "Kiran", salary: "52000", years: "7" },
];

const safeNumberConversion = (value, label) => {
  const converted = Number(value);
  if (Number.isNaN(converted)) {
    throw new TypeError(`${label} could not be converted to a number.`);
  }
  return converted;
};

function processEmployee(employee, index) {
  console.log(`\nProcessing employee #${index + 1}`);
  debugger;

  if (!employee || typeof employee !== "object") {
    throw new ReferenceError("Employee entry is missing or malformed.");
  }

  const { name, salary, years } = employee;
  if (typeof name !== "string") {
    throw new ReferenceError("Employee name is required.");
  }

  const numericSalary = safeNumberConversion(salary, "Salary");
  const numericYears = safeNumberConversion(years, "Years");
  const bonusRate = numericYears > 3 ? 0.1 : 0.05;
  const bonusValue = numericSalary * bonusRate;

  console.log(
    `Employee: ${name} | Salary: ₹${numericSalary.toLocaleString()} | Years: ${numericYears} | Bonus: ₹${bonusValue.toFixed(
      2
    )}`
  );
}

employees.forEach((employee, index) => {
  try {
    processEmployee(employee, index);
  } catch (error) {
    console.error(`Error processing employee #${index + 1}: ${error.message}`);
  }
});

