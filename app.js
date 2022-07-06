const express = require("express");
const mongoose = require("mongoose");
const app = express();
const url = "mongodb://localhost/AlienDBex";

mongoose.connect(url, { useNewUrlParser: true });

const con = mongoose.connection;
con.on("open", function () {
  console.log("connected");
});

app.use(express.json());
const appRouter = require("./routers/aliens");
app.use("/aliens", appRouter);
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
