const http = require("http");

const { faker } = require("@faker-js/faker");
const _ = require("lodash");

var number_users = 25;
var users = [];

for (var i = 0; i < number_users; i++) {
  let firstName = faker.person.firstName();
  let lastName = faker.person.lastName();
  users.push({
    id: _.uniqueId(),
    username: faker.internet.userName({
      firstName: firstName,
      lastName: lastName,
    }),
    firstName: firstName,
    lastName: lastName,
    email: faker.internet.email({
      firstName: firstName,
      lastName: lastName,
    }),
  });
}

const server = http.createServer(function (req, rest) {
  console.log(req.url);
  if (req.url == "/users") {
    rest.setHeader("Content-Type", "application/json");
    rest.writeHead(200);
    rest.end(JSON.stringify(users));
  } else {
    rest.setHeader("Content-Type", "application/json");
    rest.writeHead(404);
    rest.end('{"error": "url not found"}');
  }
});

server.listen(3000, "localhost", () => {
  console.log(`Server is running on`);
});
