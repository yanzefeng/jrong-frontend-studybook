/**
 * @param {number[]} stones
 * @return {number}
 */
 var lastStoneWeight = function(stones) {
  let arr = stones.sort((a, b) => b - a)
  while(arr.length > 1) {
      const y = arr.shift()
      const x = arr.shift()
      let h = y - x
      if (h > 0) arr = [...arr, h].sort((a, b) => b - a)
  }
  return arr
};