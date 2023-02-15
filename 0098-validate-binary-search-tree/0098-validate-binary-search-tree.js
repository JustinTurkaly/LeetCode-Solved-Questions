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
1 - traverse tree using a in order dfs
2 - check in place if left parent right are in ascending order
*/
var isValidBST = function(root) {
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