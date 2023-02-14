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
Output - a boolean representing if the tree is height balanced
Pseudo -
1 - use dfs to search tree
2 - set a left and right variable equal to a recursive call
3 - compare left and right heights
4 - return the max of left and right incremented
*/
var isBalanced = function(root) {
  let result = true;
    
  const dfs = (node) => {
    if (!node) return 0;
    
   let left = dfs(node.left);
   let right = dfs(node.right);
    
    if (Math.abs(left - right) > 1) result = false;
    
    return Math.max(left, right) + 1;
  }
  dfs(root);
  return result;
};