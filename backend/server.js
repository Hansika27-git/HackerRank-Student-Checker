const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

let students = [
    {
        username: "john123",
        badges: 18,
        problemsSolved: 256,
        skills: [
            {
                name: "Python",
                stars: 5
            },
            {
                name: "Java",
                stars: 3
            },
            {
                name: "SQL",
                stars: 2
            },
            {
                name: "C",
                stars: 5
            }
        ]
    },
    {
        username: "rahul123",
        badges: 25,
        problemsSolved: 400,
        skills: [
            {
                name: "Python",
                stars: 4
            },
            {
                name: "Java",
                stars: 5
            },
            {
                name: "SQL",
                stars: 3
            },
            {
                name: "C",
                stars: 2
            }
        ]
    }
];

app.get("/", (req, res) => {
    res.send("HackerRank Student Checker Backend is running!");
});

app.get("/api/student/:username", (req, res) => {

    let username = req.params.username;

    let student = students.find(
    s => s.username === username
);
if(!student){
    return res.status(404).json({
        message: "Student not found"
    });
}

    res.json(student);
});

app.listen(4000, () => {
    console.log("Server running on http://localhost:4000");
});