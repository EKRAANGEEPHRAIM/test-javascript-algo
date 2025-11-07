// recursion
const factorielle = n => n === 0 ? 1 : n * factorielle(n - 1);

console.log(factorielle(5)); // 120
