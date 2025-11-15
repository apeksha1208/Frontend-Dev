const departments = [
  ["HR", 72],
  ["Finance", 88],
  ["Tech", 95],
  ["Support", 63]
];

console.log("=== Departmental Employee Evaluator ===");
console.log("Department Performance:\n");

departments.forEach(([departmentName, score]) => {
  let evaluation;
  
  if (score >= 90) {
    evaluation = "Excellent";
  } else if (score >= 75 && score <= 89) {
    evaluation = "Good";
  } else if (score >= 60 && score <= 74) {
    evaluation = "Average";
  } else {
    evaluation = "Needs Improvement";
  }
  
  console.log(`${departmentName}: ${score} points - ${evaluation}`);
});

console.log("\n=== Detailed Breakdown ===");
departments.forEach(([departmentName, score]) => {
  let evaluation;
  
  if (score >= 90) {
    evaluation = "Excellent";
  } else if (score >= 75) {
    evaluation = "Good";
  } else if (score >= 60) {
    evaluation = "Average";
  } else {
    evaluation = "Needs Improvement";
  }
  
  console.log(`Department: ${departmentName}`);
  console.log(`  Score: ${score}`);
  console.log(`  Evaluation: ${evaluation}`);
  console.log(`  Status: ${score >= 75 ? "Above Average" : "Below Average"}\n`);
});

