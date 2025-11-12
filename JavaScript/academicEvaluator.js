let arr =[78, 30, 90 ,89 , 95];
let total=0;
for( let sum of arr)
{
    total+=sum;
}
let average = total / arr.length;
let percentage = (total / 500) * 100;
let result = "";
for(let i=0; i<=arr.lrngth; i++)
{
  if(arr[i]<=35)
  {
    result="Detained";
  }
}
if(percentage>=85)
{
    result="Promoted";
}
else if(percentage>=50 && percentage<85)
{
    result="Promoted";
}
else{
    result="Detained";
}
console.log(`Total Marks: ${total}`);
console.log(`Average Marks: ${average}`);
console.log(`Percentage: ${percentage}`);
console.log(`Result: ${result}`);