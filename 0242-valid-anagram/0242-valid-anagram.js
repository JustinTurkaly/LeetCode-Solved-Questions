/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
Input - two strings
Output - a boolean representing if the strings are anagrams
Constr/Edge - no empty inputs, only lowercase letters
Plan - 
- sort both arrays
- return if they are equal
*/
var isAnagram = function(s, t) {
  return sort(s) === sort(t);   
};

var sort = (str) => {
  return str.split('').sort().join();
}