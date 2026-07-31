"use strict";
var StudentManagement;
(function (StudentManagement) {
    const passingMarks = 40;
    function checkResult(marks) {
        if (marks >= passingMarks) {
            return "Pass";
        }
        else {
            return "Fail";
        }
    }
    StudentManagement.checkResult = checkResult;
    function calculatePercentage(marks1, marks2, marks3) {
        return ((marks1 + marks2 + marks3) / 300) * 100;
    }
    StudentManagement.calculatePercentage = calculatePercentage;
    let Student;
    (function (Student) {
        function getGrade(percentage) {
            if (percentage >= 80) {
                return "A";
            }
            else if (percentage >= 60) {
                return "B";
            }
            else if (percentage >= 40) {
                return "C";
            }
            else {
                return "F";
            }
        }
        Student.getGrade = getGrade;
    })(Student = StudentManagement.Student || (StudentManagement.Student = {}));
})(StudentManagement || (StudentManagement = {}));
const result = StudentManagement.checkResult(75);
const percentage = StudentManagement.calculatePercentage(75, 80, 70);
const grade = StudentManagement.Student.getGrade(percentage);
console.log("Result:", result);
console.log("Percentage:", percentage + "%");
console.log("Grade:", grade);
