/**
 * @param {string} s
 * @return {boolean}
 */

/*
Input - a string
Output - a boolean representing if the string is a palindrome
Constr/Edge - empty string returns true
Plan - 
- format the string by removing everything except letters and numbers
- split string into 2 substrings in middle
- reverse the second string and compare it to first string
*/
var isPalindrome = function(s) {
    // console.log(s.substring(0,10))
    // console.log(s.substring(11).split('').reverse().join(''))
  temp = s.replace(/[^a-zA-Z0-9]/g, ''); // Remove all non-alphabetic characters
  formatted = temp.toLowerCase(); // Convert all alphabetic characters to lowercase
  console.log(formatted)
  if (formatted.length % 2 !== 0) {
    let mid = Math.floor(formatted.length / 2);
    let firstHalf = formatted.substring(0, mid);
    let secondHalf = formatted.substring(mid + 1);
    let reversedHalf = secondHalf.split('').reverse().join('');
    return firstHalf === reversedHalf;
  } else {
      let mid = Math.floor(formatted.length / 2);
      let firstHalf = formatted.substring(0, mid);
      let secondHalf = formatted.substring(mid);
      let reversedHalf = secondHalf.split('').reverse().join('');
      console.log(firstHalf, reversedHalf)
      return firstHalf === reversedHalf;
  }
};