let bonus = 5000;

function calculateSalary() {
  let salary = 40000;
  let isPermanent = true;

  let totalSalary;
  if (isPermanent) {
    totalSalary = salary + bonus;
    console.log(`Employee is permanent. Bonus applied: ${bonus}`);
  } else {
    totalSalary = salary;
    console.log(`Employee is not permanent. No bonus applied.`);
  }

  console.log(`Total Salary: ${totalSalary}`);
  console.log(`Global bonus value: ${bonus} (unchanged)`);

  return totalSalary;
}

console.log("=== Test Case 1: Permanent Employee ===");
calculateSalary();

console.log("\n=== Test Case 2: Non-Permanent Employee ===");
function calculateSalaryNonPermanent() {
  let salary = 40000;
  let isPermanent = false;

  let totalSalary;
  if (isPermanent) {
    totalSalary = salary + bonus;
  } else {
    totalSalary = salary;
  }

  console.log(`Total Salary: ${totalSalary}`);
  console.log(`Global bonus value: ${bonus} (still unchanged)`);
}

calculateSalaryNonPermanent();

console.log("\n=== Global Scope Verification ===");
console.log(`Global bonus after function calls: ${bonus}`);
