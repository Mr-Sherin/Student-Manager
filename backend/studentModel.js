import mongoose from "mongoose";
var studentSchema = mongoose.Schema({
    sname : String,
    sage : String,
    splace : String
});

var studentModel = mongoose.model("people", studentSchema, "people");
export default studentModel;