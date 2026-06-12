// 1. install mongoose => npm i mongoose
// import mongoose

import mongoose from "mongoose";

// mongoose.connect("url").then(() => {}).catch(() => {})

mongoose
  .connect(
    "mongodb://mizpam54_db_user:DW7bqHtYMj5AnDXc@ac-ufhz2we-shard-00-00.572qnho.mongodb.net:27017,ac-ufhz2we-shard-00-01.572qnho.mongodb.net:27017,ac-ufhz2we-shard-00-02.572qnho.mongodb.net:27017/?ssl=true&replicaSet=atlas-64pwkq-shard-0&authSource=admin&appName=Cluster0"
  )
  .then(() => {
    console.log("Db connected");
  })
  .catch((err) => {
    console.log(err);
  });