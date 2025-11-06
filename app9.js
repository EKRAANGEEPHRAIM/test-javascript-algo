function insert (arr,num) {
    // on pousse le nombre dans le tableau 
    arr.push(num);

    // on trie le tableau
    arr.sort();

    // return le tableau avec la nouvelle valeur

    return arr.indexOf(num);

}

console.log(insert([15,25,36,9,6,8], 50)) ;