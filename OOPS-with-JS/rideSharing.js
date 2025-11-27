class User {
    constructor(name, rating) {
        this.name = name;
        this.rating = rating;
    }
}

class Driver extends User {
    constructor(name, rating, vehicle) {
        super(name, rating);
        this.vehicle = vehicle;
    }
}

class Trip {
    constructor(fromLocation, toLocation, distance) {
        this.from = fromLocation;
        this.to = toLocation;
        this.distance = distance;
    }

    calculateFare() {
        if (this.distance == null || this.distance < 0) {
            throw new Error("Distance must be a valid positive number");
        }
        return this.distance * 12; 
    }
}

try {
    const trip = new Trip("Delhi", "Noida", 15);
    console.log("Fare:", trip.calculateFare());
} catch (err) {
    console.log("Error:", err.message);
}

try {
    const badTrip = new Trip("Agra", "Mathura", -5);
    console.log(badTrip.calculateFare());
} catch (err) {
    console.log("Error:", err.message);
}
