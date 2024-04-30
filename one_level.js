const { transform } = require("lodash");

var peoples = [
  {
    _id: 1001,
    username: "jeandupont",
    firstName: "Jean",
    lastName: "Dupont",
  },
  {
    _id: 1002,
    username: "louisbrocante",
    firstName: "Louis",
    lastName: "Brocante",
    parent: 1001,
  },
  {
    _id: 1003,
    username: "julienrouget",
    firstName: "Julien",
    lastName: "Rouget",
    parent: 1002,
  },
];

// transformer le tableau peoples en un autre tableau appelé people_transformer, où chaque objet a une propriété parent qui pointe vers un autre objet dans le tableau.

//Dans ton exemple, chaque objet dans peoples a une propriété parent qui est l'_id d'un autre objet dans le tableau. Donc, pour chaque objet dans peoples, tu dois rechercher l'objet correspondant à cet _id et l'assigner à la propriété parent.

// var people_transformer = [
//   {
//     _id: 1003,
//     username: "julienrouget",
//     firstName: "Julien",
//     lastName: "Rouget",
//     parent: {
//       _id: 1002,
//       username: "louisbrocante",
//       firstName: "Louis",
//       lastName: "Brocante",
//       parent: {
//         _id: 1001,
//         username: "jeandupont",
//         firstName: "Jean",
//         lastName: "Dupont",
//       },
//     },
//   },
// ];
