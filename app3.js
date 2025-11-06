function factoriser(num){

for(let i = 1 ; num > 1 ; num--) {
    i = num * i;

}

return i;

}

console.log(factoriser(5));
