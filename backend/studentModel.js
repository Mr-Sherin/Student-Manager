import mongoose from "mongoose";
var studentSchema = mongoose.Schema({
    sname : String,
    sage : String,
    splace : String
});

var studentModel = mongoose.model("student", studentSchema);
export default studentModel;