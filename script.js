/* Find the length of the last element in the sentence
let sentence = "Hello& $!how are you?";*/

let sentence = "Hello& $!how are you?";
let sentenceArray = sentence
  .toLowerCase()
  .replace(/[^a-z0-9]/gi, " ")
  .split(" ");

const arrayFiltered = sentenceArray.filter((el) => el !== "");
console.log(arrayFiltered);
let newArray = arrayFiltered[arrayFiltered.length - 1].length;
console.log(newArray);
