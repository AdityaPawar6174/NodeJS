
class Student {
    constructor(id, name, course) {
        this.id = id;
        this.name = name;
        this.course = course;
    }

    display() {
        console.log(`ID: ${this.id}, Name: ${this.name}, Course: ${this.course}`);
    }
}

module.exports = Student;