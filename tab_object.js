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
allocateParents(tableaufinal);
_.flatten(tableaufinal);
console.log(tableaufinal); // Affichage du tableau final

// Fonction pour  allouer des parents à chaque pile

function allocateParents(piles) {
  // Parcours des piles
  for (let i = 1; i < piles.length; i++) {
    let currentPile = piles[i];
    let previousPile = piles[i - 1];

    // Parcours des personnes dans la pile actuelle
    for (let j = 0; j < currentPile.length; j++) {
      let person = currentPile[j];

      // Sélection aléatoire d'un parent dans la pile précédente
      let randomIndex = Math.floor(Math.random() * (previousPile.length - 1));
      let parent = previousPile[randomIndex];
      //Attribution du parent à la personne actuelle
      person.parent = parent.id;
    }
  }
}

let children = [];

// Fonction récursive pour ajouter le nombre d'enfants à chaque élément
function ajouterNbEnfants(personne) {
  personne.nb_children = personne.enfants.length;
  personne.enfants.forEach((enfant) => ajouterNbEnfants(enfant));
}

// Fonction récursive pour créer la propriété 'children' contenant tous les enfants
function creerProprieteChildren(personne) {
  personne.children = personne.enfants;
  personne.enfants.forEach((enfant) => creerProprieteChildren(enfant));
}

// Fonction pour afficher les personnes avec des niveaux différents
function afficherPersonnes(personne, niveau = 0) {
  console.log(" ".repeat(niveau * 2) + personne.nom);
  personne.enfants.forEach((enfant) => afficherPersonnes(enfant, niveau + 1));
}

function recursiveLoopSub(tab, indent, origin) {
  let tabulation = "";

  for (y = 0; y < indent; y++) {
    // Tant que i inférieur à indent
    tabulation += " "; //ajout s'espaces dans tabulation
  }
  for (let i = 0; i < tab.length; i++) {
    // Tant que i inférieur à tab
    // Affichage console de la tabulation, du nom à la position i de tab, du prénom à la position i et de l'origine
    console.log(
      `${tabulation}nom : ${tab[i].lastName} / prénom : ${tab[i].firstName}
      } / origin : ${origin}`
    );
    if (tab[i].children && tab[i].children.length > 0) {
      // Si dans tab à la position i il y a le param enfants et présence d'enfants
      recursiveLoopSub(
        tab[i].children,
        indent + 1,
        origin + `${tab[i].lastName} - `
      ); // appelle de la fontion recursiveLoopSub en donnant tableau enfant + incrémentation indent + nom et prénom du parent
    }
  }
}

recursiveLoopSub(people, 0, "- ");

// // Ajout du nombre d'enfants à chaque personne
// personnes.forEach((personne) => ajouterNbEnfants(personne));

// // Création de la propriété 'children' pour chaque personne
// personnes.forEach((personne) => creerProprieteChildren(personne));

// // Affichage des personnes avec des niveaux différents
// personnes.forEach((personne) => afficherPersonnes(personne));

// function recursiveLoopSub(tableau, indent, origin) {
//   let tabulation = "";

//   for (y = 0; y < indent; y++) {
//     // Tant que i inférieur à indent
//     tabulation += " "; //ajout s'espaces dans tabulation
//   }
//   for (let i = 0; i < tableau.length; i++) {
//     // Tant que i inférieur à tab
//     // Affichage console de la tabulation, du nom à la position i de tab, du prénom à la position i et de l'origine
//     console.log(
//       `${tabulation}lastName : ${tableau[i].lastName} / firstName : ${tableau[i].firstName}
//       } / origin : ${origin}`
//     );
//     if (tableau[i].children && tableau[i].children.length > 0) {
//       // Si dans tab à la position i il y a le param enfants et présence d'enfants
//       recursiveLoopSub(
//         tableau[i].children,
//         indent + 1,
//         origin + `${tableau[i].lastName} - `
//       ); // appelle de la fontion recursiveLoopSub en donnant tableau enfant + incrémentation indent + nom et prénom du parent
//     }
//   }
// }

// recursiveLoopSub(peoples, 0, "");

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
