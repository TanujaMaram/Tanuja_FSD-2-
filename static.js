"use strict";
class Student {
    college = "Shri Vishnu Engineering College for Women";
    name;
    constructor(name) {
        this.name = name;
    }
    static welcome() {
        console.log("Welcome to the Student Class");
    }
    display() {
        console.log("Name:", this.name);
        console.log("College:", this.college);
    }
}
Student.welcome();
let student1 = new Student("Tanuja");
student1.display();
console.log("College:", student1.college);
