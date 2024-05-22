const { result } = require("lodash");

var obj = {
  a: 1,
  b: 3,
  c: { e: { f: { z: { y: 23 } } } },
};

// function searchKey(object, keyName) {
//   var keys = Object.keys(object);
//   for (var i = 0; i < keys.length; i++) {
//     var e = keys[i];
//     console.log(e === keyName, e);
//     if (e === keyName) return true;
//     else if (typeof object[e] === "object") {
//       searchKey(object[e], keyName);
//       return true;
//     }
//   }
//   return false;
// }

// console.log(searchKey(obj, "y")); // true => false

// returnEveryKeys(obj); //--> [a,b,c,e,f,z,y] (sans utiliser lodash)

function returnEveryKey(object) {
  var result = [];
  var keys = Object.keys(object);
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];

    result.push(key);
    if (typeof object[keys] === "object") {
      var tab_sublevel = returnEveryKey(object[key]);
      result = [...result, ...tab_sublevel];
    }
  }
  return result;
}
var res = returnEveryKey(obj);
// console.log(res);

function sommeTableau(tableau) {
  if (tableau.length == 0) return 0;
  return tableau[0] + sommeTableau(tableau.splice(1));
}

function lengthTableau(tableau) {
  if (tableau.length == 0) return 0;
  return 1 + lengthTableau(tableau.splice(1));
}

// console.log(sommeTableau([1, 2, 3, 4, 5])); //Devrait afficher 15
// console.log(lengthTableau([1, 2, 3, 4, 5])); //Devrait afficher 15

function isPaLindrome(str) {
  if (str.length <= 1) return true;

  if (str[0] !== str[str.length - 1]) return false;

  return isPaLindrome(str.slice(1, -1));
}

console.log(isPaLindrome("madam")); // Devrait afficher texte
console.log(isPaLindrome("venu")); // Devrait zfficher false
console.log(isPaLindrome("radar")); // Devrait afficher true
console.log(isPaLindrome("hello")); // Devrait afficher false
console.log(isPaLindrome("level")); // Devrait afficher true
console.log(isPaLindrome("a")); // Devrait afficher true
console.log(isPaLindrome("")); // Devrait afficher true
