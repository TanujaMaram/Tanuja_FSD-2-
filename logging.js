const express = require("express");
const app = express();
const PORT = 3000;
// --- MIDDLEWARE ---
app.use(express.json());
// 1. REQUEST LOGGER
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});
// 2. CUSTOM SECURITY MIDDLEWARE
app.use((req, res, next) => {
    const userAgent = req.get("User-Agent");
    if (!userAgent) {
        return res.status(400).json({
            error: "Browser identification missing"
        });
    }
    next();
});
// --- MOCK DATABASE ---
let tasks = [
    { id: 1, title: "Learn Express" },
    { id: 2, title: "Master REST APIs" }
];
// 3. GET - Read all tasks
app.get("/tasks", (req, res) => {
    res.json(tasks);
});
// 4. GET - Read one task using dynamic URL
app.get("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (task) {
        res.json(task);
    } else {
        res.status(404).json({
            error: "Task not found"
        });
    }
});
// 5. POST - Create a new task
app.post("/tasks", (req, res) => {
    const newTask = {
        id: req.body.id || tasks.length + 1,
        title: req.body.title
    };
    tasks.push(newTask);
    res.status(201).json(newTask);
});
// 6. PUT - Update a task using dynamic URL
app.put("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.title = req.body.title;
        res.json(task);
    } else {
        res.status(404).json({
            error: "Task not found"
        });
    }
});
// 7. DELETE - Delete a task using dynamic URL
app.delete("/tasks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const taskIndex = tasks.findIndex(t => t.id === id);
    if (taskIndex !== -1) {
        const deletedTask = tasks.splice(taskIndex, 1);
        res.json({
            message: "Task deleted successfully",
            task: deletedTask[0]
        });
    } else {
        res.status(404).json({
            error: "Task not found"
        });
    }
});
// --- START SERVER ---
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});