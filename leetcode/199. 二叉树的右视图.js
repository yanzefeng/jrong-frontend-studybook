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
 var rightSideView = function(root) {
  let arr = []
  function rightSideViewFn(root, i = 0) {
      if (!root) return
      !arr[i] && (arr[i] = [])
      arr[i].push(root.val)
      rightSideViewFn(root.left, i + 1)
      rightSideViewFn(root.right, i + 1)
  }
  rightSideViewFn(root)
  let arr2 = []
  for (let val of arr) {
      arr2.push(val[val.length - 1])
  }
  return arr2 
};