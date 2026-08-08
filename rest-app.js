const express = require("express");
const app = express();
const PORT = 3000;
app.use(express.json());
// 1. GET - Send JSON
app.get("/students", (req, res) => {
    res.json({
        message: "Student details",
        id: 101,
        name: "Tanuja",
        course: "AI&DS"
    });
});
app.get("/students/:id", (req, res) => {
    const studentId = req.params.id;
    res.json({
        message: "Student found",
        id: studentId,
        name: "Tanuja",
        course: "AI&DS"
    });
});
app.post("/students", (req, res) => {
    const student = req.body;
    res.json({
        message: "Student added successfully",
        student: student
    });
});
// 4. PUT - Update JSON using dynamic URL
app.put("/students/:id", (req, res) => {
    const studentId = req.params.id;
    const student = req.body;
    res.json({
        message: "Student updated successfully",
        id: studentId,
        student: student
    });
});
// 5. DELETE - Delete using dynamic URL
app.delete("/students/:id", (req, res) => {
    const studentId = req.params.id;
    res.json({
        message: "Student deleted successfully",
        id: studentId
    });
});
// Start server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});