console.log("Bienvenue");
var calcul = (12 / 2) * 4;

console.log(calcul);
setTimeout(function () {
  try {
    calcul = 4;
    console.log(calcul);
    ds;
  } catch (err) {
    console.log(err.name);
  } finally {
    console.warn("FIN");
  }
}, 1000);
