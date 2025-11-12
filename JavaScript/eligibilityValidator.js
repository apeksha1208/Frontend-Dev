let age = 9;          
let isCitizen = true;  
if (isCitizen) {
  if (age >= 18 && age >= 21) {
    console.log(" Eligible for all services.");
  } else if (age >= 18 && age < 21) {
    console.log(" Eligible to vote only.");
  } else {
    console.log("Not eligible yet.");
  }
} else {
  if (age >= 18) {
    console.log("Only age criteria met (not a citizen).");
  } else {
    console.log("Not eligible yet.");
  }
}