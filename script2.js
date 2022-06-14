/*In Array of numbers find the maximum profit
(find the difference between two numbers situated next to each other that will give you the biggest number) */

let arrrayOfNumbers = [1, 44, 22, 321, 2, 533, 1000, 22];
let lengthOfArray = arrrayOfNumbers.length;

/* STEPS TO DO:
STEP 1
Loop through array 
STEP 2
Find the difference bettwen to numbers situated next to each other (The DIFFERENCE should be a POSITIVE NUMBER)
STEP 3
FIND THE BIGGEST DIFFERENCE
*/
function maxDiff(arr, arrLength) {
  let max_diff = null;
  for (let i = 0; i < arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      if (j - i === 1 && arr[j] - arr[i] > max_diff)
        console.log((max_diff = arr[j] - arr[i]));
      else if (j - i === 1 && arr[i] - arr[j] > max_diff)
        console.log((max_diff = arr[i] - arr[j]));
    }
  }
  return max_diff;
}
console.log(`The maximum profit is ${maxDiff(arrrayOfNumbers, lengthOfArray)}`);
