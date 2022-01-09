// import library
const express = require("express");

//create express app
const app = express();

//setting : middleware
// app.use(express.json()); //body-parser;

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
app.post("/users", express.json(), (req, res) => {
  console.log("req.body : ", req.body);

  const newUser = {
    id: users.length + 1,
    name: req.body.name,
    gender: req.body.gender,
  };
  users.push(newUser);

  res.status(200).send(users);
});

//Delete : Users
app.delete("/users/:id", (req, res) => {
  console.log(req.params);
  const id = Number(req.params.id);

  //search index user with given id
  let index = null;
  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      index = i;
      break;
    }
  }

  //error handling
  if (index === null) {
    res.status(404).send(`user with id : ${id} is not found`);
  }

  //delete user at index user with given id
  users.splice(index, 1);

  res.status(200).send(users);
});

//running server
const PORT = process.env.PORT || 2000;
app.listen(PORT, () => console.log(`server is running at port : ${PORT}`));
