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
 * @param {number} val
 * @return {TreeNode}
 */

/*
Input - root of BST and target integer
Output - the subtree of the node whose value equals target int
Constr/Edge - no empty inputs and no negative values
Plan - 
- check if root value is equal, less or greater than target val
- if root = target return root
- if root < target reassign root to root.right
- if root > target reassign root to root.left
- once broken out of loop, return null;
*/
var searchBST = function(root, val) {
  while (root) {
    if (root.val === val) { return root};
    if (root.val < val) {
      root = root.right;
    }
    if (root && root.val > val) {
      root = root.left;
    }
  }
  return null;
};