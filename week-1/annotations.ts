let studentName: string = "Tanuja";
let age: number = 20;
let isPassed: boolean = true;
function getStudentDetails(name: string, age: number): string {
    return `${name} is ${age} years old.`;
}
let subjects: string[] = [
    "Java",
    "Python",
    "JavaScript",
    "Database"
];
const details: string = getStudentDetails(studentName, age);
console.log(details);
console.log("Subjects:", subjects.join(", "));
console.log(
    "Passed?",
    isPassed ? "Yes" : "No"
);