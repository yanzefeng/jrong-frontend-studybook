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
 * @param {number} k
 * @return {number}
 */
 function getCount(root) {
  if (!root) return 0
  return getCount(root.left) + getCount(root.right) + 1
}
// 搜索二叉树是左边比有边小，前序遍历就是一个升序排列
var kthSmallest = function(root, k) {
    let c_f = getCount(root.left)
    if (c_f >= k) return kthSmallest(root.left, k)
    if (c_f + 1 === k) return root.val
    return kthSmallest(root.right, k - c_f - 1)
    // let ans
    // function kthSmallestFn(root) {
    //     if (!root) return
    //     kthSmallestFn(root.left)
    //     if (--k === 0) ans = root.val
    //     kthSmallestFn(root.right)
    // }
    // kthSmallestFn(root)
    // return ans
};