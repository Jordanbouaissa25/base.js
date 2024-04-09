let produit = {
    nom: "Iphone",
    prix: 1000,
    stock: 250,
    nb_vendu: 750
}
console.log(produit)                                                                                                // affichage des données 
produit.gain = produit.prix*produit.nb_vendu                                                                        // Création du gain
console.log(produit)                                                                                                // Affichage des caractéristiques du produit

produit.valeur_stock = produit.prix*produit.stock                                                                   // Création de la valeur du stock

console.log("produit :", produit.nom," / gain :", produit.gain, "/ valeur stock:", produit.valeur_stock)            // Affichage des données 

produit.cost = 300                                                                                                  // Initialisation du cout d'un iphone
produit.total_cost = produit.cost*(produit.nb_vendu + produit.stock)                                                // Création de l'achat d'un produit 
console.log("Somme d'achat des produits : ", produit.total_cost)                                                    // Affichage du cout total
let benefice_par_produit = produit.prix - produit.cost                                                              //Création du benefice par produit
console.log("benefice par produit : ", benefice_par_produit)                                                         // Calcul du benefice
let pourcentage_benefice = 100*(benefice_par_produit/produit.prix)                                                   // Création du pourcentage de benefice
console.log("pourcentage benefice par produit :", pourcentage_benefice+"96 ~", Math.round(pourcentage_benefice)+"%") // Affichage du pourcentage ainsi que l'arrondi du pourçentage

