// 1. IMPORTING EXPRESS
const express = require("express");
// 2. INITIALIZING THE APP
const app = express();
// 3. SETTING THE PORT
const PORT = 3000;
// Handles: http://localhost:3000/
app.get("/", (req, res) => {
    res.send("Welcome to my Express Server!");
});
// 5. ABOUT ROUTE
app.get("/about", (req, res) => {
    res.send("This server was built as a learning exercise for Express.js.");
});
// 6. JSON / API ROUTE
app.get("/api/status", (req, res) => {
    res.json({
        active: true,
        version: "1.0.0",
        message: "The server is healthy and responding!"
    });
});
// 7. STARTING THE SERVER
app.listen(PORT, () => {
    console.log(`Success! Server is running at http://localhost:${PORT}`);
    console.log("Press Ctrl+C to stop the server.");
});