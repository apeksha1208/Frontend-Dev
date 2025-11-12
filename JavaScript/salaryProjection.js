let currentSalary = 50000;   
let incrementRate = 10;  
let salaryData =[];
for(let year =1;year<=5;year++)
{
    let incrementAmount = (currentSalary * incrementRate)/100;
    currentSalary+=incrementAmount;
    currentSalary=Math.round(currentSalary);
    salaryData.push({
    Year: `Year ${year}`,
    "Increment (%)": incrementRate,
    "Salary (₹)": currentSalary
  });
}
console.table(salaryData);
