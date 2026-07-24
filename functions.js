"use strict";
function add(a, b) {
    return a + b;
}
function greet(name, message) {
    return message ? message + " " + name : "Hello " + name;
}
function welcome(name = "Guest") {
    return "Welcome " + name;
}
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
function student(name, age, isStudent) {
    return name + " is " + age + " years old. Student: " + isStudent;
}
console.log("Addition:", add(10, 20));
console.log(greet("Tanuja"));
console.log(greet("Tanuja", "Good Morning"));
console.log(welcome());
console.log(welcome("Tanuja"));
console.log("Sum:", sum(10, 20, 30, 40));
console.log(student("Tanuja", 20, true));
