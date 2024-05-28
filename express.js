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

function checkKeysRequiredIsNotEmpty(obj) {
  var fieldEmpty = [];
  var key_obj = Object.keys(obj);
  for (var i = 0; i < fieldRequired.length; i++) {
    if (key_obj.indexOf(fieldRequired[i]) && !obj[fieldRequired[i]]) {
      fieldEmpty.push(fieldRequired[i]);
    }
  }
  return fieldEmpty;
}

app.put("/user/:id", (req, res) => {
  var id = req.params.id;
  var user_body = req.body;
  var user_to_edit = {};
  for (var i = 0; i < fieldAuthorized.length; i++) {
    if (_.has(user_body, fieldAuthorized[i]))
      user_to_edit[fieldAuthorized[i]] = user_body[fieldAuthorized[i]];
  }
  var field_require_empty = checkKeysRequiredIsNotEmpty(user_to_edit);
  var user_to_edit_index = _.findIndex(users, ["id", String(id)]);
  if (user_to_edit_index > -1 && field_require_empty.length == 0) {
    users[user_to_edit_index] = {
      ...users[user_to_edit_index],
      ...user_to_edit,
    };
    res.send(users[user_to_edit_index]);
  } else if (user_to_edit_index == -1) {
    res.statusCode = 404;
    res.send({ msg: "User not found." });
  } else {
    res.statusCode = 405;
    res.send({
      msg: `Les champs requis (${field_require_empty.join(
        ", "
      )}) sont vides, impossible d'éffectué la modification.`,
      field_require_empty: field_require_empty,
    });
  }
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

function middlewareBodyIsArray(req, res, next) {
  var users_to_add = req.body;
  if (_.isArray(users_to_add)) {
    next();
  }
}

app.post("/users", function (req, res) {
  var users_to_add = req.body;
  var error_element = [];
  for (var i = 0; i < users_to_add.length; i++) {
    var user = users_to_add[i];
    var fieldNotAuthorized = checkKeys(user);
    var fieldNoRequiredNotMissing = checkObjRequiredKey(user);
    var text = `L'element à la position ${i} :`;
    if (fieldNotAuthorized.length > 0) {
      text += `Une des propriétés (${fieldNotAuthorized.join(
        ", "
      )}) n'est pas autorisé. `;
    }
    if (fieldNoRequiredNotMissing.length > 0) {
      text += `Une des propriétés (${fieldNoRequiredNotMissing
        .map((e) => {
          return e.field + " : " + e.type_error;
        })
        .join(", ")}) requis n'est pas completé .`;
    }
    if (fieldNotAuthorized.length > 0 || fieldNoRequiredNotMissing.length > 0)
      error_element.push({
        msg: text,
        index: i,
        field_not_authorized: fieldNotAuthorized,
        field_require_missing: fieldNoRequiredNotMissing,
      });
  }
  if (error_element.length > 0) {
    res.statusCode = 405;
    res.send(error_element);
  } else {
    users_to_add = _.map(users_to_add, (e) => {
      e.id = _.uniqueId();
      return e;
    });
    users = [...users, ...users_to_add];
    res.send(users_to_add);
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
