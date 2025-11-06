function finSimilaire (str,fin) {
var finDuMot = str.slice(-fin.length);
// slice permet de decouper une chaine de caractere;
if(finDuMot === fin){
    return "la fin est similaire";

}else{
    return "la fin ne correspond pas"
}

}

console.log(finSimilaire("manger","er"));