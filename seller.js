const { faker } = require("@faker-js/faker");
const _ = require("lodash");

var number_elements = 100;
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

articles = articles.map(function (e) {
  return { ...e, id: _.uniqueId() };
});

//console.log(articles)

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

let number_max_articles = 10;
let tmp_articles = [...articles];
users = users.map(function (e) {
  let limit = number_max_articles;
  if (limit > tmp_articles.length) {
    limit = tmp_articles.length;
  }
  let random_id_number = _.random(0, limit);
  if (random_id_number > 0 && tmp_articles.length > 0) {
    var id_to_users = [];
    for (var i = 0; i < random_id_number; i++) {
      var index_to_take = _.random(0, tmp_articles.length - 1);
      id_to_users.push(tmp_articles[index_to_take].id);
      tmp_articles.splice(index_to_take, 1);
    }
    return { ...e, articles: id_to_users };
  } else {
    return { ...e, articles: [] };
  }
});

//Tableau utilisateur de 25 elements les proriétés sont :
// username - firstName - lastName - email

// Ajouter une propriete aux utilisateurs "articles" [id.articles] un nombre aléatoire
// sans que une un utilisateur est le meme articles qu'un autre

//console.log(articles)
//articles = []

users = users.map(function (e) {
  if (e.articles.length > 0) {
    var depenses = e.articles.map(function (article) {
      var a = _.find(articles, ["id", article]);

      if (a && a["price_total_ttc"]) {
        return a["price_total_ttc"];
      }
      return 0;
    });
    var price_depense = _.sum(depenses);
    e["depenses"] = price_depense;
  }
  return e;
});

//console.log(users)

/* articles = articles.map(function(article) {
    for(var i = 0; i < users.length; i++) {
        var user = users[i]
        if (_.indexOf(user.articles, article.id) > -1) {
            article.user_id = user.id
        }
    }
    return article
}) */

users.forEach(function (user) {
  user.articles.forEach(function (user_article) {
    var index = _.findIndex(articles, ["id", user_article]);
    if (index > -1) {
      articles[index].user_id = user.id;
    }
  });
});

var obj_users = {};

var obj_articles = {};
/* articles.forEach(function (article) {
    //console.log(user.id ,user)
    if (article.user_id) {
        if (!obj_users[article.user_id])
            obj_users[article.user_id] = []
        obj_users[article.user_id].push(article)
    }
}) */

obj_articles = _.groupBy(articles, "user_id");

console.log(
  _.map(Object.keys(obj_articles), (e) => {
    return obj_articles[e].length + "-" + e;
  })
);

var user_id_select = "112";

if (obj_articles[user_id_select]) {
  console.log(
    `L'utilisateur ${user_id_select} à acheté `,
    obj_articles[user_id_select].length,
    "article(s)",
    `(${_.map(obj_articles[user_id_select], "name").join(",")})`
  );
} else {
  console.log(`L'utilisateur ${user_id_select} n'a rien acheté.`);
}

//console.log(articles)
