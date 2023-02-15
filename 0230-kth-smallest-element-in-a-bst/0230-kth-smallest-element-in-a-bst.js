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
 * @param {number} k
 * @return {number}
 */

/*
Input - root of bst
Output - the kth smallest value
Constr/Edge - no empty trees, values cant be negatve
Pseudo - 
1 - push the results of an in order dfs into a sorted array
2 - return the array[k - 1]
*/
var kthSmallest = function(root, k) {
  let sorted = [];
  
  const inOrderDfs = (node) => {
    if (!node) return;
    
    inOrderDfs(node.left);
    sorted.push(node);
    inOrderDfs(node.right);
  }
  inOrderDfs(root);
  
  return sorted[k - 1].val
};