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
 var zigzagLevelOrder = function(root) {
  let arr = []
  function zigzagLevelOrderFn (root, i = 0) {
      if (!root) return
      if (!arr[i]) arr[i] = []
      arr[i].push(root.val)
      zigzagLevelOrderFn(root.left, i + 1)
      zigzagLevelOrderFn(root.right, i + 1)
  }
  zigzagLevelOrderFn(root)

  for (let i = 0; i < arr.length; i++) {
      if (i % 2 === 1) {
          for (let j = 0, k = arr[i].length - 1; j < k; j++, k--) {
              arr[i][j] = [arr[i][k], arr[i][k] = arr[i][j]][0]
          }
          // arr[i].reverse()
      }
  }
  return arr
};