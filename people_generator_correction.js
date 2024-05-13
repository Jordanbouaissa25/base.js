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
    age: _.random(age_min, age_max),
    gender: faker.person.sexType,
  };

  var sex_index = _.random(0, 1);
  if (sexType === 1) {
    console.log("male");
  } else {
    console.log("female");
  }
  tab.push(obj);
}
// console.log(tab);
