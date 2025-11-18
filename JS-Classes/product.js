
class Product {
    constructor(id, name, price, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.category = category;
    }
    applyDiscount(percent) {
        this.price = this.price - (this.price * percent / 100);
    }
    getDetails() {
        return `ID: ${this.id}, Name: ${this.name}, Price: ₹${this.price}, Category: ${this.category}`;
    }
}
const p1 = new Product(1, "Laptop", 55000, "Electronics");
const p2 = new Product(2, "Shoes", 1200, "Fashion");
const p3 = new Product(3, "Mouse", 450, "Electronics");
const p4 = new Product(4, "Watch", 2500, "Accessories");
const products = [p1, p2, p3, p4];
p1.applyDiscount(10);  
p2.applyDiscount(5);   
const filtered = products.filter(prod => prod.price > 1000);
filtered.forEach(prod => {
    console.log(prod.getDetails());
});
