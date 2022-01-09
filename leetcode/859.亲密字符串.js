/**
 * @param {string} s
 * @param {string} goal
 * @return {boolean}
 */
 var buddyStrings = function(s, goal) {
  if (s.length != goal.length) return false

  if (s === goal) {
      return checkStr(s)
  }
  let arr = []
  for (let i = 0 ; i < s.length ; i++) {
      let si = s[i]
      let gi = goal[i]
      if (si !== gi) {
          arr.push(i)
      }
      if (arr.length > 2) return false

  }
  // if (arr.length > 2) return false
  return s[arr[0]] === goal[arr[1]] && s[arr[1]] === goal[arr[0]]
};

function checkStr(str) {
  let map = {}
  for (let i = 0; i < str.length; i++) {
      if (!map[str[i]]) {
          map[str[i]] = 1
      } else {
          return true
      }
  }
  return false
}