const express = require("express");
const app = express();
const PORT = 3000;
// 1. HOME ROUTE
app.get("/", (req, res) => {
    res.send("Welcome to Dynamic URL Example!");
});
// 2. ROUTE PARAMETER
app.get("/student/:id", (req, res) => {
    const studentId = req.params.id;
    res.send(`Student ID is: ${studentId}`);
});
// 3. MULTIPLE ROUTE PARAMETERS
app.get("/student/:id/:name", (req, res) => {
    const studentId = req.params.id;
    const studentName = req.params.name;
    res.send(`Student ID: ${studentId}, Student Name: ${studentName}`);
});
// 4. QUERY PARAMETERS
app.get("/search", (req, res) => {
    const name = req.query.name;
    const age = req.query.age;
    res.send(`Name: ${name}, Age: ${age}`);
});
// 5. QUERY PARAMETER WITH JSON RESPONSE
app.get("/api/user", (req, res) => {
    const name = req.query.name;
    const city = req.query.city;
    res.json({
        name: name,
        city: city
    });
});
// 6. START SERVER
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});