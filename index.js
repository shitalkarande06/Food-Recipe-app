const express = require("express");
const mongoose = require("mongoose");
const router = require("./router");
const cors = require("cors");
require("dotenv").config();

const app = express();
app.use(cors());

app.use(express.json()); //for parsing request body which contains json data

const port = 4040;
const host = "localhost";
const uri = process.env.DB_URI;

 app.use("/", router);


mongoose.connect(uri, {}, (error) => {
    if(!error) console.log("MongoDB connected");
});

app.listen(port, host, () => {
    console.log("server started");
})



