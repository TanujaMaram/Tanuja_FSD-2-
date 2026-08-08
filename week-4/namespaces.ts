namespace StudentManagement {
    const passingMarks = 40;
    export function checkResult(marks: number): string {
        if (marks >= passingMarks) {
            return "Pass";
        } else {
            return "Fail";
        }
    }
    export function calculatePercentage(
        marks1: number,
        marks2: number,
        marks3: number
    ): number {
        return ((marks1 + marks2 + marks3) / 300) * 100;
    }
    export namespace Student {
        export function getGrade(percentage: number): string {
            if (percentage >= 80) {
                return "A";
            } else if (percentage >= 60) {
                return "B";
            } else if (percentage >= 40) {
                return "C";
            } else {
                return "F";
            }
        }
    }
}

const result = StudentManagement.checkResult(75);
const percentage = StudentManagement.calculatePercentage(
    75,
    80,
    70
);
const grade = StudentManagement.Student.getGrade(percentage);
console.log("Result:", result);
console.log("Percentage:", percentage + "%");
console.log("Grade:", grade);
