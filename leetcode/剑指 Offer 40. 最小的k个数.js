
/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var getLeastNumbers = function (arr, k) {
  arr = arr.sort((a, b) => a - b)
  arr = arr.slice(0, k)
  return arr
}
