import express from "express";
import "./db.js";
import stdModel from "./studentModel.js"

var app = express();
app.use(express.json());
app.get("/a", (req, res) => {
    res.send("Hello from Server upper");
});
app.post("/", async (req, res) => {
    try {
        await stdModel(req.body).save();
        res.send("Student Data Added");
    } catch (error) {
        console.log(error);
    }
});
var port = 3000

app.listen(port, () => {
    console.log(`Server is running in ${port}`);
});