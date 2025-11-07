function nameLettres(arr){

var test = arr[1].toLowerCase(); // mot dont on veut verifier les lettres
var cible = arr[0].toLowerCase();// mot dans lequel je cherche


for(   i = 0 ; i < test.length ; i++){
    if(cible.indexOf(test[i]) === -1 ) {
        return false;// une lettre n est pas present --> stop
    }
}
return true; // toutes les lettres sont presentes
}


console.log(nameLettres(["concupiscence", "sens"])); // test
