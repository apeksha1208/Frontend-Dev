let num1 = Math.floor(Math.random() * 20) + 1;
let num2 = Math.floor(Math.random() * 20) + 1;
let operators = ['+', '-', '*', '/'];
let randomOperator = operators[Math.floor(Math.random() * operators.length)];
let correctAnswer;
switch (randomOperator) {
  case '+':
    correctAnswer = num1 + num2;
    break;
  case '-':
    correctAnswer = num1 - num2;
    break;
  case '*':
    correctAnswer = num1 * num2;
    break;
  case '/':
    correctAnswer = (num1 / num2).toFixed(2); 
    break;
  default:
    console.log("Invalid operator!");
    break;
}
console.log(`Question: ${num1} ${randomOperator} ${num2} = ?`);
console.log(`Correct Answer: ${correctAnswer}`);