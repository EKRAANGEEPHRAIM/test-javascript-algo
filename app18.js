function meilleurInvestissement(arr) {
  let meilleurProfit = 0;
  let achat = 0;
  let vente = 0;
  const jours = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];

  // Boucle sur chaque jour d'achat possible
  for (let i = 0; i < arr.length - 1; i++) {
    // On compare avec tous les jours suivants pour la revente
    for (let j = i + 1; j < arr.length; j++) {
      const profit = arr[j] - arr[i];
      if (profit > meilleurProfit) {
        meilleurProfit = profit;
        achat = i;
        vente = j;
      }
    }
  }

  if (meilleurProfit <= 0) {
    return "Aucun investissement rentable cette semaine ";
  }

  return ` Le meilleur coup était d’acheter le ${jours[achat]} à ${arr[achat]} et de revendre le ${jours[vente]} à ${arr[vente]} pour un bénéfice de ${meilleurProfit}.`;
}

// Exemple
console.log(meilleurInvestissement([50, 10, 20, 2, 80, 60, 20]));
