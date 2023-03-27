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
  temp = s.replace(/[^a-zA-Z0-9]/g, ''); // Remove all non-alphabetic characters
  formatted = temp.toLowerCase(); // Convert all alphabetic characters to lowercase
  console.log(formatted)
  let flag = formatted.length % 2 === 0;
  
  let mid = Math.floor(formatted.length / 2);
  let firstHalf = formatted.substring(0, mid);
  let secondHalf = flag ? formatted.substring(mid) : formatted.substring(mid + 1)
  let reversedHalf = secondHalf.split('').reverse().join('');
  return firstHalf === reversedHalf;
  
};