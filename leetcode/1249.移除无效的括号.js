/**
 * @param {string} s
 * @return {string}
 */
 var minRemoveToMakeValid = function(s) {
  let stack = [] // 无用左括号下标
  let ringhtArr = [] // 无用有括号下标
  let retS = '' // 最终返回的结果
  s = s.split('')
  for(let i = 0; i < s.length; i++) {
      let str = s[i]
      if (str === '(') {
          stack.push(i)
      } else if ( str === ')') {
          if (stack.length) {
              stack.pop()
          } else {
              ringhtArr.push(i)
          }
          
      }
  }
  if (!stack.length && !ringhtArr.length) return s
  stack = [...stack, ...ringhtArr].sort((a, b) => a - b)
  for (let i = 0, j = 0; i < s.length; i++) {
      if (i !== +stack[j]) {
          retS += s[i]
      } else {
          ++j
      }
  }
  return retS
};