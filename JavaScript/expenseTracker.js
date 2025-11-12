let expenses = [12000, 3000, 8000, 2500, 1500];
let total=0;
for(let amount of expenses)
{
    total+=amount;
}
let avg = total/expenses.length;
let tax = total*0.10;
let finalamount = total +tax;
total=total.toFixed(2);
avg=avg.toFixed(2);
finalamount=finalamount.toFixed(2);
console.log(`Total Expense: ${total}`);
console.log(`Average Expense: ${avg}`);
console.log(`Final Amount(With 10% tax): ${finalamount}`);