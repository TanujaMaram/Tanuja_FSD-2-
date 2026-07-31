// Generic class
class Box<T> {
    private value: T;
    constructor(value: T) {
        this.value = value;
    }

    getValue(): T {
        return this.value;
    }
}
let numberBox: Box<number> = new Box<number>(100);
let stringBox: Box<string> = new Box<string>("Hello TypeScript");
console.log("Number:", numberBox.getValue());
console.log("String:", stringBox.getValue());