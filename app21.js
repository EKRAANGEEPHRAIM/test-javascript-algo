function convertisseurRomain(num) {
  var valeursDecimales = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var symbolesRomains = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];

  var resultat = "";

  for (var i = 0; i < valeursDecimales.length; i++) {
    while (num >= valeursDecimales[i]) {
      resultat += symbolesRomains[i];
      num -= valeursDecimales[i];
    }
  }

  return resultat;
}

console.log(convertisseurRomain(5648)); // ➜ MMMMMDCXLVIII
