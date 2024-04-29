// Combien d'élément à crée ?
// Male ou female ?

const { faker } = require("@faker-js/faker/locale/fr");
const { first } = require("lodash");

var prompt = require("prompt");
//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user: username and email
//

var schema = {
  properties: {
    nb_element: {
      descrtiption: "Combien d'élément à crée ?",
      type: "number",
    },
    type: {
      descrtiption: "Doit-on générer des hommes ?",
      type: "boolean",
    },
  },
};

prompt.get(schema, function (err, result) {
  //
  // Log the results.
  //

  console.log(result["nb_element"]);
  console.log(result["type"]);
  var peoples = [];
  for (var i = 0; i < result["nb_element"]; i++) {
    //var sex_people = faker.person.sex()
    var type = "female";
    if (result["Type"]) type = "male";
    var firstName = faker.person.firstName(type);
    var lastName = faker.person.lastName(type);
    peoples.push({
      firstName,
      lastName,
      email: faker.internet.email({ firstName, lastName }),
    });
  }
  console.log(peoples);
});
