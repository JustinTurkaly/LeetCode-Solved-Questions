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
Input - the root of binary tree
Output - the root of the inverted binary tree
Constr/Edge - node value can be negative, empty root return empty root

Pseudo - 
1 - recurse down each node
2 - swap at each level
*/
var invertTree = function(root) {
  
  const reverseNodes = (node) => {
    if (!node) return;
    
    reverseNodes(node.left);
    reverseNodes(node.right);
    
    let hold = node.left;
    node.left = node.right;
    node.right = hold;
  }
  reverseNodes(root);
  
  return root;
};