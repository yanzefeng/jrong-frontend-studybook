/**
 * @param {string} preorder
 * @return {boolean}
 */
 var isValidSerialization = function(preorder) {
  // 二叉树的出度和入度刚好相等
  let arr = preorder.split(',')
  // 为什么初始化为1，因为头节点 入度为0出度为2， 所以循环进入的时候就刚好减去1，入度就是0
  let diff = 1
  for (let val of arr) {
      // 减去一个入度
      diff -= 1
      if (diff < 0) {
          return false
      }
      if (val !== '#') {
          diff += 2
      }
  }
  return diff === 0
  // let arr = preorder.split(',')
  // let stack = []
  // for (let val of arr) {
  //     stack.push(val)
  //     // let len = stack.length
  //     while (stack.length >= 3 && stack[stack.length - 1] === '#' && stack[stack.length - 2] === '#' && stack[stack.length - 3] !== '#') {
  //         stack.pop(),stack.pop(),stack.pop()
  //         stack.push('#')
  //     }
  // }
  // return stack.length === 1 && stack.pop() === '#'
};