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
Output - return max depth of the tree from root to farthest leaf
Constr/Edge - 
Pseudo - 
1 - do a maxdepth search on the tree
2 - increment the level
3 - return the max level
*/
var maxDepth = function(root) {
  let max = 0;
  if (!root) return 0;
  
  const maxDepth = (node) => {
    if (!node) return 0;
    
    let lDepth = maxDepth(node.left);
    let rDepth = maxDepth(node.right);
    max = Math.max(lDepth, rDepth);
    
    return Math.max(lDepth, rDepth) + 1
  }
  maxDepth(root);
  return max + 1;
  
};