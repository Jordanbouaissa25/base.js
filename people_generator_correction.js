const { faker } = require("@faker-js/faker/locale/fr");
const _ = require("lodash");

/* var people = {
    firstName: "Edouard",
    lastName: "Bernier",
    gender: "male",
    age: 25
} */

var nombre_elements = 25;
var age_min = 18;
var age_max = 65;

var tab = [];
for (var i = 0; i < nombre_elements; i++) {
  var obj = {
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    gender: "male",
    age: _.random(age_min, age_max),
  };
  tab.push(obj);
}
console.log(tab);
