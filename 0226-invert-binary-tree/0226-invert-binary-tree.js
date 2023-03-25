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
 * @return {TreeNode}
 */

/*
Input - root of binary tree
Output - the root of inverted binary tree
Constr/Edge - empty tree returns empty array
Plan - 
- swap left and right recursively, starting with root
- return once null nodes found
*/
var invertTree = function(root) {
   if (root) {
     [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
   }
  
  return root;
};