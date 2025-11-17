"use strict";

const defaultLimit = 5;
const userLimit = Number(process.argv[2]) || defaultLimit;

function generateWithLet(limit) {
  console.log("\n--- Pyramid with let (isolated loop scope) ---");
  for (let row = 1; row <= limit; row += 1) {
    debugRowState(row, "let");
    let line = "";
    for (let col = 0; col < row; col += 1) {
      line += "* ";
    }
    console.log(line.trimEnd());
  }
}

function generateWithVar(limit) {
  console.log("\n--- Pyramid with var (shared scope) ---");
  for (var row = 1; row <= limit; row += 1) {
    debugRowState(row, "var");
    var line = "";
    for (var col = 0; col < row; col += 1) {
      line += "* ";
    }
    console.log(line.trimEnd());
  }
  console.log(
    `Post-loop check: row=${row} and col=${typeof col !== "undefined" ? col : "NA"} leak into outer scope due to var hoisting.`
  );
}

function debugRowState(row, keyword) {
  debugger;
  console.log(`Building row ${row} using ${keyword}`);
}

console.log("Initial 4-row sample (per instructions):");
generateWithLet(4);

console.log("\nGenerating user-controlled pyramid:");
generateWithLet(userLimit);

console.log("\nSwitching to var to illustrate scope leakage:");
generateWithVar(userLimit);

