/* Find all even numbers in an array,
   triple them, and return their sum
*/


// Make it a function 
// Find the sum of tripled evens between 1 and n

function sumOfTripledEvens(n) {
    let numbers = [];

    for (i = 1; i <= n; i++) {
        numbers.push(i);
    }

    return numbers
      .filter(number => number % 2 == 0)
      .map(number => number * 3)
      .reduce((a, b) => a + b);

}


console.log(sumOfTripledEvens(50));
