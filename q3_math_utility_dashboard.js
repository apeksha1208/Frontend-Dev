let x = 16.75;

let roundedValue = Math.round(x);
let squareRoot = Math.sqrt(x);
let powerValue = Math.pow(x, 3);
let randomNumber = Math.floor(Math.random() * 41) + 10;

console.log("=== Math Utility Dashboard ===");
console.log(`Input Number: ${x}\n`);

console.log(`Rounded Value: ${roundedValue}`);
console.log(`Square Root: ${squareRoot.toFixed(2)}`);
console.log(`Power (x^3): ${powerValue.toFixed(2)}`);
console.log(`Random Number (10-50): ${randomNumber}`);

console.log("\n=== Formatted Summary ===");
console.log(`Number: ${x} | Rounded: ${roundedValue} | √${x} = ${squareRoot.toFixed(2)} | ${x}³ = ${powerValue.toFixed(2)} | Random: ${randomNumber}`);

