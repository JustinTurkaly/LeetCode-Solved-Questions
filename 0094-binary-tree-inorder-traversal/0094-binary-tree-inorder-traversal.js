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
 * @return {number[]}
 */

/*
Input - root of bin tree
Output - the inorder traversal of its nodes (array)
Constr/Edge - empty input will return empty array, single root returns itself
Plan - 
- traverse tree
- make a tree node in the following order: left child, parent, right child
*/
var inorderTraversal = function(root) {
  const result = [];
  const traverse = (node) => {
    if (!node) return;
        
    if (node.left) traverse(node.left);
    result.push(node.val);
    if (node.right) traverse(node.right);
  }
  traverse(root);
  return result;
};