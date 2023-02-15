/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

/*
Input - root of binary tree, 2 target nodes
Output - the lca of the two given nodes
Constr/Edge - no empty inputs, target nodes are unique
Pseudo - 
1 - use dfs to traverse tree
2 - if children equal the target node assign result to node
3 - if 2/3 nodes equal true then return true up tree
*/
var lowestCommonAncestor = function(root, p, q) {
  let result = null;
  
  const dfs = (node) => {
    if (!node) return false;
    
    let left = dfs(node.left);
    let right = dfs(node.right);
    let center = node === p || node === q;
    
    if (left + right + center > 1) result = node;
    
    return left || right || center
  }
  dfs(root);
  
  return result;
};