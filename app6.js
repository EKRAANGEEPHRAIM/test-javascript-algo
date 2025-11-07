function maj(str) {
    // Mettre la chaîne en minuscules et la découper en mots
    var mots = str.toLowerCase().split(' ');

    // Transformer la première lettre de chaque mot en majuscule
    var results = mots.map(function(val){
        return val.charAt(0).toUpperCase() + val.slice(1);
    });

    return results.join(" ");
}

console.log(maj("Les sanglots longs des violons de l' automne..."));
// Résultat : "Les Sanglots Longs Des Violons De L' Automne..."
