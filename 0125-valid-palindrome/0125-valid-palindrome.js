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
  temp = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();

  let reversed = temp.split('').reverse().join('');
  return temp === reversed;
  
};