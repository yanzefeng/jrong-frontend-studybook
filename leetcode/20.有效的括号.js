/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
  if (!s) return true
  let map = new Map([
      [']', '['],
      [')', '('],
      ['}', '{']
  ])
  let arr = []
  for (let key in s) {
      let str = s[key]
      if (['[', '(', '{'].includes(str)) {
          arr.push(str)
      } else if (!arr.length || map.get(str)  !== arr.pop()) {
          return false
      }
  }
 return !arr.length
};