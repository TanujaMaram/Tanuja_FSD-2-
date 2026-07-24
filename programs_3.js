"use strict";
{
    let array1 = [1, 2, 3];
    let array2 = [4, 5, 6];
    let mergedArray = [...array1, ...array2];
    console.log("Merged Array:", mergedArray);
}
{
    let numbers = [1, 2, 3, 5];
    let n = 5;
    let total = (n * (n + 1)) / 2;
    let sum = 0;
    for (let num of numbers) {
        sum = sum + num;
    }
    let missing = total - sum;
    console.log("Missing Number:", missing);
}
{
    let numbers = [1, 2, 3, 4, 5];
    let n = 2;
    let rotated = [
        ...numbers.slice(n),
        ...numbers.slice(0, n)
    ];
    console.log("Rotated Array:", rotated);
}
{
    let numbers = [1, 2, 2, 3, 3, 3];
    let count = {};
    for (let num of numbers) {
        if (count[num]) {
            count[num]++;
        }
        else {
            count[num] = 1;
        }
    }
    console.log("Occurrences:", count);
}
{
    let numbers = [1, 2, 3, 2, 4, 3, 5];
    let duplicates = [];
    for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                if (!duplicates.includes(numbers[i])) {
                    duplicates.push(numbers[i]);
                }
            }
        }
    }
    console.log("Duplicate Elements:", duplicates);
}
{
    class Student {
        name;
        age;
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        display() {
            console.log("Name:", this.name);
            console.log("Age:", this.age);
        }
    }
    let student1 = new Student("Tanuja", 20);
    student1.display();
}
{
    class BankAccount {
        balance;
        constructor(balance) {
            this.balance = balance;
        }
        deposit(amount) {
            this.balance = this.balance + amount;
        }
        withdraw(amount) {
            this.balance = this.balance - amount;
        }
        displayBalance() {
            console.log("Balance:", this.balance);
        }
    }
    let account = new BankAccount(1000);
    account.deposit(500);
    account.withdraw(200);
    account.displayBalance();
}
{
    class Employee {
        name;
        salary;
        department;
        constructor(name, salary, department) {
            this.name = name;
            this.salary = salary;
            this.department = department;
        }
        display() {
            console.log("Name:", this.name);
            console.log("Salary:", this.salary);
            console.log("Department:", this.department);
        }
    }
    let employee1 = new Employee("Tanuja", 300000, "IT");
    employee1.display();
    console.log("Public Name:", employee1.name);
}
{
    class Student {
        studentId;
        name;
        constructor(studentId, name) {
            this.studentId = studentId;
            this.name = name;
        }
        display() {
            console.log("Student ID:", this.studentId);
            console.log("Name:", this.name);
        }
    }
    let student1 = new Student(101, "Tanuja");
    student1.display();
}
{
    class College {
        static collegeName = "ABC College";
        static display() {
            console.log("Welcome to", College.collegeName);
        }
    }
    console.log("College:", College.collegeName);
    College.display();
}
var MathOperations;
(function (MathOperations) {
    function add(a, b) {
        return a + b;
    }
    MathOperations.add = add;
    function subtract(a, b) {
        return a - b;
    }
    MathOperations.subtract = subtract;
    function multiply(a, b) {
        return a * b;
    }
    MathOperations.multiply = multiply;
    function divide(a, b) {
        return a / b;
    }
    MathOperations.divide = divide;
})(MathOperations || (MathOperations = {}));
console.log("Addition:", MathOperations.add(10, 5));
console.log("Subtraction:", MathOperations.subtract(10, 5));
console.log("Multiplication:", MathOperations.multiply(10, 5));
console.log("Division:", MathOperations.divide(10, 5));
