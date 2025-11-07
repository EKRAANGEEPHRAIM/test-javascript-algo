function findPerson(data, source) {
  var scr = Object.keys(source); // toutes les clés de l'objet source

  return data.filter(function (obj) {
    for (var i = 0; i < scr.length; i++) {
      if (
        obj.hasOwnProperty(scr[i]) === false || // si l'objet n'a pas la clé
        obj[scr[i]] !== source[scr[i]]          // ou la valeur est différente
      ) {
        return false; // on exclut cet objet
      }
    }
    return true; // toutes les clés correspondent → on garde l'objet
  });
}

console.log(
  findPerson(
    [
      { lastName: "Tom", name: "Durana" },
      { lastName: "Juliette", name: "Garcia" },
      { lastName: "Jean", name: "Lafite" },
      { lastName: "Lucien", name: "Lafite" },
    ],
    { name: "Lafite" }
  )
);
// Résultat : [
//   { lastName: "Jean", name: "Lafite" },
//   { lastName: "Lucien", name: "Lafite" }
// ]
