// recursion

function factoriser(num){
    if(num === 0 ){
        return num = 1;

    }

    return num * factoriser(num - 1);
}

console.log(factoriser(5))