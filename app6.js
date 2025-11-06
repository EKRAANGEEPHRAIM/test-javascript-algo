function maj(str) {
// Mettre ma chaine de caractere en miniscule
var tableauMinus = str.toLowerCase(' ');

// resultat , j appelle  map qui une methode callback
var results = tableauMinus.map(function(val){
    return val.replace(val.charAt(0),val.charAt(0).toUppeCase()); // Pour chaque element je prends la première lettre et je la transforme en majuscule
})

return results.join(" ");
}




console.log("Les sanglots longs des violons de l' automne...")