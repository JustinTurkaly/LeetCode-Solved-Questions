/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */

/*
Input - two int arrays representing a preorder and in order traversal
Output - the constructed tree
Constr/Edge - 
Pseudo - 
- check base case
- grab first value of preorder and the index of that in inorder
- set left and right equal to recurse on both sides
- modify the inputs so they are split into left and right of target
*/
var buildTree = function(preorder, inorder) {
  if (!preorder.length || !inorder.length) return null;
  
  let root = new TreeNode(preorder[0]);
  let target = inorder.indexOf(root.val);
  
  root.left = buildTree(preorder.slice(1, target + 1), inorder.slice(0, target));
  root.right = buildTree(preorder.slice(target + 1), inorder.slice(target + 1));
  
  return root;
};