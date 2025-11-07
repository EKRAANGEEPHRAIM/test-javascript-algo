function returnSentence(str) {

    return str.split('').reverse().join('');
    /**
     * join() allows us to transform an array into string
     * split() allows us to transform a string into an array
     * reverse() allows us to return the inverse array'element.
     */

}

console.log(returnSentence("Hello everyone"))
