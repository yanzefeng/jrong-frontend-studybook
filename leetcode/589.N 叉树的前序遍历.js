/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */

// 迭代法
 var preorder = function(root) {

  if (!root) return []

  let arr = []
  let stack = []
  stack.push(root)
  while(stack.length) {
      let top  = stack.pop()
      arr.push(top.val)
      if (top.children) {
          let len = top.children.length
          for (let i = len - 1; i >= 0; i--) {
              stack.push(top.children[i]) 
          }
      }
  }
  return arr
};

// 递归法
var preorder = function(root) {

  if (!root) return []

  let arr = []
  function preorderFn(root) {
    if (!root) return
    arr.push(root.val)
    if (root.children) {
        for (let i = 0; i < root.children.length; i++) {
           preorderFn(root.children[i]) 
        }
    }
  }
  preorderFn(root)
  
  return arr
};
