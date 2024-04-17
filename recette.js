

var data = [{
    type: "accompagnement",
    nom: "riz",
    ingredients: ["riz","eau"],
    duration: 10,
    ustensile: ["casserole"]
},{

    type: "accompagnement",
    nom: "puree",
    ingredients: ["pure","lait","eau"],
    duration: 10,
    ustensile: ["casserole"]
},{
    type: "accompagnement",
    nom: "salade",
    ingredients: ["salade"],
    duration: 4,
    ustensile: ["saladier"]
},{
    type: "accompagnement",
    nom:"frite",
    ingredients:["patate","huile"],
    duration: 13,
    ustensile:["friteuse"]
},{
    type: "assaisonement",
    nom: "curry",
    ingredients: ["epice curry"],
    duration: 3,
    ustensile: []
},{
    type: "assaisonement",
    nom: "tandoori",
    ingredients: ["epice tandoori"],
    duration: 3,
    ustensile: ["concaseur"]
},{
    type: "assaisonement",
    nom: "sauce forestier",
    ingredients: ["creme","champignon","beurre","beurre","eau"],
    duration: 3,
    ustensile: ["saladier","mixeur"],
},{
    type:"assaisonement",
    nom: "paprika",
    ingredients: ["epice paprika"],
    duration: 3,
    ustensile: ["concaseur"]
},{
    type: "plat",
    nom: "boeuf",
    ingredients: ["viande","huile"],
    duration: 7,
    ustensile: ["poele"]
},{
    type: "plat",
    nom: "poulet",
    ingredients: ["poulet","huile"],
    duration: 7,
    ustensile: ["poele"]
},{
    type: "plat",
    nom: "steak hache",
    ingredients: ["steak hache","huile"],
    duration: 7,
    ustensile: ["poele"]

}]

var plat = []
var assaisonement = []
var accompagnement = []

for (var i = 0; i < data.length - 1; i++) {
    var plat =  plat[Math.round(Math.random() * ((plat.length - 1) - 0 ) + 0)]
    var assaisonement = assaisonement[Math.round(Math.random() * ((assaisonement.length - 1) - 0 ) + 0)]
    var accompagnement = accompagnement[Math.round(Math.random() * ((accompagnement.length - 1) - 0 ) + 0)]

   
}





/* 
Exemple résultat :  nom: "Riz Boeuf Curry",                          
ingredients: ["Viande","huile","riz","eau","curry"],
duration: 20,
ustensile: ["poele","casserole"],
 */