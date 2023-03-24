/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */

/*
Input - two strings
Output - a boolean representing if S can transform into goal via shifts
Constr/Edge - no empty inputs, only lowercase
Plan - 
- shift string 
- check if shifted string === goal string
- stop shifting at the length of the string
- after loop ends, return proper boolean
*/
var rotateString = function(s, goal) {
  i = 0;
  while (i <= s.length) {
    let first = s.slice(0, 1)
    s = s.substring(1);
    s += first;
    if (s === goal) {
      return true;
    }
    i++
  }
  return false;
};