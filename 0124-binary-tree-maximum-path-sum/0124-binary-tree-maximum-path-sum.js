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
Output - the max path sum of any path
Constr/Edge - no empty inputs and account for negative node values
Pseudo - 
- traverse tree with dfs
- keep track of current max sum of the path
- keep track of current connected max

*/
var maxPathSum = function(root) {
  let max = -Infinity;
  
  const dfs = (node) => {
    if (!node) return -Infinity;
    
    let leftConnected = dfs(node.left);
    let rightConnected = dfs(node.right);
    
    let maxConnected = Math.max(
      node.val,
      node.val + leftConnected,
      node.val + rightConnected
    )
    
    max = Math.max(
      max,
      maxConnected,
      leftConnected,
      rightConnected,
      node.val + leftConnected + rightConnected
    )
    
    return maxConnected;
  }
  dfs(root);
  
  return max;
};