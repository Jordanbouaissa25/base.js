const { faker } = require("@faker-js/faker");
const { _ } = require("lodash");

const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

let users = [];
let number_user = 25;

for (var i = 0; i < number_user; i++) {
  let user = {
    id: _.uniqueId(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
  };
  users.push(user);
}

console.log(users);

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/users", function (req, res) {
  res.send("welcome, " + req.body.username);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
