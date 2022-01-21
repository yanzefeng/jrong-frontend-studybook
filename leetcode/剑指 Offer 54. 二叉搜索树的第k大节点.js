var kthLargest = function(root, k) {
  // 获取有节点的数量
  let count_r = getCount(root.right)
  if (count_r >= k)
  let arr = []
  function kthLargestFn(root) {
      if (!root) return 
      kthLargestFn(root.left)
      arr.push(root.val)
      kthLargestFn(root.right)
  }
  kthLargestFn(root)
  return arr[arr.length - k]
};


function getCount(root) {
  if (!root) return 0
  return getCount(root.left) + getCount(root.right) + 1
}
var kthLargest = function(root, k) {
  let count_r = getCount(root.right)
  if (count_r >= k) return kthLargest(root.right, k)
  if (count_r + 1 === k) return root.val
  // count_r + 1 是右节点数量加上根节点数量
  return kthLargest(root.left, k - count_r - 1)
};