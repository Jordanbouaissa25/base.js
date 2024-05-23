const { faker } = require("@faker-js/faker");

const _ = require("lodash");

let users = [];
let companies = [];
let articles = [];
let number_user = 20;
let number_company = 20;

for (var i = 0; i < number_user; i++) {
  let user = {
    id: _.uniqueId(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    job: "Director",
  };
  users.push(user);
}

// console.log(users);

let users_dup = [...users];
var index_user = _.random(0, users_dup.length - 1);
for (var i = 0; i < number_company; i++) {
  let company = {
    id: _.uniqueId("COMPANY_"),
    name: faker.company.name(),
    sum_account: _.random(1, 10000),
    user_id: users_dup[index_user].id,
  };
  companies.push(company);
  users_dup.splice(index_user, 1);
}

// for (var i = 0; i < companies.length; i++) {
//     let number_article_create = _.random(3, 150)
// }

console.log(index_user);
