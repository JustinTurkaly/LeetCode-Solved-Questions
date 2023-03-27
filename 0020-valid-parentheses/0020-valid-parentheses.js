/**
 * @param {string} s
 * @return {boolean}
 */

/*
Input - a string
Output - a boolean representing if the parenthesis are valid
Constr/Edge - no empty string inputs, s.length of 1 return false;
Plan - 
 - loop thru string
  - if brackets are opening, push into stack
  - if brackets are closing, pop off stack and make sure the brackets match
  - return false if they dont match
- return stack.length === 0;
*/
var isValid = function(s) {
  const stack = [];
  
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
      stack.push(s[i]);
    } else {
      let lastEl = stack.pop();
      if (s[i] === ')' && lastEl !== '(') {
        return false;
      }
      if (s[i] === '}' && lastEl !== '{') {
        return false;
      }
      if (s[i] === ']' && lastEl !== '[') {
        return false;
      }
    }
  }
  return stack.length === 0;
};