let rectangle = {
    x: 50,
    y: 120,
    largeur: 30,
    longueur: 70,
}                                                                                       // Entree des parametres du rectangle
console.log(rectangle)
rectangle.perimetre = ((rectangle.largeur+rectangle.longueur)*2)                        // Calcul des parametres du rectangle
console.log("Le perimetre est :", rectangle.perimetre)                                  // Affichage du perimetre

rectangle.unite = "cm"                                                                  // Ajout de la propriete unite
console.log("l'unite est", rectangle.unite )                                            // Affichage du perimetre en cm

rectangle.area = rectangle.largeur*rectangle.longueur                                   // Calcul de l'air du rectangle
console.log(" l'aire du rectangle est ", rectangle.area, rectangle.unite)               // Affichage de la diagonale au carré

rectangle.diagonale = Math.pow(rectangle.largeur, 2) + Math.pow(rectangle.longueur, 2)   // Calcul de la diagonale du rectangle
console.log(rectangle.diagonale)                                                            // Affichage de la diagonale

rectangle.diagonale = Math.sqrt (rectangle.diagonale).toFixed(2)                          // Arrondi 2 chiffres après la virgule
console.log(rectangle.diagonale)                                                            // Affichage du resultat

console.log("\nx:", rectangle.x+rectangle.unite)                                           // affichage du x
console.log("y:", rectangle.y+rectangle.unite)                                             // Affichage du y
console.log("largeur", rectangle.perimetre+rectangle.unite)                                // Affichage de la largeur
console.log("aire", rectangle.area+rectangle.unite, "2")                                   // Affichage de l'air 
console.log("diagonale", rectangle.diagonale+rectangle.unite+"\n")                         // Affichage de la diagonale

