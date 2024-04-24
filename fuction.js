obj = {
  firstName: "Jordan",
  lastName: "BOUAISSA",
  yearBorn: 2001,
  salut: "Exemple",
};

function getPropretyObject(object) {
  var objectKey = Object.keys(object);
  return objectKey.join(", ");
}

function printProprety(keys) {
  console.log("Propriétés sont : ", keys);
}

var key = getPropretyObject(obj);
printProprety(key);

obj.age = 2024 - obj.yearBorn;
obj.job = "Dev";

printProprety(getPropretyObject(obj));

var keys_existant = Object.keys(obj);

for (let i = 0; i < keys_existant.length; i++) {
  console.log(
    "Propriété :",
    keys_existant[i],
    "/Valeur :",
    obj[keys_existant[i]]
  );
}
