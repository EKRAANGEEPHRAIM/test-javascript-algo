// function insert(arr , num) {

//   arr.push(num);
// //[30,40,87,96,54,29,60]

// arr.sort(function(a,b) {
//     return a - b; //sort the table from smallest to  largest
// })

// return arr.indexOf(num); // return the spot of number added




// }

// console.log(insert([30,40,87,96,54,29],60)); // 3


function insert(arr , num ) {
arr.sort(); // sort the table from smallest to largest
console.log(arr.sort())
    for(var i = 0 ; i < arr.length ; i++) {
        if(arr[i] >= num) {
            return i ;
        }
    }
    

}