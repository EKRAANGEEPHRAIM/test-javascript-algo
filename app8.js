//avec for

// function trouverLongueurMax (str){

//     var mots = str.split(' ');
//     var  longMax = 0 ;

//     for(var i = 0 ;  i < mots.length ; i++) {
//         if(mots[i].length > longMax) {
//             longMax = mots[i].length;
//         }
//     }
//     return longMax;
// }
  


// // with callback
// function trouverLongueurMax(str) {
//     var arr = str.split(' ');
      

//     return arr.reduce(
//         function(x,y){
//         return Math.max(x,y.leng)
//     },0);
// }


function trouverLongueurMax (str) {
    var arr = str.split(' ');

    if(arr.length === 1) {
        return arr[0].length
    }

    if(arr[0].length >= arr[1].length){
        arr.splice(1,1);

        return trouverLongueurMax(arr.join(' '));

    }

    if(arr[0].length <= arr[1].length){
        return trouverLongueurMax(arr.slice(1,arr.length).join(' '))
    }
}