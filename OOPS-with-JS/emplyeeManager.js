class Employee {
    constructor(name, department) {
        this.name = name;
        this.department = department;
    }

    work() {
        console.log(`${this.name} is doing general employee work.`);
    }
}

class Manager extends Employee {
    work() {
        console.log(`${this.name} manages the ${this.department} department.`);
    }
}

const e = new Employee("Rohan", "HR");
const m = new Manager("Apeksha", "IT");

e.work(); 
m.work(); 