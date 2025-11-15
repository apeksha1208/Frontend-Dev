let productName = " wireless headphones PRO ";

console.log("=== Original Product Name ===");
console.log(`Original: "${productName}"`);
console.log(`Original Length: ${productName.length}`);

let trimmedName = productName.trim();
console.log(`\nAfter trim(): "${trimmedName}"`);

let lowerCaseName = trimmedName.toLowerCase();
console.log(`After toLowerCase(): "${lowerCaseName}"`);

let words = lowerCaseName.split(" ");
console.log(`After split(): [${words.join(", ")}]`);

let capitalizedWords = words.map((word) => {
  if (word.length > 0) {
    return word.charAt(0).toUpperCase() + word.slice(1);
  }
  return word;
});
console.log(`After map() (capitalize): [${capitalizedWords.join(", ")}]`);

let joinedName = capitalizedWords.join(" ");
console.log(`After join(): "${joinedName}"`);

let finalName = joinedName.replace(/Pro/gi, "Pro Edition");
console.log(`After replace(): "${finalName}"`);

console.log("\n=== Final Result ===");
console.log(`Cleaned Title: "${finalName}"`);
console.log(`Title Length: ${finalName.length} characters`);

console.log("\n=== Methods Used ===");
console.log("✓ trim() - Removed leading/trailing spaces");
console.log("✓ split() - Split string into array");
console.log("✓ map() - Capitalized first letter of each word");
console.log("✓ join() - Joined array back to string");
console.log("✓ replace() - Replaced 'pro' with 'Pro Edition'");
console.log("✓ length - Displayed string length");
