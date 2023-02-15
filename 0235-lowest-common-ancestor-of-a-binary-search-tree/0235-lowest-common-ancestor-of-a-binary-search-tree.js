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
Input - a bst, and 2 target nodes
Output - the lca of the nodes
Constr/Edge - no null inputs, p and q are unique
Pseudo - 
1 - use a dfs to traverse the tree
2 - with each call check if current node is the target node
3 - if 2/3 nodes are truthy, assign result to node
4 - if any of the nodes equal the target return true up the stack

*/
var lowestCommonAncestor = function(root, p, q) {
  let result = null;
  
  const dfs = (node) => {
    if (!node) return false;
    
    let left = dfs(node.left);
    let right = dfs(node.right);
    let current = node === p || node === q;
    
    if (left + right + current > 1) result = node;
    
    return left || right || current;
  } 
  
  dfs(root);
  return result;
};