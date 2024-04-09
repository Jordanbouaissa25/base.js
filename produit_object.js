let produit = {
    nom: "Iphone",
    prix: 1000,
    stock: 250,
    nb_vendu: 750
}
console.log(produit)
produit.gain = produit.prix*produit.nb_vendu
console.log(produit)

produit.valeur_stock = produit.prix*produit.stock

console.log("produit :", produit.nom," / gain :", produit.gain, "/ valeur stock:", produit.valeur_stock)

