const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

// mongoose.connect(URL, {
//     useCreateIndex: true,
//     useNewUrlParser: true,
//     useUnifiedRopologyL: true,
//     useFindAndModify: false
// });

mongoose.connect(URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true 
    }, err => {
    if(err) throw err;
    console.log('Connected to MongoDB!!!')
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongo connection is successful!");
})

// mongoose.connect(URL).then(() => {
//     console.log("Connected to Database");
// }).catch((err) => {
//     console.log("Not Connected to Database ERROR! ", err);
// });

app.listen(PORT, () => {
    console.log('Server is up and on port number: ' + PORT)
})