let rectangle = {
    x: 50,
    y: 120,
    largeur: 30,
    longueur: 70,
}
console.log(rectangle)
rectangle.perimetre = ((rectangle.largeur+rectangle.longueur)*2)
console.log("Le perimetre est :", rectangle.perimetre)

rectangle.unite = "cm"
console.log("l'unite est", rectangle.unite )

rectangle.area = rectangle.largeur*rectangle.longueur
console.log(" l'aire du rectangle est ", rectangle.area, rectangle.unite)

rectangle.diagonale = Math.pow(rectangle.largeur, 2) + Math.pow(rectangle.longueur, 2)
console.log(rectangle.diagonale)

rectangle.diagonale = Math.sqrt (rectangle.diagonale).toFixed(2)
console.log(rectangle.diagonale)

console.log("\nx:", rectangle.x, rectangle.unite)
console.log("y:", rectangle.y, rectangle.unite)
console.log("largeur", rectangle.perimetre, rectangle.unite)
console.log("aire", rectangle.area, rectangle.unite, "2")
console.log("diagonale", rectangle.diagonale, rectangle.unite, "\n")
