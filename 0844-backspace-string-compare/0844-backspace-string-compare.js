/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

/*
Input - two strings
Output - a boolean representing if both strings are equal after backspaces
Constraints/Edge - only lowercase letters and #'s, no empty strings

Pseudo - 
1. Make stack variables for both strings
2. Loop thru string
3. if letter is not # then push into stack
4. if letter is # then pop off stack
5. join stacks and compare
*/
var backspaceCompare = function(s, t) {
  let stackS = [];
  let stackT = [];
  
  for (let i = 0; i < s.length; i++) {
    s[i] === "#" ? stackS.pop() : stackS.push(s[i])
  }
  let joinedS = stackS.join('');
  
  for (let j = 0; j < t.length; j++) {
    t[j] === "#" ? stackT.pop() : stackT.push(t[j])
  }
  let joinedT = stackT.join('');
  
  return joinedS === joinedT
};