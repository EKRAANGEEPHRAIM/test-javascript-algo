function nameLettres(arr){

var test = arr[1].toLowerCase();
var cible = arr[0].toLowerCase();


for(   i = 0 ; i < test.length ; i++){
    if(cible.indexOf(test[i]) === -1 ) {
        return false;
    }
}
return true;
}


console.log(nameLettres(["concupiscence", "sens"]));