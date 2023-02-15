/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

/*
Input - the root of binary tree
Output - a boolean representing if the tree is a true bst
Constr/Edge - no null inputs and account for negative node values
Pseudo - 
1 - make a recursive func
2 - check if node value is in between range of min max
3 - if it is then recurse down each side, passing in the max then the min accordingly
4 - return true if you break out of recursive func
*/
var isValidBST = function(root) {
  
//   const recurse = (node, min, max) => {
//     if (node === null) return true;
    
//     if (node.val >= max || node.val <= min) return false;
    
//     return recurse(node.left, min, node.val) && recurse(node.right, node.val, max);
//   }
//   return recurse(root, -Infinity, Infinity)
  let maybeSorted = [];
  
  const inOrderDfs = (node) => {
    if (!node) return;
    
    inOrderDfs(node.left);
    maybeSorted.push(node);
    inOrderDfs(node.right);
  }
  inOrderDfs(root);
  
  for (let i = 0; i < maybeSorted.length - 1; i++) {
    let current = maybeSorted[i];
    let next = maybeSorted[i + 1];
    
    if (current.val >= next.val) return false
  }
  
  return true;
};