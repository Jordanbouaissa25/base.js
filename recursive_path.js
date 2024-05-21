// Importer la bibliothèque faker pour générer des données factices
const { faker } = require("@faker-js/faker");
// Importer la bibliothèque lodash pour des fonctions utilitaires
const _ = require("lodash");
// Importer la bibliothèque path pour manipuler les chemins de fichiers
const path = require("path");

// Initialiser un tableau vide pour stocker les objets de fichiers
var files = [];

// Boucle pour générer 100 chemins de fichiers factices
for (var i = 0; i < 100; i++) {
  // Générer un chemin de fichier aléatoire
  var file_path = faker.system.filePath();
  // Extraire l'extension du fichier du chemin
  var ext = path.extname(file_path);
  // Extraire le nom du fichier du chemin
  var filename = path.basename(file_path);
  // Extraire le nom du répertoire du chemin
  var dirname = path.dirname(file_path);
  // Ajouter un nouvel objet représentant le fichier au tableau files
  files.push({
    name: filename, // Nom du fichier
    extension: ext, // Extension du fichier
    global_path: file_path, // Chemin complet du fichier
    dirname: dirname, // Nom du répertoire
    // Diviser le chemin du répertoire en un tableau de répertoires
    dirname_tab: dirname.replace("/", "").split("/"),
  });
}

// Initialiser un tableau vide pour stocker la structure de fichiers récursive
var files_recursive = [];

// Fonction récursive pour construire la structure imbriquée des répertoires et des fichiers
function files_recursive_construction(path_dir, index, file, tab_recur) {
  // Obtenir le répertoire actuel à partir du tableau path_dir
  const path = path_dir[index];
  // Drapeau pour vérifier si un nouveau répertoire est créé
  var create = false;
  // Vérifier si le répertoire actuel existe déjà dans tab_recur
  let e = _.find(tab_recur, ["name", path]);

  // Si le répertoire n'existe pas
  if (!e) {
    create = true;
    console.log(
      "Le dossier",
      path,
      "n'existe pas, je le crée et l'ajoute au tableau de resultat.",
      "Je suis au niveau :",
      index
    );
    // Créer un nouvel objet de répertoire
    e = {
      name: path, // Nom du répertoire
      type: "D", // Type : Répertoire
      children: [], // Initialiser un tableau vide pour les enfants
    };
    // Ajouter le nouveau répertoire à tab_recur
    tab_recur.push(e);
  } else {
    console.log(
      "Le dossier",
      path,
      "n'existe déjà.",
      "Il a déjà",
      e.children.length,
      "fichier ou dossier dedans.",
      "Je suis au niveau :",
      index
    );
  }

  // Si c'est le dernier répertoire dans le chemin
  if (index === path_dir.length - 1) {
    console.log(
      "J'ai fini de créer tous les dossiers pour le fichier",
      file.global_path,
      "je peux ajouter le fichier au dossier et passer au suivant."
    );
    // Ajouter le fichier aux enfants du répertoire actuel
    e.children.push({
      name: file.name, // Nom du fichier
      type: "F", // Type : Fichier
      extension: file.extension, // Extension du fichier
      global: file.global_path, // Chemin complet du fichier
    });
    return e;
  } else {
    if (create)
      console.log(
        "J'ai créé le dossier",
        path,
        "qui n'existait pas pour le fichier avec le chemin",
        file.global_path
      );
    else
      console.log(
        "J'ai déjà créé le dossier",
        path,
        "avant, je vais ajouter les fichiers des dossiers ou fichiers dans ses enfants pour le fichier avec le chemin",
        file.global_path
      );
    // Appel récursif de la fonction pour le niveau de répertoire suivant
    return files_recursive_construction(path_dir, index + 1, file, e.children);
  }
}

// Boucle à travers chaque fichier dans le tableau files
for (let i = 0; i < files.length; i++) {
  const file = files[i];
  console.log(
    "Je suis en train de m'occuper du fichier",
    file.global_path,
    "en position",
    i
  );
  // Construire la structure récursive des répertoires pour le fichier actuel
  files_recursive_construction(file.dirname_tab, 0, file, files_recursive);
  console.log(
    "J'ai fini de m'occuper du fichier",
    file.global_path,
    "en position",
    i
  );
}

// Fonction pour imprimer la structure récursive des répertoires
function printPath(obj, level, parent) {
  var space = "";
  if (level > 0) {
    for (var i = 0; i < level; i++) {
      space += "    ";
    }
  }
  for (var i = 0; i < obj.length; i++) {
    var keys = ["name", "global"];
    var text = space + "- ";
    for (var key_number = 0; key_number < keys.length; key_number++) {
      if (obj[i][keys[key_number]]) {
        text += `${keys[key_number]} : ${obj[i][keys[key_number]]}`;
        if (key_number + 1 != keys.length) text += " / ";
      }
    }
    console.log(text);
    if (obj[i].children) {
      printPath(obj[i].children, level + 1, "");
    }
  }
}

// Commenter les deux lignes suivantes car elles ne sont pas nécessaires pour l'exemple actuel
// console.log(JSON.stringify(files_recursive, null, 4))
// printPath(files_recursive, 0, '-')
