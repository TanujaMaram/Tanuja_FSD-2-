
function displayLength<T extends { length: number }>(value: T): number {
    return value.length;
}
let nameLength = displayLength<string>("Tanuja");
let numberLength = displayLength<number[]>([10, 20, 30]);
console.log("Length of Name:", nameLength);
console.log("Length of Array:", numberLength);