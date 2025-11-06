function fonctionParam(arr, func) {
 var arr1 = arr.sort();// to sort the array from smallest to largest

var newArr = []; // array void


 for (var i = 0 ; i < arr1.length ; i++) {
    if(func(arr1[i])){
        newArr.push(arr1[i]);
    }
 }
return newArr;
} 


console.log(fonctionParam([1,7,2,3,90,4], function(n){ return n >= 50}))