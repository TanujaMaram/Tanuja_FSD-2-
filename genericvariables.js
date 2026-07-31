"use strict";
// Generic class
class Box {
    value;
    constructor(value) {
        this.value = value;
    }
    getValue() {
        return this.value;
    }
}
let numberBox = new Box(100);
let stringBox = new Box("Hello TypeScript");
console.log("Number:", numberBox.getValue());
console.log("String:", stringBox.getValue());
