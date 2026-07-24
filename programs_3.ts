
{
    let array1: number[] = [1, 2, 3];
    let array2: number[] = [4, 5, 6];

    let mergedArray: number[] = [...array1, ...array2];

    console.log("Merged Array:", mergedArray);
}
{
    let numbers: number[] = [1, 2, 3, 5];
    let n: number = 5;
    let total: number = (n * (n + 1)) / 2;
    let sum: number = 0;
    for (let num of numbers) {
        sum = sum + num;
    }
    let missing: number = total - sum;
    console.log("Missing Number:", missing);
}
{
    let numbers: number[] = [1, 2, 3, 4, 5];
    let n: number = 2;
    let rotated: number[] = [
        ...numbers.slice(n),
        ...numbers.slice(0, n)
    ];
    console.log("Rotated Array:", rotated);
}
{
    let numbers: number[] = [1, 2, 2, 3, 3, 3];

    let count: { [key: number]: number } = {};

    for (let num of numbers) {
        if (count[num]) {
            count[num]++;
        } else {
            count[num] = 1;
        }
    }

    console.log("Occurrences:", count);
}
{
    let numbers: number[] = [1, 2, 3, 2, 4, 3, 5];
    let duplicates: number[] = [];
     for (let i = 0; i < numbers.length; i++) {
        for (let j = i + 1; j < numbers.length; j++) {
            if (numbers[i] === numbers[j]) {
                if (!duplicates.includes(numbers[i])) {
                    duplicates.push(numbers[i]);
                }

            }
        }
    }
    console.log("Duplicate Elements:", duplicates);
}
{
    class Student {
        name: string;
        age: number;
        constructor(name: string, age: number) {
            this.name = name;
            this.age = age;
        }
        display(): void {
            console.log("Name:", this.name);
            console.log("Age:", this.age);
        }
    }
    let student1 = new Student("Tanuja", 20);
    student1.display();
}
{
    class BankAccount {
        balance: number;
        constructor(balance: number) {
            this.balance = balance;
        }
        deposit(amount: number): void {
            this.balance = this.balance + amount;
        }
        withdraw(amount: number): void {
            this.balance = this.balance - amount;
        }
        displayBalance(): void {
            console.log("Balance:", this.balance);
        }
    }
    let account = new BankAccount(1000);
    account.deposit(500);
    account.withdraw(200);
    account.displayBalance();
}
{
    class Employee {
        public name: string;
        private salary: number;
        protected department: string;
        constructor(
            name: string,
            salary: number,
            department: string
        ) {
            this.name = name;
            this.salary = salary;
            this.department = department;
        }
        display(): void {
            console.log("Name:", this.name);
            console.log("Salary:", this.salary);
            console.log("Department:", this.department);
        }
    }
    let employee1 = new Employee(
        "Tanuja",
        300000,
        "IT"
    );
    employee1.display();
    console.log("Public Name:", employee1.name);
}
{
    class Student {
        readonly studentId: number;
        name: string;
        constructor(
            studentId: number,
            name: string
        ) {
            this.studentId = studentId;
            this.name = name;
        }
        display(): void {
            console.log("Student ID:", this.studentId);
            console.log("Name:", this.name);
        }
    }
    let student1 = new Student(101, "Tanuja");
    student1.display();
}
{
    class College {
        static collegeName: string = "ABC College";
        static display(): void {
            console.log(
                "Welcome to",
                College.collegeName
            );
        }
    }
    console.log(
        "College:",
        College.collegeName
    );
    College.display();
}

    namespace MathOperations {
        export function add(
            a: number,
            b: number
        ): number {
            return a + b;
        }
        export function subtract(
            a: number,
            b: number
        ): number {
            return a - b;
        }
        export function multiply(
            a: number,
            b: number
        ): number {
            return a * b;
        }
        export function divide(
            a: number,
            b: number
        ): number {
            return a / b;
        }
    }
    console.log(
        "Addition:",
        MathOperations.add(10, 5)
    );
    console.log(
        "Subtraction:",
        MathOperations.subtract(10, 5)
    );
    console.log(
        "Multiplication:",
        MathOperations.multiply(10, 5)
    );
    console.log(
        "Division:",
        MathOperations.divide(10, 5)
    );
