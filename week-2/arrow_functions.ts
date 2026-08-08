function add(a: number, b: number): number {
    return a + b;
}
const multiply = (a: number, b: number): number => {
    return a * b;
};
const square = (num: number): number => num * num;
console.log("Traditional Function:", add(10, 20));
console.log("Arrow Function:", multiply(5, 4));
console.log("Shorthand Arrow Function:", square(5));