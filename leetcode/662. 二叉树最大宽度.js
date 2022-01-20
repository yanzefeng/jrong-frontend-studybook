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
 var widthOfBinaryTree = function(root) {
  let queue = [[root, 1]]
  let res = 0
  let left = 0
  let right = 0
  while(queue.length) {
      left = queue[0][1]
      let len = queue.length
       for (let i = 0; i < len; i++) {
           let [h, pos] = queue.shift()
           right = pos
           h.left && queue.push([h.left, 2 * (pos - left) ])
           h.right && queue.push([h.right, 2 * (pos - left) + 1])
       }
       res = Math.max(res, right - left + 1)
  }
  return res

};