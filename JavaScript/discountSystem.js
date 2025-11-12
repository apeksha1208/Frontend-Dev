let totalpurchase = 9000;
let discountpercent =0;
if(totalpurchase>=10000)
{
    discountpercent=25;
}
else if(totalpurchase >= 5000)
{
    discountpercent=15;
}
else if(totalpurchase>=2000)
{
    discountpercent=5;
}
else{
    discountpercent=0;
}
let discountAmount=(totalpurchase*discountpercent)/100;
let finalPrice = totalpurchase - discountAmount;
discountAmount = Math.round(discountAmount);
finalPrice = Math.round(finalPrice);
console.log(`Original Total: ₹${totalpurchase}`);
console.log(`Discount: ${discountpercent}%`);
console.log(`Final Price After Discount: ₹${finalPrice}`);