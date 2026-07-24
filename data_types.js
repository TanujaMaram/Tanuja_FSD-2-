"use strict";
let StudentName = "Tanuja";
let age = 19;
let isStudent = true;
console.log(StudentName);
console.log(age);
console.log(isStudent);
let data = "Hello";
let value = 100;
function greet() {
    console.log("Hello, World!");
}
greet();
let bookTitle = "The Alchemist";
let publishedYear = 1988;
let isAvailable = true;
function getBookInfo(title, year) {
    return `${title} was published in ${year}.`;
}
let bookData = "The Alchemist";
let unknownData = "Book Information";
function showMessage() {
    console.log("This is a TypeScript program.");
}
console.log("Book Title:", bookTitle);
console.log("Published Year:", publishedYear);
console.log("Available:", isAvailable);
console.log("Book Info:", getBookInfo(bookTitle, publishedYear));
console.log("Any Data:", bookData);
console.log("Unknown Data:", unknownData);
showMessage();
