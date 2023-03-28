/**
 * @param {string} s
 * @return {number}
 */

/*
Input - string of upper and lowercase letters
Output - the length of the longest palindrome that can be built with those letters
Constr/Edge - no empty inputs, only upper/lowercase letters
Plan - 
- build a freq map out of the string
- loop thru the values of that object
  - if num is odd, increment count and flip boolean
  - else add value to count
- return count
*/
var longestPalindrome = function(s) {
  let count = 0;
  let map = new Map();
  
  for (let c of s) {
    let n = 0;
    if (map.has(c)) {
      n = map.get(c);
      if (n % 2) {
        count += 2;
      }
    } 
      map.set(c, n + 1);
  }
  
  return s.length > count ? count + 1 : count;
};