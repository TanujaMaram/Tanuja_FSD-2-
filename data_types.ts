let StudentName: string = "Tanuja";
let age: number = 19;
let isStudent: boolean = true;
console.log(StudentName);
console.log(age);
console.log(isStudent);
let data: any = "Hello";
let value: unknown = 100;
function greet(): void {
    console.log("Hello, World!");
}
greet();
let bookTitle: string = "The Alchemist";
let publishedYear: number = 1988;
let isAvailable: boolean = true;
function getBookInfo(title: string, year: number): string {
    return `${title} was published in ${year}.`;
}
let bookData: any = "The Alchemist";
let unknownData: unknown = "Book Information";
function showMessage(): void {
    console.log("This is a TypeScript program.");
}

console.log("Book Title:", bookTitle);
console.log("Published Year:", publishedYear);
console.log("Available:", isAvailable);
console.log("Book Info:", getBookInfo(bookTitle, publishedYear));
console.log("Any Data:", bookData);
console.log("Unknown Data:", unknownData);
showMessage();

