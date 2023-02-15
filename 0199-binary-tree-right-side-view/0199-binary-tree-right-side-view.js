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
Input - root of binary tree
Output - the right side view of it
Constr/Edge - account for empty input
Pseudo - 
o - use a bfs level by level search
o - if level >= result list, push node val into result list
o - return result list
*/
var rightSideView = function(root) {
  if (!root) return [];
  let result = [];
  
  const bfs = (node, level) => {
     if (level === result.length) {
      result.push(node.val);
    }
    
    if (node.right) bfs(node.right, level + 1);
    if (node.left) bfs(node.left, level + 1);
  }
  bfs(root, 0);
  
  return result;
};