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
Input - the root of binary tree
Output - the max diameter of binary tree,diameter of a binary tree is the length of the longest path between any two nodes in a tree
Constr/Edge - no empty inputs
Pseudo - 
1 - set a global max variable and define dfs function
2 - base case of null child returns 0
3 - recurse on both sides
4 - reassign global max to the max of left plus right and old max
5 - return the max of left and right incremented
*/
var diameterOfBinaryTree = function(root) {
  let max = 0;
  
  const dfs = (node) => {
    if (!node) return 0;
    
    let left = dfs(node.left);
    let right = dfs(node.right);
    
    max = Math.max(left + right, max);
    return Math.max(left, right) + 1;
  }
  
  dfs(root);
  return max;
};