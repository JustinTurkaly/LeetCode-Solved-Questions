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
Input - root binary tree
Output - a boolean representing if tree is height balanced (dif in depth of left and right subtree < 2)
Constr/Edge - empty tree returns true
Plan - 
- if root.length === 0 return true
- traverse down tree
  - assign left and right variable to recursive calls
  - if difference in height is greater than 1 return false
- return true
*/
var isBalanced = function(root) {
  let res = true;
  
  const maxDepth = (node, level) => {
    if (!node) return 0;
    
    let left = maxDepth(node.left);
    let right = maxDepth(node.right);
    
    if (Math.abs(left - right) > 1) res = false;
    
    return 1 + Math.max(left, right);
  }
  
  maxDepth(root, 1);
  
  return res;
};