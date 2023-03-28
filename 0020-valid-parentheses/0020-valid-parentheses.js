/**
 * @param {string} s
 * @return {boolean}
 */

/*
Input - a string containing bracket chars
Output - a boolean representing if the parenthesis are valid
Constr/Edge - guaranteed at least a string of length 1, if it is 1 return false
Plan - 
- loop thru string
  - if its an opening bracket
    - push the bracket into the stack
  - if closing bracket, pop off the stack and make sure it matches the closing bracket
- check if the stack is empty

Time - O(n)
Space - O(n)
*/
var isValid = function(s) {
  const stack = [];
  
  const parenMap = {
    '(': ')',
    '[': ']',
    '{': '}',
  }
  
  for (let i = 0; i < s.length; i++) {
    let cur = s[i];
    if (cur === '(' || cur === '[' || cur === '{') {
      stack.push(cur);
    } else {
      let lastVal = stack.pop();
      
      if (parenMap[lastVal] !== cur) return false;
    }
  }
  return stack.length === 0;
};