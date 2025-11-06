// Fonction pour tester si un nombre est premier
function estPremier(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}

// Fonction pour additionner tous les nombres premiers jusqu’à 'num'
function additionPremiers(num) {
  if (num < 2) return 0;

  // Si num est premier → on l’ajoute à la somme
  if (estPremier(num)) {
    return num + additionPremiers(num - 1);
  } else {
    return additionPremiers(num - 1);
  }
}

console.log(additionPremiers(10)); // ➜ 17
