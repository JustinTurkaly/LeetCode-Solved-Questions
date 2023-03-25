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
Input - root of binary tree
Output - a boolean representing if tree is height balanced
Constr/Edge - empty tree returns true
Plan - 
- traverse tree
  - keep track of height of left side and right side seperately
  - if the difference between heights is greater than 1 return false else true
*/
var isBalanced = function(root) {
  let result = true;
  
  const traverse = (node) => {
    if (!node) {
      return 0;
    }
    let leftHeight = traverse(node.left);
    let rightHeight = traverse(node.right);  
    if (Math.abs(leftHeight - rightHeight) > 1) {
      result = false;
    }
    
    return 1 + Math.max(leftHeight, rightHeight)
  }
  
  traverse(root, 1)
  return result;
};