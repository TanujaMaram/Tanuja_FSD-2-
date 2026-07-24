
class Student {
    public name: string;
    private age: number;
    protected course: string;
    constructor(name: string, age: number, course: string) {
        this.name = name;
        this.age = age;
        this.course = course;
    }
    display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
        console.log("Course:", this.course);
    }
}
let student1 = new Student("Tanuja", 19, "TypeScript");
student1.display();
console.log(student1.name);