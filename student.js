"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
class Student {
    id;
    name;
    age;
    constructor(id, name, age) {
        this.id = id;
        this.name = name;
        this.age = age;
    }
    display() {
        console.log("Student ID:", this.id);
        console.log("Student Name:", this.name);
        console.log("Student Age:", this.age);
    }
}
exports.Student = Student;
