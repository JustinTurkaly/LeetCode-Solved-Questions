/**
 * @param {string} s
 * @return {number}
 */

/*
Input - a string
Output - the length of the longest palindrome
Plan - 
- create a count var and a freqObj
- loop thru string
  - set n to 0
  - if current char is inside freqObj
    - set n = the value inside obj
    - if n is even add to count
  - if not inside
    - assign char to key in obj with value of 1
- return count
*/
var longestPalindrome = function(s) {
  let count = 0;
  let freqObj = {};
  
  for (let c of s) {
    let n = 0;
    if (freqObj[c]) {
      n = freqObj[c];
      console.log(c, n)
      if (n % 2) {
        count += 2;
      }
    } 
    freqObj[c] = n + 1;
    
  }
  return s.length > count ? count + 1 : count;
};