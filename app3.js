function factorielle(num){

for(let i = 1 ; num > 1 ; num--) {
    i = num * i;

}

return i;

}

console.log(factorielle(5));
