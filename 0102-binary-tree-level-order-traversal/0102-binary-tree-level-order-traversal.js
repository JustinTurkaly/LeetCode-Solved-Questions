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
Output - an array representing a level order traversal
Constr/Edge - empty input return empty array
Pseudo - 
1 - handle the edge case
2 - set result to an empty array and put root in empty queue
3 - use bfs while loop
4 - push in a mapped version of the queue into result
5 - inner while loop decrementing the len
6 - shift off first node in queue and push its children in to queue
*/
var levelOrder = function(root) {
  if (!root) return [];
  
  let result = [];
  let queue = [root];
  
  while (queue.length) {
    
    let len = queue.length;
    result.push(queue.map((node) => node.val));
    
    while (len--) {
      let current = queue.shift();
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }
  }
  
  return result;
};