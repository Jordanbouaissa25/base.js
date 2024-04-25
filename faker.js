const { faker } = require("@faker-js/faker/locale/fr");

var peoples = [
  {
    firstName: "Edouard",
    lastName: "Luc",
  },
];

for (var i = 0; i < 25; i++) {
  //var sex_peoples = faker.person.Sex()
  var firstName = faker.person.firstName("male");
  var lastName = faker.person.lastName("male");
  peoples.push({
    firstName: faker.person.firstName("male"),
    lastName: lastName,
    email: faker.internet.email({ firstName: firstName, lastName: lastName }),
  });
}

console.log(peoples);
