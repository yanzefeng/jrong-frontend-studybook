/**
 * @param {number[]} hours
 * @return {number}
 */
var longestWPI = function (hours) {
  let preSum = new Array(hours.length + 1).fill(0)
  for (let i = 1; i <= hours.length; i++) {
    if (hours[i - 1] > 8) {
      preSum[i] = preSum[i - 1] + 1
    } else {
      preSum[i] = preSum[i - 1] - 1
    }
  }
  let max = 0
  for (let i = 0; i < preSum.length - 1; i++) {
    for (let j = i + 1; j < preSum.length; j++) {
      if (preSum[j] - preSum[i] > 0) {
        max = Math.max(max, j - i)
      }
    }
  }
  return max
}
