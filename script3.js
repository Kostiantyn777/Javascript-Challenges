/*
Complete the method/function so that it converts dash/underscore delimited words into camel casing. 
The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

Examples
"the-stealth-warrior" gets converted to "theStealthWarrior"
"The_Stealth_Warrior" gets converted to "TheStealthWarrior" 
*/
let string = "The_Stealth_Warrior";
let string2 = "the-stealth-warrior";

function toCamelCase(str) {
  let replaceDashAndUnderscore = str.replace(/[_-]/g, " ");
  let stringToArray = replaceDashAndUnderscore.split(" ");
  //console.log(stringToArray);
  let resultString;
  if (stringToArray[0].toUpperCase().charAt(0) === stringToArray[0].charAt(0)) {
    return (resultString = stringToArray
      .map((string) => string.replace(/^./, string[0].toUpperCase()))
      .join(""));
  } else if (
    stringToArray[0].toUpperCase().charAt(0) !== stringToArray[0].charAt(0)
  ) {
    (resultString = stringToArray
      .map((string) => string.replace(/^./, string[0].toUpperCase()))
      .join(""));
      return resultString[0].toLowerCase() + resultString.slice(1);
  }
  
}
console.log(`Convert "The_Stealth_Warrior" string to ${toCamelCase(string)}`);
console.log(`Convert "the-stealth-warrior" string to ${toCamelCase(string2)}`);


