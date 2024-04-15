var age = 26;
var autorized = false

if  (age >= 18)  // Si en français
    console.log("Tu es majeur !")
else // Sinon en français
    console.log("Tu es mineur")

console.log(`authorisé : ${autorized}`)

var autorized2 = age >= 18 ? true : false // Condition ternaire
console.log(`authorisé : ${autorized2}`)
