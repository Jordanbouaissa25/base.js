obj = [
  {
    firstName: "Jordan",
    lastName: "BOUAISSA",
    yearBorn: 2001,
  },
  {
    firstName: "Jean",
    lastName: "LUC",
    yearBorn: 1950,
    hobbies: "Sport",
    profession: "Professeur",
    yearDead: 2020,
  },
];

for (var i = 0; i < obj.length; i++) {
  var keys = Object.keys(obj[i]);
  console.log("");
  for (var key_number = 0; key_number < keys.length; key_number++) {
    console.log(keys[key_number], ":", obj[i][keys[key_number]]);
  }
}

console.log("");

for (var i = 0; i < obj.length; i++) {
  var keys = Object.keys(obj[i]);
  var text = "";
  for (var key_number = 0; key_number < keys.length; key_number++) {
    text += `${keys[key_number]} : ${obj[i][keys[key_number]]}`;
    if (key_number + 1 != keys.length) text += " / ";
  }
  console.log(text);
}
