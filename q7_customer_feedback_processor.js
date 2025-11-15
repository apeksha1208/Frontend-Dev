let feedback = "Great product! Fast delivery and amazing sound quality!";

console.log("=== Customer Feedback Processor ===");
console.log(`Original Feedback: "${feedback}"\n`);

let words = feedback.split(" ");
let wordCount = words.length;

console.log(`Word Count: ${wordCount}`);

let hasNegativeWords = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");

if (!hasNegativeWords) {
  console.log("Result: Positive Feedback");
} else {
  console.log("Result: Needs Improvement");
}

console.log("\n=== Test Case 1: Positive Feedback ===");
feedback = "Great product! Fast delivery and amazing sound quality!";
words = feedback.split(" ");
wordCount = words.length;
hasNegativeWords = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");
console.log(`Feedback: "${feedback}"`);
console.log(`Word Count: ${wordCount}`);
if (!hasNegativeWords) {
  console.log("Result: Positive Feedback");
} else {
  console.log("Result: Needs Improvement");
}

console.log("\n=== Test Case 2: Negative Feedback ===");
feedback = "The product quality is bad and delivery was poor.";
words = feedback.split(" ");
wordCount = words.length;
hasNegativeWords = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");
console.log(`Feedback: "${feedback}"`);
console.log(`Word Count: ${wordCount}`);
if (!hasNegativeWords) {
  console.log("Result: Positive Feedback");
} else {
  console.log("Result: Needs Improvement");
}

console.log("\n=== Test Case 3: Mixed Feedback ===");
feedback = "Good product but poor packaging";
words = feedback.split(" ");
wordCount = words.length;
hasNegativeWords = feedback.toLowerCase().includes("bad") || feedback.toLowerCase().includes("poor");
console.log(`Feedback: "${feedback}"`);
console.log(`Word Count: ${wordCount}`);
if (!hasNegativeWords) {
  console.log("Result: Positive Feedback");
} else {
  console.log("Result: Needs Improvement");
}

