function Car(brand, model) {
    this.brand = brand;
    this.model = model;
}

Car.prototype.getDetails = function () {
    console.log(`Brand: ${this.brand}, Model: ${this.model}`);
};

const c1 = new Car("Honda", "City");
const c2 = new Car("Toyota", "Fortuner");

c1.getDetails();
c2.getDetails();
