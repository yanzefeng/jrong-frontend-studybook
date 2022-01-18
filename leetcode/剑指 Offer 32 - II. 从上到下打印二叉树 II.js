/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
  let arr = []
  function levelOrderFn(root, i = 0) {
      if (!root) return
      if (!arr[i]) arr[i] = []
      arr[i].push(root.val)
      levelOrderFn(root.left, i + 1)
      levelOrderFn(root.right, i + 1)
  }
  levelOrderFn(root)
  return arr
};