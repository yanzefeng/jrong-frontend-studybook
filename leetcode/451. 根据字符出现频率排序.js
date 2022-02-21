/**
 * @param {string} s
 * @return {string}
 */

 var frequencySort = function(s) {
  let sMap = {}
  for (let val of s) {
      if (!sMap[val]) {
          sMap[val] = 1
      } else {
          sMap[val]++
      }
  }
  let list = [...Object.keys(sMap).sort((a, b) => sMap[b] - sMap[a])]
  let str = ''
  for (let val of list) {
      for (let i = 0; i < sMap[val]; i++) {
          str += val
      }
  }
  return str
};