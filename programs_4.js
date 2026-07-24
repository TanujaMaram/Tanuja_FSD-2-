"use strict";
class Box {
    data;
    constructor(data) {
        this.data = data;
    }
    display() {
        console.log("Data:", this.data);
    }
}
let numberBox = new Box(100);
numberBox.display();
let stringBox = new Box("Hello");
stringBox.display();
let booleanBox = new Box(true);
booleanBox.display();
