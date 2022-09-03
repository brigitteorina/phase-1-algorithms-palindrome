const { consoleLog } = require("mocha/lib/reporters/base");

function isPalindrome(word) {
  // Write your algorithm here

  var reg = /[\W_]/g;
  var smallStr = word.toLowerCase().replace(reg, '');
  var reverseStr = smallStr.split('').reverse().join('');
  if (smallStr === reverseStr) {
    return true;
  }else return false;





}

/* 
  Add your pseudocode here
  -Pass in a word/set of characters 
  -Convert the set of characters into an array using .split()
  -Compare the original set of characters with the stringified reversed array
  -If the result is the same, return true. Else return false
*/

/*
  Add written explanation of your solution here
  myArr->an array formed from the set of characters passed in
  reversedArr->this is the reversed version of myArr having been joined into a string
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
module.exports=isPalindrome










  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;