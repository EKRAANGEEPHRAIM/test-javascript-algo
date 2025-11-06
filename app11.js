// function additionner(arr) {
// //sort permet de mettre les nombres à l'interieur d un tableau par ordre croissant ou decroissant.

// arr.sort(function(a,b) {
//     return a - b ;
// });
// //Premier valeur
// var premierhiffre = arr[0];
// // deuxieme valeur
// var secondChiffre = arr[1];

// // je dois initialiser une valeur ou je vais mettre le resultat
// var result = 0;

// for(var i = premierhiffre ; i <= secondChiffre ; i++){

//     result += i;
// }
// return result ;
// }

// console.log(additionner([8,4]));


// another way

function additionner(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0],arr[1]);

    var acc = 0;

    for(var  i = min ; i <= max ; i++){
        acc += i ;
    }

    return acc;
}

console.log(additionner([8,4]));