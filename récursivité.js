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

// Exemple : Fonction récursive
// firstName : Edouard / lastName : Bernier
//     firstName : Jean / lastName : Bernier
//         firstName : Junior / lastName : Bernier
//             firstName : Jordan / lastName : Bernier
//             firstName : Luc / lastName : Bernier
//     firstName : Sacha / lastName : Bernier
//     firstName : Laurent / lastName : Bernier
//     firstName : Raphael / lastName : Bernier
// firstName : Jean / lastName : Luc
//     firstName : Richard / lastName : Luc
//         firstName : Roméo / lastName : Luc
