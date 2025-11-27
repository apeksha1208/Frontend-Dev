const menu = {
    pizza: 250,
    burger: 120,
    pasta: 180,
    coffee: 80
};

function calculateBill(orderItems) {
    try {
        const prices = orderItems.map(item => {
            if (!menu[item]) {
                throw new Error(`Item not found: ${item}`);
            }
            return menu[item];
        });

        const total = prices.reduce((sum, p) => sum + p, 0);
        console.log("Total bill:", total);
    } catch (err) {
        console.log("Error:", err.message);
    }
}

// Test
calculateBill(["pizza", "burger"]);
calculateBill(["pasta", "juice"]); // invalid item
