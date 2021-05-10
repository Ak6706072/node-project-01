const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

//app config
const app = express();

//middleware

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
  next();
  res.send("New Hello 1234 World");
});
app.get("/", (req, res, next) => {
  res.send("hello");
});
app.post("/post-anything", (req, res) => {
  const { name, role } = req.body;
  console.log({ name, role });
  res.status(200).json(`The entered data is ${name} and ${role}`);
});

//databas
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
