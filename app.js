function conversion (degCel) {
var fahrenheit =  (degCel * (9/5) +  32) ;// formule de fahrenheit
if(typeof degCel === 'number') {
    return fahrenheit;
} else{
    return "Data entered no correct"
}

}

// test
console.log(conversion(6));
console.log(conversion('hello'));