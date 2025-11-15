const cart = [
  { item: "Laptop", category: "electronics", price: 45000 },
  { item: "Shoes", category: "fashion", price: 2500 },
  { item: "Book", category: "education", price: 600 }
];

console.log("=== Dynamic Discount Evaluator ===");
console.log("Cart Items:");
cart.forEach((product, index) => {
  console.log(`${index + 1}. ${product.item} - ${product.category} - ₹${product.price}`);
});

let totalBeforeDiscount = cart.reduce((sum, product) => sum + product.price, 0);
console.log(`\nTotal Before Discount: ₹${totalBeforeDiscount}`);

let discountedCart = cart.map(product => {
  let discountedPrice = product.price;
  
  if (product.category === "electronics") {
    discountedPrice = product.price * 0.90;
  } else if (product.category === "fashion") {
    discountedPrice = product.price * 0.95;
  }
  
  return {
    ...product,
    originalPrice: product.price,
    discountedPrice: discountedPrice,
    discount: product.price - discountedPrice
  };
});

console.log("\n=== Category Discounts Applied ===");
discountedCart.forEach((product, index) => {
  if (product.discount > 0) {
    console.log(`${product.item}: ₹${product.originalPrice} → ₹${product.discountedPrice.toFixed(2)} (Discount: ₹${product.discount.toFixed(2)})`);
  } else {
    console.log(`${product.item}: ₹${product.originalPrice} (No category discount)`);
  }
});

let totalAfterCategoryDiscount = discountedCart.reduce((sum, product) => sum + product.discountedPrice, 0);
console.log(`\nTotal After Category Discounts: ₹${totalAfterCategoryDiscount.toFixed(2)}`);

let finalTotal = totalAfterCategoryDiscount;
let extraDiscount = 0;

if (totalAfterCategoryDiscount > 50000) {
  extraDiscount = totalAfterCategoryDiscount * 0.05;
  finalTotal = totalAfterCategoryDiscount - extraDiscount;
  console.log(`\nExtra 5% Discount Applied (Cart > ₹50,000): ₹${extraDiscount.toFixed(2)}`);
} else {
  console.log(`\nNo Extra Discount (Cart ≤ ₹50,000)`);
}

console.log(`\n=== Final Total ===");
console.log(`Final Amount: ₹${finalTotal.toFixed(2)}`);
console.log(`Total Savings: ₹${(totalBeforeDiscount - finalTotal).toFixed(2)}`);

