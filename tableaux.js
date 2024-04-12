let personnage = {                       // Variable personnage
    firstname : "Jordan",                                      
    lastname : "Bouaissa",
    username : "JordanCda",
    email : "jordanbouaissa25@gmail.com"
}

let voisin = personnage                  // Variable voisin = personnage
console.log(personnage, voisin)          // Afficher les variables 

personnage.username = "Jordan"           // Modification de personnage
console.log(personnage, voisin)          // Afficher les variables (linké par référence)

voisin = {... personnage}                // Linké voisin avec personnage par valeur

personneage.username = "Mehdi"           // Modification de Username
console.log(personnage, voisin)          // Afficher les variables ( pas linké car copié par valeur)



