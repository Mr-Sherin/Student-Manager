import express from "express";
import "./db.js";
import studentModel from "./studentModel.js"
import cors from "cors";
var app = express();
app.use(cors());
app.use(express.json());
// api to get all data from the collection
app.get("/", async (req, res) => {
  try {
    var data = await studentModel.find(req.query);
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});


// api to delete data from the collection
app.delete("/:id", async (req, res) => {
  try {
    await studentModel.findByIdAndDelete(req.params.id);
    res.send("data deleted");
  } catch (error) {
    console.log(error);
  }
});

// to update the data from the collection
app.put("/:id", express.json(), async (req, res) => {
  try {
    await studentModel.findByIdAndUpdate(req.params.id, req.body);
    res.send("Data updated")
  } catch (error) {
    console.log(error)
  }
});

// api to add student data to db
app.post("/", express.json(), async (req, res) => {
  try {
    await studentModel(req.body).save();
    res.send("Student Data added");
  } catch (error) {
    console.log(error);
  }
});

var port = 3000

app.listen(port, () => {
    console.log(`Server is running in ${port}`);
});