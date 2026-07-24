"use strict";
class Student {
    name;
    age;
    // Constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
let student1 = new Student("Tanuja", 19);
student1.display();
