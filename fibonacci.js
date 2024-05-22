// Fonction pour trouver l'index d'un nombre donné dans la suite de Fibonacci
function findFibonacciIndex(num) {
  // Les deux premiers termes de la suite de Fibonacci
  let a = 0;
  let b = 1;
  let index = 1; // L'index commence à 1 car b est le premier terme (F(1))

  // Boucler jusqu'à trouver le nombre dans la suite de Fibonacci
  while (b < num) {
    let temp = b;
    b = a + b; // Calculer le terme suivant
    a = temp;
    index++;
  }

  // Si le nombre trouvé est égal au nombre donné, retourner l'index
  if (b === num) {
    return index;
  } else {
    return -1; // Retourner -1 si le nombre donné n'est pas dans la suite de Fibonacci
  }
}

// Exemple d'utilisation
let number = 21; // Le nombre dont on veut trouver l'index dans la suite de Fibonacci
let index = findFibonacciIndex(number);

if (index !== -1) {
  console.log(`L'index de ${number} dans la suite de Fibonacci est ${index}`);
} else {
  console.log(`${number} n'est pas un nombre de la suite de Fibonacci`);
}
