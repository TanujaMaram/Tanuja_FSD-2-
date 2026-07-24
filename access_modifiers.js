"use strict";
class Student {
    name;
    age;
    course;
    constructor(name, age, course) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    }
}
let student1 = new Student("Tanuja", 19, "TypeScript");
student1.display();
console.log(student1.name);
