const { faker } = require("@faker-js/faker");
const { _, uniqueId, first } = require("lodash");

const express = require("express");
const app = express();
const port = 3000;

const bodyParser = require("body-parser");

const { v4: uuidv4 } = require("uuid");

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

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.get("/users", function (req, res) {
  res.send(users);
});

var fieldAuthorized = ["firstName", "lastName", "email", "username"];
var fieldRequired = ["firstName", "lastName", "username"];

function checkKeys(obj) {
  var tab = Object.keys(obj);
  var tab_res = [];
  for (var i = 0; i < tab.length; i++) {
    if (fieldAuthorized.indexOf(tab[i]) == -1) tab_res.push(tab[i]);
  }
  return tab_res;
  // return _.filter(tab, function(e)  { return fieldAuthorized.indexOf(e) == -1 })
  /* for (var i = 0; i < tab.length; i++) {
        if (String(tab[i]) !== "firstName" && String(tab[i]) !== "lastName" && String(tab[i]) !== "email" && String(tab[i]) !== "username") {
            console.log(tab[i])
            return false
        }
    }
    return true */
}
function checkObjRequiredKey(obj) {
  var tab = Object.keys(obj);
  var tab_res = [];
  for (var i = 0; i < fieldRequired.length; i++) {
    if (tab.indexOf(fieldRequired[i]) == -1)
      tab_res.push({ field: fieldRequired[i], type_error: "Not found" });
    else if (!obj[fieldRequired[i]]) {
      tab_res.push({ field: fieldRequired[i], type_error: "Found but empty" });
    }
  }
  return tab_res;
}

app.get("/user/:id", (req, res) => {
  const { id } = req.params.id;
  var user = _.find(users, ["id", String(id)]);
  if (user && id) {
    res.send(user);
  } else if (!id) {
    res.statusCode = 405;
    res.send({ msg: "Argument non valide." });
  } else {
    res.statusCode = 404;
    res.send({ msg: "Utilisateur not found." });
  }
});

app.put("/user/:id", (req, res) => {
  var id = req.params.id;
});

app.post("/user", function (req, res) {
  var user = req.body;
  var fieldNotAuthorized = checkKeys(user);
  var fieldNoRequiredNotMissing = checkObjRequiredKey(user);
  if (fieldNotAuthorized.length == 0 && fieldNoRequiredNotMissing.length == 0) {
    user.id = _.uniqueId();
    users.push(user);
    res.send(user);
  } else {
    res.statusCode = 405;
    var text = "";
    if (fieldNotAuthorized.length > 0) {
      text += `Une des propriétés (${fieldNotAuthorized.join(
        " "
      )}) n'est pas autorisé. `;
    }
    if (fieldNoRequiredNotMissing.length > 0) {
      text += `Une des propriétés (${fieldNoRequiredNotMissing
        .map((e) => {
          return e.field + " : " + e.type_error;
        })
        .join(", ")}) requis n'est pas completé. `;
    }
    res.send({
      msg: text,
      field_not_authorized: fieldNotAuthorized,
      field_require_missing: fieldNoRequiredNotMissing,
    });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

// app.get("/user/:id/docs", (req, res) => {
//   const { id } = req.params;
//   res.send(id);
// });

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });
