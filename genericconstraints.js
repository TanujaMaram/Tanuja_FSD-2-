"use strict";
function displayLength(value) {
    return value.length;
}
let nameLength = displayLength("Tanuja");
let numberLength = displayLength([10, 20, 30]);
console.log("Length of Name:", nameLength);
console.log("Length of Array:", numberLength);
