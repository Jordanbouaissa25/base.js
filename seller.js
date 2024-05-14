const { faker } = require("@faker-js/faker");
const _ = require("lodash");

var number_elements = 10;
var price_min = 5;
var price_max = 1300;
var tva_min = 5;
var tva_max = 20;
var quantity_min = 1;
var quantity_max = 100;
var tva_interval = 10;
var articles = [];

for (var i = 0; i < number_elements; i++) {
  articles.push({
    name: faker.commerce.product(),
    category: faker.commerce.department(),
    price_unit_ttc: Number(_.random(price_min, price_max, true).toFixed(2)),
    tva: _.random(tva_min, tva_max),
    quantity: _.random(quantity_min, quantity_max),
    date: faker.date.birthdate({ min: 2020, max: 2023, mode: "year" }),
    siteweb: faker.internet.url({ protocol: "http", appendSlash: false }),
  });
}

function arrondir(number) {
  return Math.round(number * 100) / 100;
}

//console.log(articles)

// Creer une nouvelle propriété "price_unit_ht", "price_total_ht" et "price_total_ttc"
articles = articles.map(function (e) {
  var price_ht = arrondir(e.price_unit_ttc * (1 - e.tva / 100));
  return {
    ...e,
    price_unit_ht: price_ht,
    price_total_ttc: arrondir(e.price_unit_ttc * e.quantity),
    price_total_ht: arrondir(price_ht * e.quantity),
    // id: _.uniqueId(),
  };
});

//console.log(articles)

var more_tva_interval = articles.filter(function (e) {
  return e.tva > 7 && e.tva < 13;
});

var for_tva_more_interval = [];

for (var i = 0; i < articles.length; i++) {
  if (articles[i].tva > 7 && articles[i].tva < 13) {
    for_tva_more_interval.push(articles[i]);
  }
}

// console.log(for_tva_more_interval);

let plus10000 = [];

plus10000 = articles.filter((articles) => articles.price_total_ttc > 10000);

// console.log(plus10000);

let quantityplusde50 = [];

quantityplusde50 = articles.filter((articles) => articles.quantity > 50);

// console.log(quantityplusde50);

articles = articles.map(function (e) {
  return { ...e, id: _.uniqueId() };
});

// console.log(articles);

var number_users = 25;
var users = [];

for (var i = 0; i < number_users; i++) {
  let firstName = faker.person.firstName();
  let lastName = faker.person.lastName();
  users.push({
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

// console.log(users);

let number_article_min = 0;
let number_article_max = 10;
let updatedArticles = [];
// let article = [];

// Générer des utilisateurs avec des articles aléatoires
let usersWithArticles = users.map((user) => {
  let numArticles = (number_article_min, number_article_max);
  let userArticles = new Set(); // Utiliser un ensemble pour stocker les articles uniques

  // Générer des identifiants d'articles uniques
  while (userArticles.size < numArticles) {
    let randomArticleId = _.sample(
      updatedArticles.map((article) => article.id)
    ); // Sélectionner un identifiant d'article aléatoire
    userArticles.add(randomArticleId);
  }

  return {
    ...user,
    articles: Array.from(userArticles),
  };
});

// Afficher les utilisateurs avec leurs articles
usersWithArticles.forEach((user) => {
  console.log(
    `Utilisateur: ${user.username}, Articles: ${user.articles.join(", ")}`
  );
});
