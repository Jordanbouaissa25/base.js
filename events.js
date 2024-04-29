// const { reject } = require("lodash");

// console.log("Bienvenue");
// var calcul = (12 / 2) * 4;

// console.log(calcul);
// setTimeout(function () {
//   try {
//     calcul = 4;
//     console.log(calcul);
//     ds;
//   } catch (err) {
//     console.log(err.name);
//   } finally {
//     console.warn("FIN");
//   }
// }, 1000);

function waiting(time) {
  return new Promise((resolve, reject) => {
    if (time > 100)
      setTimeout(() => {
        console.log("OK");
        resolve({ succes: true });
      }, time);
    else reject({ succes: false });
  });
}

waiting(101)
  .then((value) => {
    console.log("Promise reussi :", value);
  })
  .catch((err) => {
    console.log("Promise échoue :", err);
  });
