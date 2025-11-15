let isDoorLocked = true;
let isWindowClosed = true;
let isAlarmOn = true;
let isOwnerInside = true;

function checkSecurityStatus() {
  let accessGranted = isAlarmOn && isDoorLocked && isWindowClosed && isOwnerInside;
  
  if (accessGranted) {
    console.log("Status: Secure");
  } else {
    console.log("Status: Unsafe");
  }
  
  return accessGranted;
}

console.log("=== Security System Check ===");
console.log(`Door Locked: ${isDoorLocked}`);
console.log(`Window Closed: ${isWindowClosed}`);
console.log(`Alarm On: ${isAlarmOn}`);
console.log(`Owner Inside: ${isOwnerInside}`);
checkSecurityStatus();

console.log("\n=== Test Case 1: All Conditions Met ===");
isDoorLocked = true;
isWindowClosed = true;
isAlarmOn = true;
isOwnerInside = true;
checkSecurityStatus();

console.log("\n=== Test Case 2: Door Unlocked ===");
isDoorLocked = false;
isWindowClosed = true;
isAlarmOn = true;
isOwnerInside = true;
checkSecurityStatus();

console.log("\n=== Test Case 3: Window Open ===");
isDoorLocked = true;
isWindowClosed = false;
isAlarmOn = true;
isOwnerInside = true;
checkSecurityStatus();

console.log("\n=== Test Case 4: Alarm Off ===");
isDoorLocked = true;
isWindowClosed = true;
isAlarmOn = false;
isOwnerInside = true;
checkSecurityStatus();

console.log("\n=== Test Case 5: Owner Not Inside ===");
isDoorLocked = true;
isWindowClosed = true;
isAlarmOn = true;
isOwnerInside = false;
checkSecurityStatus();

console.log("\n=== Test Case 6: Multiple Issues ===");
isDoorLocked = false;
isWindowClosed = false;
isAlarmOn = true;
isOwnerInside = true;
checkSecurityStatus();

