let numbers = [];
for (let i = 1; i <= 30; i++) {
  numbers.push(i);
}

let results = [];

console.log("=== Odd-Even Number Analyzer ===");
console.log(`Numbers: 1-30\n`);

numbers.forEach(number => {
  let classification;
  
  if (number % 3 === 0 && number % 5 === 0) {
    classification = "FizzBuzz";
  } else if (number % 2 === 0) {
    classification = "Even";
  } else {
    classification = "Odd";
  }
  
  results.push(`${number}: ${classification}`);
});

console.log("=== Results ===");
results.forEach(result => {
  console.log(result);
});

console.log("\n=== Summary Array ===");
console.log(results);

