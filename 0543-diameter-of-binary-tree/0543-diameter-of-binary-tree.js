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
 * @return {number}
 */

/*
Input - root of binary tree
Output - length of longest path between any two nodes
Constr/Edge - no empty inputs
Plan - 
- traverse tree
  - starting bottom left count edges from parent then parents other children
  - keep track of current edge max and global edge max
- return global max
*/
var diameterOfBinaryTree = function(root) {
  let maxEdge = 0;
  
  const dfs = (node) => {
    if (!node) {
      return 0;
    }
    
    let left = dfs(node.left);
    let right = dfs(node.right);
    let currentMax = left + right;
    
    maxEdge = Math.max(maxEdge, currentMax);
    
    return Math.max(left + 1, right + 1);
  }
  dfs(root);
  
  return maxEdge;
};