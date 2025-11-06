// with loop while

// function repeat(str , num) {

//     var final = '';

//     while( num > 0 ) {

//         final += str ;
//         num--;
//     }
//  return final;
// }


// console.log(repeat('abc', 4));


// with recursion
// function repeat(str,num){
//     if (num < 1) {
//         return "" ;

//     }
//     else{
//         return str + repeat(str , num -1)
//     }// "abc" +"abc" +"abc" + "abc" + ""
// }


function repeat(str,num ) {



return num > 0 ? str.repeat(num) : '' ;

}

console.log(repeat('abc', 4));