const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

//app config
const app = express();

//middleware
app.use(bodyParser.json());

//database
const url = `mongodb+srv://ak6706072:ux9acavqz2@cluster0.pcdlw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
mongoose
  .connect(url, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    //listner
    console.log("database connected successfully");
    app.listen(4000, () => {
      console.log("server running on 4000");
    });
  })
  .catch(() => {
    console.log("database not connected successfully");
  });
