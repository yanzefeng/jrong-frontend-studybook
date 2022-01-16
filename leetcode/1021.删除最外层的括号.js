/**
 * @param {string} s
 * @return {string}
 */
 var removeOuterParentheses = function(s) {
  let count = 0, ret = ''
  for (let val of s) {
      if (val === '(' && count++ > 0) ret+=val;
      if (val === ')' &&  count-- > 1) ret+=val;
  }
  return ret
};