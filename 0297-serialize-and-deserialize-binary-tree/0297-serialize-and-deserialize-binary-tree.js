/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

/*
Input - root of binary tree
Output - a serialized version of the tree that can be de serialized
Constr/Edge - can be empty input
Pseudo -  
- use preorder traversal recursivaley build a string of the tree
- split the data into an array recurse on the list
- build a new node for each value then shift the value out of the list
- recurse down each side
*/
var serialize = function(root) {
  
  const preOrderStringBuilder = (node, str) => {
    if (!node) return str += 'null,';
    
    str = str + node.val + ",";
    str = preOrderStringBuilder(node.left, str);
    str = preOrderStringBuilder(node.right, str);
    return str;
  }
  return preOrderStringBuilder(root, '');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
  let split = data.split(',');
  split.pop();
  
  const treeBuilder = (list) => {
    if (list[0] === "null") {
      list.shift();
      return null;
    }
    
    let node = new TreeNode(list[0]);
    list.shift();
    node.left = treeBuilder(list);
    node.right = treeBuilder(list);
    return node;
  }
  return treeBuilder(split);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */