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
Output - the number of nodes, along the longest path from root node to farthest leaf node
Constr/Edge - no empty inputs
Plan - 
- keep track of maxDepth in int var
- use bfs to traverse tree, keep track of current level
  - if node null return
  - assign maxDepth to the max between maxDepth and level
  - recurse down each node, incrementing the level
-return maxDepth
*/
var maxDepth = function(root) {
  let max = 0;
  
  const bfs = (node, level) => {
    if (!node) return;
    max = Math.max(max, level);
    
    bfs(node.left, level + 1);
    bfs(node.right, level + 1);
  }
  bfs(root, 1);
  return max;
};