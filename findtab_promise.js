const { reject, last, result } = require("lodash");
var prompt = require("prompt");

var people = [
  {
    // Recursivité en Javascript "parent-enfant"
    firstName: "Edouard",
    lastName: "Bernier",
    children: [
      {
        firstName: "Jean",
        lastName: "Bernier",
        children: [
          {
            firstName: "Junior",
            lastName: "Bernier",
            children: [
              {
                firstName: "Jordan",
                lastName: "Bernier",
              },
              {
                firstName: "Luc",
                lastName: "Bernier",
              },
            ],
          },
        ],
      },
      {
        firstName: "Sacha",
        lastName: "Bernier",
      },
      {
        firstName: "Laurent",
        lastName: "Bernier",
      },
      {
        firstName: "Raphael",
        lastName: "Bernier",
      },
    ],
  },
  {
    firstName: "Jean",
    lastName: "Luc",
    children: [
      {
        firstName: "Richard",
        lastName: "Luc",
        children: [
          {
            firstName: "Roméo",
            lastName: "Luc",
          },
        ],
      },
    ],
  },
];

function searchLoopName(lastName, tab, path) {
  let arbre = null;
  for (let i = 0; i < tab.length; i++) {
    let element = tab[i];
    if (element.lastName == lastName) {
      arbre.push(
        `{name:${element.firstName} ${element.lastName}, parents: path}`
      );
    }
    if (element.children) {
      let value = searchLoopName(
        `lastName, element.children,  ${path} ${element.firstName} ${element.lastName} /`
      );
      arbre = [...arbre, ...value];
    }
  }
  return arbre;
}

function FindName(lastName) {
  return new Promise((resolve, reject) => {
    let result = searchLoopName(lastName, people, "");
    console.log(result);
    if (result) {
      resolve(result);
    } else {
      reject("Not Found");
    }
  });
}

prompt.get("lastName", (err, result) => {
  FindName(result.lastName)
    .then((resultat) => {
      resultat.forEach((element) => {
        console.log`(${element.name} ${element.parents != ""} ? parents : ${
          element.parents
        }:""})`;
      });
    })
    .catch((err) => {
      console.log("Personne");
    });
});

// Créer un tableau avec tout les mêmes nom de famille , si on tappe Luc on trouvera tout les luc ainsi que tout les édouards
// Ajouter dans un tableau et retourné.
// Retourner les autres personnes par apport à l'ancien exercice.
