
class Student {
    name: string;
    age: number;

    // Constructor
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    display(): void {
        console.log("Name:", this.name);
        console.log("Age:", this.age);
    }
}
let student1 = new Student("Tanuja", 19);
student1.display();