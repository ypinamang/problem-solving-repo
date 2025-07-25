function convertToCamelCase(str) {
    return str
      .split("-")
      .map((word, index) => index == 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1).toLowerCase())
      .join("");
}

console.log(convertToCamelCase("standing-by-the-river"));
console.log(convertToCamelCase("STAnding-By-tHe-RIver"));