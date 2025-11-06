function aplatisCeTableau(arr) {
  var tableauAplati = [];

  function aplatir(arg) {
    if (Array.isArray(arg)) {
      for (var i = 0; i < arg.length; i++) {
        aplatir(arg[i]); // appel récursif sur chaque élément du sous-tableau
      }
    } else {
      tableauAplati.push(arg); // si ce n’est pas un tableau, on ajoute la valeur
    }
  }

  arr.forEach(aplatir);
  return tableauAplati;
}

console.log(aplatisCeTableau([1, [2], [3, [[4]]]]));
// Résultat  : [1, 2, 3, 4]
