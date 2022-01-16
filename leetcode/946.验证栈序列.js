/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
 var validateStackSequences = function(pushed, popped) {
  let stack = [], sum = 0;
  for (let val of pushed) {
      stack.push(val)
      while(stack.length && popped[sum] === stack[stack.length - 1]) {
          stack.pop()
          sum++
      }
  }
  return !stack.length
};