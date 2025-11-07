function finSimilaire (str,fin) {
var finDuMot = str.slice(-fin.length);
// slice permet de decouper une chaine de caractere
// slice(-fin.length) prend les derniers caractères de 'str' de la longueur de 'fin'
if(finDuMot === fin){
    return "la fin est similaire";

}else{
    return "la fin ne correspond pas"
}

}

console.log(finSimilaire("manger","er"));
