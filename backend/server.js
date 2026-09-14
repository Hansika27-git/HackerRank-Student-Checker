const express = require("express");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();

app.use(cors());
const client = new MongoClient("mongodb://127.0.0.1:27017");

let students; 

async function startServer(){
    await client.connect();
    console.log("connected to MongoDB");
    const db=client.db("hackerrank");
    students=db.collection("students");

}


app.get("/", (req, res) => {
    res.send("HackerRank Student Checker Backend is running!");
});

app.get("/api/student/:username", async (req, res) => {

    let username = req.params.username;

    const student = await students.findOne({
        username: username
    });
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
startServer().catch(console.error)