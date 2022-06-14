/*Find Factorial of a number */

function findFactorial(number) {
  let result = 1;
  if (number < 0) {
    return console.log("Error");
  } else if (number === 0) {
    return console.log(`The result of ${number} is 1.`);
  } else {
    for (i = 1; i <= number; i++) {
      result *= i;
    }
  }
return console.log(result);
}
findFactorial(1);
