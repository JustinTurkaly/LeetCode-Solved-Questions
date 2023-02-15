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
 * @return {void} Do not return anything, modify root in-place instead.
 */

/*
Input - root of binary tree
Output - the root of the recovered tree
Constr/Edge - never an empty tree and negative values
Pseudo - 
1 - push the results of an in order dfs search of the tree
2 - loop through the should be sorted array
3 - store current and next into an temp tuple
*/
var recoverTree = function(root) {
  let almostSorted = [];
  let trySort = [null, null];
  
  const inOrderDfs = (node) => {
    if(!node) return;
    
    inOrderDfs(node.left);
    almostSorted.push(node);
    inOrderDfs(node.right);
  }
  inOrderDfs(root);
  
  for (let i = 0; i < almostSorted.length - 1; i++) {
    let current = almostSorted[i];
    let next = almostSorted[i + 1];
    
    if (current.val > next.val) {
     if (!trySort[0]) {
       trySort = [current, next];
     } else {
       trySort[1] = next;
     }
    }
  }
  
  [trySort[0].val, trySort[1].val] = [trySort[1].val, trySort[0].val];
  return root;
};