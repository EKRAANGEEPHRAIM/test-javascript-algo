function plusGrandNb (arr) {

var results =  [];

for(var i = 0 ; i < arr.length ; i++) {
// je parcourt mon grand tableau
    // fist array , first value
var nbMax = arr[i][0];

// Ensuite , je parcourt chacun de mes tableau pour avoir le nombre le plus grand de chaque tableau

for(var n = 1 ; n < arr[i].length ; n++) {
    if(arr[i][n] > nbMax) {
        nbMax = arr[i][n];

    }
}

results.push(nbMax);
}

return results;

}

console.log(plusGrandNb([
    [1,23,45,5],[6,85,25,3],[36,25,54,2]
]));