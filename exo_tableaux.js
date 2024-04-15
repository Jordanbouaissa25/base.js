var tableau = [{                  // ajout tableaux toujours entre []
    firstname: "Jordan",                 // ajout object toujours entre {}              
    lastname: "Bouaissa",
    age: 22,
    dateStart: 2001,
    lieu_de_naissance: "montbeliard",
},
{
    firstname: "Karim",
    lastname: "Bouaissa",
    age: 63,
    dateStart: 1960,
    lieu_de_naissance: "seloncourt",
}
]


tableau.push(                        // ajout de l'element
    {
        firstname: "Katia",
        lastname: "Sales Roca",
        age: 57,
        dateStart: 1966,
        lieu_de_naissance: "audincourt",
    }
)

for (var i = 0; i < 100; i++)
    tableau.push({
        firstname: "Louis" + i,
        lastname: "LaBroquante" + i,
        age: 3 + i,
        dateStart: "12-12-1950",
        lieu_de_naissance: "Paris"
    }
    )


for (var i = 0; i < tableau.length; i++) {
    if (tableau[i].firstname === "Louis55") {  // La condition test firstname LOUIS55
        console.log(`Prénom : ${tableau[i].firstname}`) 
        console.log("Nom :", tableau[i].lastname)
        console.log("Age :", tableau[i].age)
        console.log(`Il est à la ${i} position dans le tableau.\n`)
    }
}




console.log(`Il y a y a ${tableau.length} personne(s) dans la formation.`)


// Stockage d'un élément unique avec Obj
var obj_people = {}
for (var i = 0; 1 < tableau.length; i++) {
    obj_people[tableau[1].firstname] = tableau[1]
}

console.log(obj_people['Louis55'])

//console.log(`Il y a ${tableau.length} personnes(s) dans la formation.`)


var tableau_plus_de_50 = []
for (var i = 0; i < tableau.length; i++) {
    if (tableau[i].age > 50) {
    tableau_plus_de_50.push(tableau[i])
    }
}

console.log(`J'ai ${tableau_plus_de_50.length} personne (s) qui ont plus de 50 ans dans mon tableau`)











