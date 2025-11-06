// function difTab (arr1 , arr2) {

// // We filter the elements that  are not inside another array 
// const diff1 = arr1.filter(function(x) {
//   return  !arr2.includes(x)
// });
// const diff2 = arr2.filter(function(x){
//  return   !arr1.includes(x)
// })


// // we conbine the two differences with concat()
// var tableau = diff1.concat(diff2);

// return tableau;

// }

// console.log(difTab([1,2,3,5], [1,2,3,4,5]));  


function difTab(arr1,arr2) {

    var response = [];

    function checkDiff(first , second ) {
        for( var i = 0 ;   i < first.length ; i++){
            if(second.indexOf(first[i]) === -1) {
                response.push(first[i])
            }
        }
    }

    checkDiff(arr1, arr2);
    checkDiff(arr2,arr1);

    return response;
}


console.log(difTab([1,2,3,5], [1,2,3,4,5])); 