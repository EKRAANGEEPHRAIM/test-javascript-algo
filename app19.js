function telephoneCheck(str) {
    var reg = /^0[1-9]([-. ]?[0-9]{2}){4}$/; 

    return reg.test(str);
}


console.log(telephoneCheck("06 44 64 90 21"));