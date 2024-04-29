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

// Creer un prompt qui prendre le "firstName" et "lastName"
// Creer une fonction pour chercher dans
// tous les elements du tableau y compris children puis retourner le resultat dans une fonction promise avec resolve si personne trouvé et reject si aucune personne trouvé

prompt.start();

var findRecursivityPeople = function (firstName, lastName, tab, path) {
  for (var i = 0; i < tab.length; i++) {
    var element = tab[i];
    if (element.firstName == firstName && element.lastName == lastName) {
      return {
        ...element,
        parent: path + element.firstName + " " + element.lastName,
      };
    }
    if (element.children) {
      var value = findRecursivityPeople(
        firstName,
        lastName,
        element.children,
        path + element.firstName + " " + element.lastName + "/"
      );
      if (value) return value;
    }
  }
  return null;
};

var findPeople = function (firstName, lastName) {
  return new Promise((resolve, reject) => {
    var result = findRecursivityPeople(firstName, lastName, people, "");
    if (result) {
      resolve(result);
    } else reject("Not Found");
  });
};

prompt.get(["firstName", "lastName"], function (err, result) {
  findPeople(result.firstName, result.lastName)
    .then((value) => {
      console.log(
        "Personne trouvée :",
        value.firstName,
        value.lastName,
        " / Parent : ",
        value.parent
      );
    })
    .catch((err) => {
      console.log("Aucun personne trouvée :", err);
    });
});
