/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
 var leastInterval = function(tasks, n) {
  // if (n === 0) return tasks
  let arr = new Array(26).fill(0)
  for (let val of tasks) {
      arr[val.charCodeAt() - 'A'.charCodeAt()]++
  }
  let max = Math.max(...arr)
  let ret = (max - 1) * (n + 1)
  for (let i = 0; i < arr.length; i++) {
      if (arr[i] === max) {
          ret++
      }
  }
  return Math.max(ret, tasks.length)
};