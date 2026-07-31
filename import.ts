import { Student } from "./Student";
import { getStudent } from "./student_service";
const student: Student = getStudent();
student.display();
