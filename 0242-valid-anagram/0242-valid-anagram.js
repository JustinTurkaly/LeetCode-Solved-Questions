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
- return false if lengths do not match
- loop thru s and build freqMap
- loop thru t 
  - if current char is not present in freqMap return false
    - if it is present, decrement count in map
- return true
*/
var isAnagram = function(s, t) {
  if (s.length !== t.length) return false;
  
  const freqObj = s.split('').reduce((freq, char) => {
    freq[char] = freq[char] ? freq[char] + 1 : 1;
    return freq;
  }, {})
  
  for (let i = 0; i < t.length; i++) {
    if (!freqObj[t[i]]) return false;
    freqObj[t[i]]--;
  }
  return true;
};
