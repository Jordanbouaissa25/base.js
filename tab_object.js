const _ = require("lodash");
const { faker } = require("@faker-js/faker/locale/fr");

var peoples = [
  //   {
  //     firstName: [],
  //     lastName: [],
  //     gender: [],
  //     age: [],
  //   },
];

var min = 18; // nombre minimum
var max = 65; // nombre maximum

function getRandomInt(min, max) {
  min = Math.round(18);
  max = Math.round(65);
  return Math.round(Math.random() * (max - min)) + min;
}

// function getRandomInt(min, max) {
//   return Math.random() * (max - min) + min;
// }

for (var i = 0; i < 25; i++) {
  var sex_peoples = faker.person.sexType();
  var firstName = faker.person.firstName(sex_peoples);
  var lastName = faker.person.lastName(sex_peoples);
  var age = Math.floor(Math.random() * (max - min) + min);
  max;
  peoples.push({
    firstName: firstName,
    lastName: lastName,
    age: age,
    gender: sex_peoples,
    id: _.uniqueId(),
  });
}

// console.log(peoples);

const adults = peoples.filter((person) => person.age > 45); // filtrer l'âge supérieur à 45ans
const homme = peoples.filter((person) => person.gender === "male"); // filtrer un tableau avec que des hommes
const femme = peoples.filter((person) => person.gender === "female"); // filtrer un tableau avec que des femmes

print(adults, "Plus de 45ans");
print(homme, "homme");
print(femme, "femme");

function print(tableau, titre) {
  console.log(titre); // Afficher plus de 45ans
  // console.log(adults);

  for (i = 0; i < tableau.length; i++) {
    // Tant que i n'est pas inférieur à la taille du tableau adulte il affiche le nom de la personne son genre et son âge
    console.log(
      `nom : ${tableau[i].lastName} / prénom : ${
        tableau[i].firstName
      } / gender: ${
        tableau[i].gender === "male" ? "Homme" : "Femme" // Si le genre du personne de l'emplacement i du tableau de l'adulte est male il affiche homme sinon femme
      } age: ${tableau[i].age}`
    );
  }
}

let tableaufinal = [];
for (let i = 0; i < peoples.length; i) {
  // i tant que inférieur à la taille du tableau
  let tableauint = []; // déclare un tableau vide
  for (let y = 0; y < 5; y++) {
    // tant que y est inférieur à 5
    tableauint.push(peoples[i]); // ajouter la personne à l'emplace i dans le tableau peoples, du coup dans le tableau int
    i++; // T'incrémente i pour passer à la personne suivante dans le tableau peoples
  }
  tableaufinal.push(tableauint); // ajout tableau de 5 dans le tableau final
}

console.log(tableaufinal); // Affichage du tableau final

//console.log(gender);

// console.log(femme);
// console.log(adults);
// console.log(peoples);

// var people_transformer = [];
// function transformPeople(gender, tab) {
//   var transformedPerson = { ...person };
//   // var children = tab.Filter(p => p.parent === person._id)
//   var children = [];
//   for (var i = 0; i < tab.length; i++) {
//     if (tab[i].parent === person._id) {
//       children.push(tab[i]);
//     }
//   }
//   if (children.length > 0) {
//     transformedPerson.children = [];
//     for (var i = 0; i < children.length; i++) {
//       transformedPerson.children.push(transformPeople(children[i], tab));
//     }
//     // transformedPerson.children = children.map(child => {
//     //   return transformPeople(child)
//     // })
//   }
//   return transformedPerson;
// }
