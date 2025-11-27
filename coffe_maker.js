function boilWater() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.8 ? resolve("Water boiled") : reject("Boiler failed!");
        }, 1000);
    });
}

function brewCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.8 ? resolve("Coffee brewed") : reject("Brewing failed!");
        }, 1200);
    });
}

function pourCoffee() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            Math.random() < 0.8 ? resolve("Coffee poured") : reject("Pouring failed!");
        }, 1500);
    });
}

// Promise chaining
boilWater()
    .then(msg => {
        console.log(msg);
        return brewCoffee();
    })
    .then(msg => {
        console.log(msg);
        return pourCoffee();
    })
    .then(msg => {
        console.log(msg);
        console.log("Coffee ready for the team!");
    })
    .catch(err => {
        console.log("Error:", err);
    });
