var data = [
    {
        type: "Santé",
        descriptions: ["Consultation chez le médecin généraliste pour un bilan de santé annuel", "Radiographie pour vérifier la présence de fractures après un accident", "Analyse sanguine pour surveiller le taux de glucose chez un patient diabétique","Consultation chez un spécialiste en cardiologie pour un suivi post-opératoire","IRM pour visualiser une tumeur cérébrale et planifier une intervention chirurgicale","Séance de chimiothérapie pour traiter un cancer du sein","Vaccination contre la grippe pour prévenir la maladie pendant la saison hivernale","Consultation en orthodontie pour corriger l'alignement des dents","Chirurgie de la cataracte pour améliorer la vision d'un patient âgé","Rééducation physique après une fracture de la jambe pour retrouver la mobilité et la force musculaire."],
        price_max: 1000,
        price_min: 300
    },
    {
        type: "Sortie",
        descriptions: ["Une balade en vélo le long de la rivière avec vue sur les montagnes enneigées.","Une randonnée dans la forêt à la découverte de cascades cachées.","Une session de yoga en plein air au coucher du soleil.","Un pique-nique dans un parc ombragé avec des amis.","Une séance de jogging matinale pour profiter de l'air frais et de la tranquillité.","Une sortie en kayak sur un lac calme et cristallin.","Une après-midi à la plage à se baigner, bronzer et faire du beach volleyball.","Une visite d'un jardin botanique pour admirer la diversité des plantes et des fleurs.","Une soirée barbecue en famille dans le jardin avec des jeux et de la bonne musique.","Une excursion en montagne pour contempler la vue panoramique depuis le sommet."],
        price_min: 10,
        price_max: 50
    },
    {
        type: "Loisir",
        descriptions: ["Faire du sport, comme la course à pied, le tennis ou le yoga","Se promener en plein air, que ce soit en montagne, à la plage ou dans un parc","Lire des livres, que ce soit des romans, des essais ou des bandes dessinées","Regarder des films ou des séries, que ce soit au cinéma, à la télévision ou sur internet","Jouer à des jeux de société en famille ou entre amis","Pratiquer un instrument de musique, comme la guitare, le piano ou la batterie","Réaliser des activités manuelles, comme la peinture, la poterie ou le tricot","Cuisiner de nouvelles recettes, que ce soit en suivant des tutoriels ou en inventant des plats","Visiter des musées, des expositions ou des événements culturels","Participer à des activités de bénévolat ou d'engagement citoyen, comme le nettoyage de plages ou l'aide aux personnes sans-abri."],
        price_min: 10,
        price_max: 100
    },
    {
        type: "Loyer",
        descriptions: ["Loyer mensuel de 800 euros pour un appartement de 50m² en centre-ville.","Loyer de 1200 euros par mois pour une maison de 100m² avec jardin.","Loyer de 600 euros par mois pour un studio meublé de 25m².","Loyer de 1500 euros par mois pour un loft de 80m² en plein cœur du quartier branché.","Loyer de 900 euros par mois pour un appartement de 70m² avec balcon et parking.","Loyer de 700 euros par mois pour une chambre dans une colocation de 3 personnes.","Loyer de 2000 euros par mois pour une villa de luxe de 150m² avec piscine.","Loyer de 500 euros par mois pour une petite maison de campagne de 40m².","Loyer de 1000 euros par mois pour un duplex de 90m² avec terrasse.","Loyer de 800 euros par mois pour un appartement meublé de 60m² en bord de mer."],
        price_min: 500,
        price_max: 2000
    },
    {
        type: "Voiture",
        descriptions: ["Une voiture compacte et sportive avec une silhouette élégante et des lignes dynamiques.","Une berline de luxe équipée de toutes les dernières technologies et dotée d'un intérieur raffiné en cuir.","Un SUV robuste et polyvalent, conçu pour affronter tous les types de terrains et conditions météorologiques.","Une voiture électrique moderne et écologique, offrant une autonomie impressionnante et des performances de pointe.","Une décapotable rétro au style vintage, avec des finitions en bois et en chrome et une capote en toile.","Une voiture familiale spacieuse et confortable, idéale pour les longs trajets en toute sécurité.","Une supercar ultra rapide et exclusive, équipée d'un moteur surpuissant et d'une aérodynamique perfectionnée.","Un crossover compact au design futuriste, doté de phares LED et de jantes en alliage urbain.","Une voiture de collection classique des années 1960, restaurée avec soin et entretenue avec passion par son propriétaire.","Une berline hybride économe en carburant, offrant une conduite souple et silencieuse tout en réduisant les émissions de CO2.",],
        price_min: 15000,
        price_max: 60000
    },
    {
        type: "Frais",
        descriptions: ["Frais de dossier: Montant payé pour le traitement d'une demande ou d'un dossier administratif.","Frais de livraison: Montant facturé pour l'acheminement d'un produit ou d'un service jusqu'au client.","Frais bancaires: Montant prélevé par une banque pour la gestion d'un compte ou l'exécution de transactions.","Frais d'inscription: Montant payé pour s'inscrire à un événement, une formation ou un service.","Frais de réservation: Montant payé pour réserver un produit ou un service à l'avance.","Frais de gestion: Montant prélevé pour la gestion d'un service ou d'un contrat.","Frais de maintenance: Montant payé pour assurer la maintenance ou le suivi d'un produit ou d'un service.","Frais de consultation: Montant facturé pour la consultation d'un professionnel ou d'un expert.","Frais de dépôt: Montant payé pour déposer un chèque, un dossier ou un produit.","Frais de recouvrement: Montant facturé pour recouvrer une somme due."],
        price_min: 100,
        price_max: 3000
    }
]

var wallet = {
    depenses: []
}

var min = 1713251378
var max = 713251378

for (var i = 0; i < 1000; i++) {
    var object_type =  data[Math.round(Math.random() * ((data.length - 1) - 0 ) + 0)]
    var object_description = object_type.descriptions[Math.round(Math.random() * ((object_type.descriptions.length - 1) - 0) +1 )]

    wallet.depenses.push({
        Date: Math.round(Math.random() * (max - min) + min),
        type: object_type.type,
        price: Math.round(Math.random() * (object_type.price_max - object_type.price_min) + object_type.price_min),
        descriptions: object_description
    })
}

console.log(wallet.depenses)

console.log("taille tableau", wallet.depenses.length)



