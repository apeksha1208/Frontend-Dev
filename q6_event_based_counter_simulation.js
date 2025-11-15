let count = 0;

function increment() {
  count++;
  console.log(`Count increased. Current value: ${count}`);
  
  function showNestedScope() {
    console.log(`  [Nested function] Accessing count: ${count}`);
  }
  
  showNestedScope();
}

function decrement() {
  count--;
  console.log(`Count decreased. Current value: ${count}`);
  
  function showNestedScope() {
    console.log(`  [Nested function] Accessing count: ${count}`);
  }
  
  showNestedScope();
}

console.log("=== Event-Based Counter Simulation ===");
console.log(`Initial count: ${count}\n`);

console.log("Simulating increment click...");
increment();

console.log("\nSimulating increment click...");
increment();

console.log("\nSimulating decrement click...");
decrement();

console.log("\nSimulating increment click...");
increment();

console.log("\nSimulating decrement click...");
decrement();

console.log(`\nFinal count: ${count}`);

