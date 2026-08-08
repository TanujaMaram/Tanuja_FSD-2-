
function display<T>(value: T): T {
    return value;
}
let num = display<number>(100);
let studentName = display<string>("Tanuja");
let result = display<boolean>(true);
console.log("Number:", num);
console.log("Name:", studentName);
console.log("Result:", result);