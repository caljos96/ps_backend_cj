// import library
const express = require("express");

//create express app
const app = express();

//setting : middleware
app.use(express.json()); //body-parser;

//database
const users = [{ id: 1, name: "calvin", gender: "male" }];

//create routing
app.get("/", (req, res) => {
  res.status(200).send(`<h1>Hello World</h1>`);
});

// GET : Users
app.get("/users", (req, res) => {
  res.status(200).send(users);
});

//Post : Users
app.post("/users", (req, res) => {
  console.log("req.body : ", req.body);

  users.push(req.body);
  console.log("users : ", users);

  res.status(200).send("POST Success");
});

//running server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`server is running at port : ${PORT}`));
