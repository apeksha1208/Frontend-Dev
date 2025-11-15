function generateRandomScore() {
  return Math.floor(Math.random() * 71) + 30;
}

let scores = [];
for (let i = 0; i < 8; i++) {
  scores.push(generateRandomScore());
}

console.log("=== Student Performance Analyzer ===");
console.log(`Scores Array: [${scores.join(", ")}]\n`);

let highestScore = Math.max(...scores);
let lowestScore = Math.min(...scores);

let sum = scores.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
let averageScore = sum / scores.length;

let passedStudents = scores.filter(score => score >= 50);
let passCount = passedStudents.length;

console.log("=== Performance Summary ===");
console.log(`Highest Score: ${highestScore}`);
console.log(`Lowest Score: ${lowestScore}`);
console.log(`Average Score: ${averageScore.toFixed(2)}`);
console.log(`Number of Students Passed (≥50): ${passCount}`);
console.log(`Passed Scores: [${passedStudents.join(", ")}]`);

console.log("\n=== Detailed Breakdown ===");
scores.map((score, index) => {
  let status = score >= 50 ? "Pass" : "Fail";
  console.log(`Student ${index + 1}: ${score} - ${status}`);
});

