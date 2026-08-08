class Student {
    readonly college: string = "Shri Vishnu Engineering College for Women";
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    static welcome(): void {
        console.log("Welcome to the Student Class");
    }
    display(): void {
        console.log("Name:", this.name);
        console.log("College:", this.college);
    }
}
Student.welcome();
let student1 = new Student("Tanuja");
student1.display();
console.log("College:", student1.college);