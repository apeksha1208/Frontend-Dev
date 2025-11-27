const products = [
    { id: 1, name: "Laptop", category: "Electronics", price: 50000, stock: 3 },
    { id: 2, name: "Shirt", category: "Fashion", price: 1000, stock: 20 },
    { id: 3, name: "Phone", category: "Electronics", price: 25000, stock: 5 },
    { id: 4, name: "Shoes", category: "Fashion", price: 2000, stock: 2 }
];

// 1. Low stock (stock < 5)
function getLowStockProducts() {
    return products.filter(p => p.stock < 5);
}

// 2. Sort by price (ascending)
function sortProductsByPrice() {
    return [...products].sort((a, b) => a.price - b.price);
}

// 3. Total inventory value
function calculateTotalInventoryValue() {
    return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

// 4. Group by category
function groupByCategory() {
    return products.reduce((group, p) => {
        if (!group[p.category]) {
            group[p.category] = [];
        }
        group[p.category].push(p);
        return group;
    }, {});
}

// Testing
console.log("Low Stock:", getLowStockProducts());
console.log("Sorted:", sortProductsByPrice());
console.log("Total Value:", calculateTotalInventoryValue());
console.log("Grouped:", groupByCategory());
