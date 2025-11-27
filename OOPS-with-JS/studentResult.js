class Student {
    constructor(name, marks) {
        this.name = name;
        this.marks = marks;
    }

    calculateAverage() {
        const total = this.marks.reduce((sum, m) => sum + m, 0);
        return total / this.marks.length;
    }

    getGrade() {
        const avg = this.calculateAverage();
        if (avg >= 90) return "A";
        if (avg >= 75) return "B";
        if (avg >= 50) return "C";
        return "F";
    }
}

// Test 3 students
const s1 = new Student("Apeksha", [90, 85, 92]);
const s2 = new Student("Ravi", [70, 65, 60]);
const s3 = new Student("Simran", [45, 50, 40]);

console.log(s1.name, s1.calculateAverage(), s1.getGrade());
console.log(s2.name, s2.calculateAverage(), s2.getGrade());
console.log(s3.name, s3.calculateAverage(), s3.getGrade());
