"use strict";
const transactions = [
  { id: 1, amount: 2000 },
  { id: 2, amount: -500 },
  { id: 3 },
  null,
];

class TransactionError extends Error {
  constructor(message, transactionId) {
    super(message);
    this.name = "TransactionError";
    this.transactionId = transactionId;
  }
}

class NegativeAmountError extends TransactionError {
  constructor(transactionId, amount) {
    super(`Negative amount detected: ${amount}`, transactionId);
    this.name = "NegativeAmountError";
  }
}

class MissingFieldError extends TransactionError {
  constructor(transactionId, fieldName) {
    super(`Missing field: ${fieldName}`, transactionId);
    this.name = "MissingFieldError";
  }
}

class NullEntryError extends TransactionError {
  constructor() {
    super("Encountered null transaction entry", null);
    this.name = "NullEntryError";
  }
}

const validTransactions = [];
const invalidTransactions = [];

function validateTransaction(entry) {
  debugger;
  if (entry === null) {
    throw new NullEntryError();
  }

  if (typeof entry !== "object") {
    throw new TransactionError("Transaction must be an object.", entry?.id);
  }

  const { id, amount } = entry;

  if (typeof id !== "number") {
    throw new MissingFieldError(id, "id");
  }
  if (typeof amount === "undefined") {
    throw new MissingFieldError(id, "amount");
  }
  if (typeof amount !== "number") {
    throw new TransactionError("Amount must be a number.", id);
  }
  if (amount < 0) {
    throw new NegativeAmountError(id, amount);
  }

  return entry;
}

transactions.forEach((transaction) => {
  try {
    const validated = validateTransaction(transaction);
    validTransactions.push(validated);
  } catch (error) {
    invalidTransactions.push({ transaction, error });
    console.error(`[Invalid] ${error.name}: ${error.message}`);
  }
});

console.log("\n=== Transaction Summary ===");
console.log(`Valid transactions: ${validTransactions.length}`);
validTransactions.forEach((txn) => console.log(`ID ${txn.id} | Amount ${txn.amount}`));

console.log(`\nInvalid transactions: ${invalidTransactions.length}`);
invalidTransactions.forEach(({ transaction, error }) => {
  console.log(
    `Transaction: ${JSON.stringify(transaction)} => ErrorType: ${error.name} | Message: ${error.message}`
  );
});

