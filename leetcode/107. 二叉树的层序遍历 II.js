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
 var levelOrderBottom = function(root) {
  let arr = []
  function levelOrderBottomFn(root, i = 0) {
      if (!root) return
      if (!arr[i]) arr[i] = []
      arr[i].push(root.val)
      levelOrderBottomFn(root.left, i + 1)
      levelOrderBottomFn(root.right, i + 1)
  }
  levelOrderBottomFn(root)
  for (let i = 0, j = arr.length - 1; i < j; i++, j--) {
      arr[i] = [arr[j], arr[j] = arr[i]][0]
  }
  return arr
};