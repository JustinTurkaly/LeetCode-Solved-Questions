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
 * @return {number[][]}
 */

/*
Input - root of binary tree
Output - an array representing the level order traversal
Constr/Edge - empty input returns itself
Plan - 
- init result arr and init queue array with root
- use bfs to build level arrays
  - assign cur to queue.shift()
  - keep track of level size and push into result array when meets limit
  - check if cur has children and push into queue if true
*/
var levelOrder = function(root) {
  if (!root) return [];
  const result = [];
  const queue = [root];
  
  while (queue.length) {
    let level = [];
    let levelSize = queue.length;
    while (levelSize) {
      let cur = queue.shift();
      if (cur.left) queue.push(cur.left);
      if (cur.right) queue.push(cur.right);
      
      level.push(cur.val);
      levelSize--;
    }
    result.push(level);
  }
  return result;
};